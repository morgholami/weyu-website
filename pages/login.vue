<template>
  <section class="section">
    <div class="container">
      <nuxt-link to="/" class="has-text-black"><i class="fas fa-chevron-left"></i> Back</nuxt-link>
      <div class="has-text-centered">
        <h2 class="subtitle is-3 is-horizontal-centered has-text-weight-bold" style="width: 500px; max-width: 100%">Choose your Blockchain and connect your wallet</h2>
        <p><a target="_blank" href="https://www.binance.com/en/blog/421499824684901157/How-to-Set-Up-and-Use-Trust-Wallet-for-Binance-Smart-Chain">What is a wallet?</a> </p>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/ethereum.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">Ethereum</h2>
            <small class="has-text-grey is-size-7">
<!--              coming soon..-->
              &nbsp;
            </small>
          </div>
          <div @click="connectWallet('metamask')" class="has-radius has-background-white has-shadow my-4 p-2 connect-wallet">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/metamask.png" style="width: auto; height: 35px;" />
              <div>
                <p>MetaMask</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/fortmatic.png" style="width: auto; height: 35px;" />
              <div>
                <p>Fortmatic</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/ledger.png" style="width: 35px; height: 35px;" class="p-1" />
              <div>
                <p>Ledger</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/wax.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">Wax</h2>
            <small class="has-text-grey is-size-7">
              <!--              coming soon..-->
              &nbsp;
            </small>
          </div>
          <div @click="connectWallet('metamask')" class="has-radius has-background-white has-shadow my-4 p-2 connect-wallet">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/waxcloud.png" style="width: auto; height: 35px;" />
              <div>
                <p>Wax Cloud</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/anchor.png" style="width: auto; height: 35px;" />
              <div>
                <p>Anchor</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/ledger.png" style="width: 35px; height: 35px;" class="p-1" />
              <div>
                <p>Ledger</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/binance.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">BSC</h2>
            <small class="has-text-grey is-size-7">
              <!--              coming soon..-->
              &nbsp;
            </small>
          </div>
          <div @click="connectWallet('metamask')" class="has-radius has-background-white has-shadow my-4 p-2 connect-wallet">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/metamask.png" style="width: auto; height: 35px;" />
              <div>
                <p>MetaMask</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/trust.png" style="width: auto; height: 35px;" />
              <div>
                <p>Trust</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/ledger.png" style="width: 35px; height: 35px;" class="p-1" />
              <div>
                <p>Ledger</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/cardano.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">Cardano</h2>
            <small class="has-text-grey is-size-7">
              <!--              coming soon..-->
              &nbsp;
            </small>
          </div>
          <div @click="connectWallet('metamask')" class="has-radius has-background-white has-shadow my-4 p-2 connect-wallet">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/daedalus.png" style="width: auto; height: 35px;" />
              <div>
                <p>Daedalus</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/coinbase.jpeg" style="width: auto; height: 35px;" />
              <div>
                <p>WalletLink</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/ledger.png" style="width: 35px; height: 35px;" class="p-1" />
              <div>
                <p>Ledger</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/solana.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">Solana</h2>
            <small class="has-text-grey is-size-7">
              <!--              coming soon..-->
              &nbsp;
            </small>
          </div>
          <div @click="connectWallet('metamask')" class="has-radius has-background-white has-shadow my-4 p-2 connect-wallet">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/sollet.svg"  style="width: auto; height: 35px;" />
              <div>
                <p>Sollet</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/bonfida.svg" style="width: auto; height: 35px;" />
              <div>
                <p>Bonfida</p>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
              <img src="~assets/img/wallet/ledger.png" style="width: 35px; height: 35px;" class="p-1" />
              <div>
                <p>Ledger</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="has-radius has-background-white has-shadow my-4 has-text-centered p-4 is-disabled">
            <div style="height: 90px" class="is-flex is-justify-content-center is-align-items-center">
              <img src="~assets/img/blockchain/flow.png" style="height: 60px; width: auto" />
            </div>
            <h2 class="subtitle mb-0 has-text-weight-bold">Flow</h2>
            <small class="has-text-grey is-size-7">
                            coming soon..
            </small>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-center is-align-items-center" style="height:35px">
              <div>
                <small>coming soon</small>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-center is-align-items-center" style="height:35px">
              <div >
                <small>coming soon</small>
              </div>
            </div>
          </div>
          <div class="has-radius has-background-white has-shadow my-4 p-2 is-disabled has-tooltip-arrow" data-tooltip="Coming Soon!">
            <div class="is-flex is-justify-content-center is-align-items-center" style="height:35px">
              <div >
                <small>coming soon</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    connectWallet (wallet) {
    console.log(wallet + ' launching soon!')
    }
  }
}
</script>

<style lang="scss" scoped>
.connect-wallet {
  border:1px solid transparent;
  cursor: pointer;
  &:hover {
    border:1px solid $primary;
  }
}
</style>
