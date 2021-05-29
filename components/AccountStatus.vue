<template>
    <div class="account-status-block mt-4 px-5 py-4 has-radius is-horizontal-centered is-6 column">
      <div class="columns">

        <!-- Address -->
        <div class="is-one-third column is-size-7 has-text-white">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between">
              <i class="is-size-5 mb-2 far has-text-primary" :class="[user.address ? 'fa-check-circle' : 'fa-times-circle']"></i>
              <a class="has-text-white blockchain-address" :href="$bsc.explorer + '/address/'+ user.address" target="_blank" >{{ user.address ? user.address : '' }}</a>
              <p class="has-text-primary has-text-weight-medium">{{ user.address ? 'Verified' : ' Not verified' }}</p>
            </div>
          </div>
        </div>

        <!-- Username -->
        <div class="is-one-third column  is-size-7 has-text-white">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between" v-if="user.telegram_meta">
              <i class="is-size-5 mb-2 far has-text-primary" :class="[user.telegram_meta ? 'fa-check-circle' : 'fa-times-circle']"></i>
              <p class="has-text-white">{{ user.telegram_meta.username ? '@'+user.telegram_meta.username : user.telegram_meta.first_name }}</p>
              <p :class="[user.telegram_meta ? 'has-text-primary' : 'has-text-secondary', 'has-text-weight-medium']">{{ user.telegram_meta ? 'Connected' : ' Not connected' }}</p>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="is-one-third column  is-size-7 has-text-white">
          <div>
            <div class="is-flex is-flex-direction-column is-justify-content-space-between">
              <i  class="is-size-5 mb-2 far has-text-primary" :class="[user.email ? 'fa-check-circle' : 'fa-times-circle']"></i>
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

  }
</style>
