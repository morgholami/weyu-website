<template>
    <div class="account-status-block mt-4 px-5 py-4 has-radius is-horizontal-centered is-half column">
      <div class="columns">

        <!-- Address -->
        <div class="is-one-third column px-6">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between">
              <i :class="[user.address ? 'fa-check-circle' : 'fa-times-circle', 'far', 'has-text-primary', 'mb-2']"></i>
              <a class="has-text-white" :href="$bsc.explorer + '/address/'+ user.address" target="_blank" >{{ user.address ? user.address : '' }}</a>
              <p class="has-text-primary has-text-weight-medium">{{ user.address ? 'Verified' : ' Not verified' }}</p>
            </div>
          </div>
        </div>

        <!-- Username -->
        <div class="is-one-third column px-6">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between">
              <i :class="[user.telegram_meta.username ? 'fa-check-circle' : 'fa-times-circle', 'far', 'has-text-primary', 'mb-2']"></i>
              <p class="has-text-white">{{ user.telegram_meta.username ? user.telegram_meta.username : '' }}</p>
              <p :class="[user.telegram_meta.username ? 'has-text-primary' : 'has-text-secondary', 'has-text-weight-medium']">{{ user.telegram_meta.username ? 'Connected' : ' Not connected' }}</p>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="is-one-third column px-6">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between">
              <i :class="[user.email ? 'fa-check-circle' : 'fa-times-circle', 'far', 'has-text-primary', 'mb-2']"></i>
              <p class="has-text-white">{{ user.email ? user.email : '' }}</p>
              <p :class="[user.email ? 'has-text-primary' : 'has-text-secondary', 'has-text-weight-medium']">{{ user.email ? 'Connected' : ' Not connected' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        mounted () {
        },
        props: {
          user: Object,
        }
    }
</script>

<style lang="scss" scoped>
  .account-status-block {
    position: relative;
    background: $gradient-bg;
    &:before {
      border-radius: 15px;
      content: '';
      background-image: linear-gradient(65deg, $primary 0%, $accent 100%);
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      position: absolute;
      z-index:-1;
    }

    i {
      font-size: 1.3rem;
    }

    .column {
      font-size: .8rem;
      color: #fff;

      a {
        color: $text;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
