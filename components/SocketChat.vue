<template>
  <div>
    <v-text-field v-model="name" />
    <v-text-field v-model="message" />
    <button>send</button>
    <div v-for="(msg, i) in messages" :key="i">
      <div class="row">
        <div class="col" style="max-width: '100px;'">
          <h4>{{ msg.name }}</h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="${message.icon}" />
        </div>
        <div class="col">{{ msg.msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import io from "socket.io-client";
export default {
  data: () => ({
    messages: [],
    socket: null,
    name: "",
    icon: "",
    message: "",
  }),
  methods: {
    sendMessage() {
      this.$socket.emit("chat msg", {
        name: this.name,
        icon: this.icon,
        msg: this.message,
      });
    },

    addMessages(message) {
      this.messages.push(message);
    },
  },
  mounted() {
    // this.socket = io("/api");
    window.sock = this.$socket;
    this.$socket.on("message", this.addMessages);
  },
};
</script>

<style>
</style>