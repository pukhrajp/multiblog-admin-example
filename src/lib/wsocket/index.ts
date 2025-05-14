import { Channel } from "./channel";

export class WsSocket {
  private socket: WebSocket | null = null;
  private channels: Channel[] = [];

  constructor(
    private url: string,
    options?: {
      onOpen?: (wsSocket: WebSocket | null) => void;
      onClose?: () => void;
    }
  ) {
    this.socket = new WebSocket(this.url);
    this.socket.onopen = () => console.log;

    this.socket.onclose =
      options?.onClose ||
      (() => {
        console.log("WebSocket disconnected");
      });

    this.socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const { channel, event: eventName, data: eventData } = data;
      this.channel(channel)?.emit(eventName, eventData);
    };
  }

  hasSubscribed(channelName: string) {
    return this.channels.some((channel) => channel.channelName === channelName);
  }

  subscribe(channelName: string) {
    const subscribedChannel = this.channel(channelName);
    if (subscribedChannel) {
      return subscribedChannel;
    }
    const channel = new Channel(channelName);
    this.channels.push(channel);
    return channel;
  }

  unsubscribe(channelName: string) {
    this.channels = this.channels.filter(
      (channel) => channel.channelName !== channelName
    );
  }

  unsubscribeAll() {
    this.channels = [];
  }

  channel(channelName: string) {
    if (!this.hasSubscribed(channelName)) {
      return null;
    }
    return this.channels.find((channel) => channel.channelName === channelName);
  }

  sendMessage(channelName: string, eventName: string, data: any) {
    if (this.socket) {
      this.socket.send(
        JSON.stringify({
          channel: channelName,
          event: eventName,
          data: data,
        })
      );
    }
  }
}

const wsSocket = new WsSocket("ws://localhost:3000", {
  onOpen: (socket) => {
    console.log(socket);
  },
});

export { wsSocket };
