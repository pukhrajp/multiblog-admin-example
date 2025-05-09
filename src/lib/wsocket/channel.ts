import { ChannelEvent } from "./channel-event";

export class Channel {
  private events: Record<string, ChannelEvent> = {};

  constructor(public channelName: string) {}

  bind(eventName: string, callback: (data: any) => void) {
    if (Object.keys(this.events).includes(eventName)) {
      this.events[eventName].addListener(callback);
      return;
    }
    this.events[eventName] = new ChannelEvent(eventName);
    this.events[eventName].addListener(callback);
  }

  unbind(eventName: string, callback: (data: any) => void) {
    if (Object.keys(this.events).includes(eventName)) {
      if (!this.events[eventName].hasListeners()) {
        this.events[eventName].removeAllListeners();
        delete this.events[eventName];
        return;
      }
      this.events[eventName].removeListener(callback);

      //TODO: check if event has any listeners attached to it
      //if not then simply remove the event from the list
      //if yes, then remove the listener from the event
    }
  }

  emit(eventName: string, data: any) {
    if (Object.keys(this.events).includes(eventName)) {
      this.events[eventName].emit(data);
    }
  }

  unbindAll() {
    this.events = {};
  }
}
