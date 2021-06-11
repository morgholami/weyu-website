import Vue from 'vue'
import tokenContract from "./ERC-20.json";

/**
 * When using the walletconnect protocol we need to make sure to use the custom requests.
 * https://docs.binance.org/walletconnect.html
 */
import WalletConnectProvider from "@walletconnect/web3-provider";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Web3 from 'web3'
const web3 = new Web3()

const walletProvider = new WalletConnectProvider({
  // For some reason, chainID needs to be 1
  chainId: process.env.NUXT_ENV_BSC_NETWORK_ID,
  rpc: {
    56: process.env.NUXT_ENV_BSC_RPC
  },
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"]
  }
})



export default (context, inject) => {
  const bsc = new Vue({
    data() {
      return {
        explorer: process.env.NUXT_ENV_BLOCKEXPLORER,
        wallet: null,
        loginModal: false,
        efxAvailable: null,
        updater: null,
        transaction: null,
        transactionError: null,
        metamask: window.ethereum || null,
        binance: window.BinanceChain || null,
        walletConnect: walletProvider || null, //connect to mobile wallet; trust, metamask, ...
        walletConnected: null, // Does it make sense to do this at the beginning?
        currentProvider: null,
        token: null
      }
    },
    created() {
      this.updater = setInterval(() => {
        this.updateAccount()
      }, 10000)
    },
    beforeDestroy() {
      clearInterval(this.updater)
    },

    methods: {
      async logout() {

        if (this.currentProvider) {
          if(this.currentProvider == this.walletConnect) {
            // This method is only available for WalletConnect
            await this.walletConnect.disconnect()
            this.wallet = null
            window.location.reload()
          } else {
            this.wallet = null
          }
        }
        this.clear()
        console.log(context)
        context.app.router.push("/")
        this.token = null
        context.$axios.setToken(false)
      },
      async switch() {
        if (this.currentProvider) {
          if(this.currentProvider == this.walletConnect) {
            // This method is only available for WalletConnect
            await this.walletConnect.disconnect()
            this.wallet = null
            window.location.reload()
          } else {
            this.wallet = null
          }
        }
        this.clear()
        this.loginModal = true
      },

      updateAccount() {
        if (this.wallet) {
          //this.getAccountBalance()
        }
      },

      clear() {
        this.clearTransaction()
        Object.assign(this.$data, this.$options.data.call(this))
      },

      async getAccountBalance() {
        if (this.currentProvider && this.wallet) { // make sure that there is a wallet as well
          try {
            const response = await this.currentProvider.request({
              method: 'eth_getBalance',
              params: [
                this.wallet[0]
              ]
            })
            this.efxAvailable = web3.utils.fromWei(response.toString())
          } catch (balanceError) {
            console.error(balanceError)
          }
        }
      },

      handleTransaction(actions) {
        this.clearTransaction()

        // TODO: handle bsc transaction
      },

      checkBinanceInstalled() {
        return Boolean(this.binance)
      },

      checkBscFormat(bscAddress) {
        const response =  web3.utils.isAddress(bscAddress, process.NUXT_ENV_BSC_NETWORK_ID)
        console.log(`ResponseCheckBSCFormat: ${response}`)
        return response
      },

      clearTransaction() {
        this.transaction = null
        this.transactionError = null
      },
      async onMetaMaskConnect() {
        try {
          console.log('Connecting MetaMask')
          if(!this.metamask) this.metamask = window.ethereum
          this.registerProviderListener(this.metamask)
          this.wallet = await this.currentProvider.request({
            method: 'eth_requestAccounts'
          })
          this.checkBscFormat(this.wallet[0])
        } catch (mmError) {
          console.error(mmError)
          if (mmError) {
            return Promise.reject(mmError)
          }
        }
      },

      async onBinanceConnect() {
        try {
          console.log('Connecting Binance')
          if(!this.binance) this.binance = window.BinanceChain
          this.registerProviderListener(this.binance)
          this.wallet = await this.currentProvider.request({
            method: 'eth_requestAccounts'
          })
        } catch (bscError) {
          return Promise.reject(bscError)
        }
      },

      async onWalletConnectWeb3() {

        // TODO: Make sure that all sessions are disconnected
        // TODO when disconnecting and reconnecting there is an error with login modal

        try {

          // Launches QR-Code Modal
          await this.walletConnect.enable()


          this.registerProviderListener(this.walletConnect)
          this.wallet = this.walletConnect.accounts


        } catch (walletConnectError) {
          return Promise.reject(walletConnectError)
        }
      },

      // Handle when the user changes their account number
      async handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log('Please connect your wallet.');
        } else if (accounts[0] !== this.wallet) {
          this.wallet = accounts[0];
        }
      },

      /**
       * Method to add the correct chain to the wallet of the user.
       * method `wallet_addEthereumChain` is not supported on the BinanceChain rpc provider.
       * We cannot add or remove chains with the Binance Chain wallet.
       *
       * But it is currenlty implemented for Metamask
       * https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
       */
      async addChain() {
        const chainId = await this.getCurrentChainNetwork();

        if (chainId != process.env.NUXT_ENV_BSC_HEX_ID) {
          try {

            if (this.currentProvider == this.metamask) {

              // Create BSC network configuration object.
              const chainObject = {
                chainId: process.env.NUXT_ENV_BSC_HEX_ID,
                chainName: process.env.NUXT_ENV_CHAIN_NAME,
                nativeCurrency: {
                  name: process.env.NUXT_ENV_TOKEN_NAME,
                  symbol: process.env.NUXT_ENV_TOKEN_SYMBOL,
                  decimals: 18
                },
                rpcUrls: [process.env.NUXT_ENV_BSC_RPC, 'https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.binance.org'],
                blockExplorerUrls: [process.env.NUXT_ENV_BLOCKEXPLORER]
              }
              // This method is only available for metamask right now.
              const updatedChainId = await this.currentProvider.request({
                method: 'wallet_addEthereumChain',
                params: [chainObject]
              })
              //if (updatedChainId =! null) throw Error(`AddChainError: ${updatedChainId}`)
              if (updatedChainId) {
                console.log(updatedChainId)
              }
            } else {
              // Notify the user to change the chain they are on manually.
              alert(`Please update the current chain in your wallet.`)
              return
            }

          } catch (addChainError) {
            console.error(addChainError)
          }
        }

      },

      /**
       * Retrieve current network the wallet is listening to. can be testnet or mainnet of either bsc or ethereum for example.
       * In what format does this method return the chain id?
       */
      async getCurrentChainNetwork() {
        try {
          return await this.currentProvider.request({method: 'eth_chainId'})
        } catch (error) {
          console.error(error)
          console.error('Error requesting currentChain')
        }
      },

      async sign(message) {
        if (this.currentProvider == this.binance) {
          const signature = await this.currentProvider.request({
            method: 'eth_sign',
            params: [
              this.wallet[0],
              web3.utils.sha3("weyu_"+message, { encoding: 'hex' })
            ]
          })
          return signature
        }
        const signature = await this.currentProvider.request({
          method: 'personal_sign',
          params: [
            "weyu_"+message,
            this.wallet[0]
          ]
        })
        return signature
      },

      async onCorrectChain(){
        try {
          const currentChain = await this.getCurrentChainNetwork()
          const bool = Boolean(currentChain == process.env.NUXT_ENV_BSC_HEX_ID)
          return bool
        } catch (error) {
          console.error('Something went wrong retrieving chain.')
        }
      },

      /**
       * Assign provider to currentProvider, and register eventlisteners.
       *
       */
      async registerProviderListener(provider) {
        // assign provider to this.currentProvider, there are differenct provider objects
        this.currentProvider = provider

        // Change boolean of walletconnected status
        this.walletConnected = true

        // Connection status does not refer to connection with wallet
        // it just means that connection with provider is available and thus requests can be made to it.

        // Connected, requests can be made to provider.
        this.currentProvider.on('connect', () => {
          console.log('Connecting')
          this.walletConnected = true
        })

        // Disconnected, requests can no longer be made with provider.
        this.currentProvider.on('disconnect', () => {
          console.log('Diconnecting')
          this.walletConnected = false
        })

        // Inform user of account change, only one account can be selected
        this.currentProvider.on('accountsChanged', (newWallet) => {
          console.log("Changing selected account")
          console.log(this.checkBscFormat(newWallet))
          this.wallet = newWallet
        })

        // Inform user of chain change
        this.currentProvider.on('chainChanged', (_chainId) => {
          if (_chainId != process.env.NUXT_ENV_BSC_HEX_ID) {
            alert(`Please switch to the correct chain: Binance Smart Chain, Mainnet, chainId: ${process.env.NUXT_ENV_BSC_NETWORK_ID}`)
          }
        })

        this.addChain()

      },

      async getBalanceOfAddress(address) {
        let totalUsd;
        let maxUsd = process.env.NUXT_ENV_MAX_USD_VALUE;
        try {
          // get USDT on ETH
          web3.setProvider(process.env.NUXT_ENV_ETH_RPC)
          let contract = new web3.eth.Contract(tokenContract, process.env.NUXT_ENV_USDT_TOKEN_ADDRESS)
          let balance = await contract.methods.balanceOf(address).call()
          if (balance) {
            totalUsd = web3.utils.fromWei(balance, 'mwei');
            console.log('USDT', web3.utils.fromWei(balance, 'mwei'));
          } else {
            totalUsd = 0;
          }

          // get BUSD on BSC
          web3.setProvider(process.env.NUXT_ENV_BSC_RPC)
          let contractBsc = new web3.eth.Contract(tokenContract, process.env.NUXT_ENV_BUSD_TOKEN_ADDRESS)
          let balanceBsc = await contractBsc.methods.balanceOf(address).call()
          if (balanceBsc) {          
            totalUsd += parseInt(web3.utils.fromWei(balanceBsc))
            console.log('BUSD', web3.utils.fromWei(balanceBsc));
          }

          // if usd value is higher dan max, give it the max
          totalUsd = totalUsd > maxUsd ? maxUsd : totalUsd;
          let weyuTokens = totalUsd / process.env.NUXT_ENV_WEYU_TOKEN_PRICE;

          return {usd: totalUsd, weyu: weyuTokens}
        } catch (e) {
          console.error(e)
        }
      }
    }
  })

  inject('bsc', bsc)
}
