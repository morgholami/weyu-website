<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$parent.selectedTask = null"></div>
    <div class="modal-card">
      <form @submit.prevent="submitTask">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{task.name}}
          </p>
          <button class="delete" aria-label="close" @click="$parent.selectedTask = null"/>
        </header>
        <section class="modal-card-body has-text-black">
            <div class="block">{{task.description}}</div>
            <div v-if="task.key === 'twitter'">
              <div>1. <a href="https://twitter.com/weyuofficial?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @weyuofficial</a></div>
              <div>2. Retweet <a href="https://twitter.com/weyuofficial/status/1398609096794902531" target="_blank">this tweet</a> and tag 3 friends</div>
              <div>3. Submit the link of your tagged tweet
                <input class="input" type="url" placeholder="Your retweet URL" v-model="answer" required>
              </div>
            </div>
            <div v-else-if="task.key === 'telegram'">
              <div>1. Join <a href="https://t.me/weyuofficial" target="_blank">WEYU Announcement Telegram channel</a></div>
              <div>2. Join <a href="https://t.me/WEYUchat" target="_blank">WEYU Chat Telegram group</a></div>
              <div>3. Add one friend to the <a href="https://t.me/WEYUchat" target="_blank">Telegram Group</a></div>
            </div>
          <div v-else-if="task.key === 'youtube'">
            <div>1. Subscribe to <a href="https://www.youtube.com/channel/UC00y0RUkr11MLorqxKkqhbQ" target="_blank">WEYU YouTube Channel</a></div>
            <div>2. Like + comment on <a href="https://www.youtube.com/watch?v=vTPGpkchEog" target="_blank">this video</a></div>
            <div>3. Enter your YouTube username
              <input class="input" type="text" placeholder="Your YouTube username" v-model="answer" required>
            </div>
          </div>
          <div v-else-if="task.key === 'medium'">
            <div>1. Give 50 claps to <a href="https://weyu-io.medium.com/the-weyu-whitelist-airdrop-is-now-open-6a793c02302f" target="_blank">this medium post</a></div>
            <div>2. Enter your Medium username
              <input class="input" type="text" placeholder="Your Medium username" v-model="answer" required>
            </div>
          </div>

          <label class="checkbox mt-4">
            <input type="checkbox" v-model="checkbox">
            I have completed this task
          </label>
        </section>
        <footer class="modal-card-foot">
          <div class="button" style="margin-left: auto" @click.prevent="$parent.selectedTask = null">Cancel</div>
          <button class="button is-secondary" type="submit" :class="{'is-loading': loading}" :disabled="!checkbox">Submit</button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      loading: false,
      checkbox: false,
      answer: null
    }
  },

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(recaptchaScript)
  },

  methods: {
    async submitTask() {
      if (!this.checkbox) return
      this.loading = true
      try {
        await this.$axios.post(`/task/${this.task.id}/submit`, {
          answer: this.answer
        })
        this.$emit('submit-task')
        this.checkbox = false
        this.answer = null
      } catch (e) {
        console.error(e)
        alert('Could not submit task')
      }
      this.loading = false
    }
  }
}
</script>
