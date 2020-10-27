<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>

    <v-col>
      <!-- <Chat
        v-for="(msg, i) in messages"
        :key="i"
        :name="msg.name"
        :message="msg.message"
      ></Chat>
      <div>
        <v-text-field v-model="username" />
        <v-text-field v-model="reply" @keydown.enter="sendMessage" />
      </div> -->
      <SocketChat />
    </v-col>
  </v-row>
</template>
<script>
import Chat from "~/components/Chat.vue";
import SocketChat from "~/components/SocketChat.vue";
export default {
  data: () => ({
    username: "Blue",
    reply: "",

    messages: [
      { name: "Bob", message: "Hello World" },
      { name: "Mary", message: "Good-bye World" },
      { name: "Paul", message: "was not the imposter" },
    ],
  }),
  methods: {
    sendMessage(ev) {
      console.log(ev);
      this.messages.push({ name: this.username, message: this.reply });
      this.reply = "";
    },
  },
};
</script>