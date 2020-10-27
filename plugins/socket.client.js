import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'

const socketInstance = io('ws://localhost:3000/sock', {
  transports: ['websocket'],
  rejectUnauthorized: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 15,
});

export default function () {
  Vue.use(new VueSocketIO({
    debug: true,
    connection: socketInstance,
  }))
}
