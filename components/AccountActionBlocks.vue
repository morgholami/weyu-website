<template>
    <div class="account-action-blocks mb-6 has-radius is-horizontal-centered">
      <div class="columns">
        <div class="is-half column">

          <!-- Refer block -->
          <div class="account-action-block px-6 py-5 has-radius is-flex-direction-column is-justify-content-space-between is-flex">
            <h3 class="mb-3 px-2 pt-2 has-text-weight-medium">Refer friends for extra tickets</h3>
            <p>Use your unique link below to refer your friend. You earn <span class="has-text-secondary">2x tickets</span> for everyone who registers through your link.</p>
            <div class="field has-addons mt-5">
              <div class="control" style="width:100%;">
                <input class="input is-medium copy px-5 py-5" type="text" :value="'https://weyu.io?ref='+user.referral_code" readonly>
              </div>
              <p class="control">
                <a class="button is-accent is-medium copy px-5 py-5" @click="copyToClipboard()">
                  Copy link
                </a>
              </p>
            </div>
            <p v-if="copied">Copied to clipboard!</p>
            <div class="field is-grouped is-flex-wrap-wrap py-5">
              <div class="control">
                <a target="_blank" :href="'https://twitter.com/intent/tweet?url=https://weyu.io?ref='+user.referral_code+'&text=Participate in the WEYU Lottery %2B Airdrop!'">
                  <button class="button is-outlined is-link">
                    Share on Twitter
                    <i class="fab fa-twitter"></i>
                  </button>
                </a>
              </div>
              <div class="control">
                <a target="_blank" :href="'https://t.me/share/url?url=https://weyu.io?ref='+user.referral_code+'&text=Participate in the WEYU Lottery %2B Airdrop!'">
                  <button class="button is-outlined is-link">
                    Share on Telegram
                    <i class="fab fa-telegram"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Task block -->
        <div class="is-half column">
          <div class="account-action-block task-block px-5 py-5 has-radius">
            <h3 class="mb-3 pt-2 px-2 has-text-weight-medium">Do a task for extra tickets</h3>
            <p>All tasks will be verified before the $WEYU airdrop is distributed.</p>
            <div class="columns mt-5">
              <div class="column is-one-third">
                <div class="task has-radius p-2">
                  <img src="~assets/img/ticket.svg" class="my-3" />
                  <p class="has-text-secondary has-text-weight-bold">1x Ticket</p>
                  <p>Subscribe to Twitter</p>
                  <button class="button has-text-weight-medium is-outlined is-secondary is-link mt-4">
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="task has-radius p-2">
                  <img src="~assets/img/tickets.svg" class="my-3" />
                  <p class="has-text-secondary has-text-weight-bold">2x Tickets</p>
                  <p>Retweet and tag 3 friends</p>
                  <button class="button has-text-weight-medium is-outlined is-secondary is-link mt-4">
                    Retweet
                  </button>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="task has-radius p-2">
                  <img src="~assets/img/ticket.svg" class="my-3" />
                  <p class="has-text-secondary has-text-weight-bold">1x Ticket</p>
                  <p>50 Claps for Medium blog</p>
                  <button class="button has-text-weight-medium is-outlined is-secondary is-link mt-4">
                    50 claps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          copied: false
        }
      },
      mounted () {
      },
      props: {
        user: Object,
      },
      methods: {
        copyToClipboard () {
          navigator.clipboard.writeText('https://weyu.io?ref='+this.user.referral_code).then(() => {
            this.copied = true;
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
  .account-action-block {
    height: 100%;
    background: linear-gradient(60deg, $secondary-gradient 0%, rgba(255,255,255,.7) 33%, rgba(255,255,255,.7) 66%, $primary-gradient 100%);
    background-color: #fff;
    color: #000;
    h3 {
      font-size: 1.2rem;
      color: #000;
    }
    p {
      font-size: .8rem;
    }

    .is-grouped {
      margin-top: auto;
      .control {
        flex: 1;
        button, a {
          width: 100%;
        }
      }
    }

    button .fab {
      font-size: 1.5rem;
      margin-left: 20px;
    }
    .copy {
      font-size: .9rem;
    }

    input.copy {
      border: 1px solid $secondary;
      background-color: $secondary-light;
    }
  }

  .task-block {
    .task {
      background-color: #fff;
      height: 100%;
      button {
        width: 100%;
      }
      p {
        font-size: .75rem;
      }
    }
  }
</style>
