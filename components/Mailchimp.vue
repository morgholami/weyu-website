<template>
    <div id="mc_embed_signup">
        <form action="https://weyu.us1.list-manage.com/subscribe/post?u=6ea3bc06a659e723a9cb304b7&amp;id=670088d08f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
            <div class="field" style="position: relative;">
                <div class="control">
                    <input type="email" name="EMAIL" id="mce-EMAIL" class="input is-transparent is-primary has-text-white email-subscribe"  placeholder="Your email address">
                </div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6ea3bc06a659e723a9cb304b7_670088d08f" tabindex="-1" value=""></div>
                <div class="control button-subscribe">
                    <button type="submit" class="button is-accent" name="subscribe" id="mc-embedded-subscribe" :class="{'is-loading': loading}">Sign up</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        mounted () {
        }
    }
</script>

<style lang="scss" scoped>
    .email-subscribe {
        padding-right: 160px;
        padding-left: 20px;
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .button-subscribe {
        position: absolute;
        top: 5px;
        right: 5px;
        .button {
            padding: 20px 20px;
            font-size: 14px;
            min-width: 150px;
        }
    }
    @media only screen and (max-width: 600px) {
        .email-subscribe {
            padding-right: 20px;
        }
        .button-subscribe {
            position: relative;
            margin-top: 5px;
            text-align: center;
        }
    }
</style>
