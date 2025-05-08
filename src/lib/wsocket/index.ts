export class WsSocket {
  private socket: WebSocket | null = null;
  private channels: string[] = [];

  constructor(private url: string) {
    this.socket = new WebSocket(this.url);
    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };
    this.socket.onmessage = (event) => {
      console.log("Message from server: ", event.data);
    };
    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
    };
  }

  subscribe(channelName: string) {
    this.channels.push(channelName);
  }

  unsubscribe(channelName: string) {
    this.channels = this.channels.filter((channel) => channel !== channelName);
  }

  unsubscribeAll() {
    this.channels = [];
  }

  channel(channelName: string) {
    if (!this.channels.includes(channelName)) {
      return null;
    }
    return channelName;
  }
}
