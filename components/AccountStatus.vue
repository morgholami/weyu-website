<template>
    <div class="account-status-block mt-4 px-6 py-4 has-radius is-horizontal-centered is-half column">
      <div class="columns">
        <div class="is-one-third column">
          <a :href="$bsc.explorer + '/address/'+ user.address" target="_blank"
            class="blockchain-address">{{ user.address }}</a>
        </div>
        <div class="is-one-third column">
          //
        </div>
        <div class="is-one-third column">
          {{user.email}}
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
  .is-one-third {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
