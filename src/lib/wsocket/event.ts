export class Event {
  private listeners: Function[] = [];

  constructor(private eventName: string) {}

  hasListeners() {
    return this.listeners.length > 0;
  }

  addListener(callback: Function) {
    if (!this.listeners.includes(callback)) {
      this.listeners.push(callback);
    }
  }

  removeListener(callback: Function) {
    if (this.listeners.includes(callback)) {
      this.listeners = this.listeners.filter(
        (listener) => listener !== callback
      );
    }
  }
  removeAllListeners() {
    if (this.listeners.length > 0) {
      this.listeners = [];
    }
  }

  emit(data: any) {
    if (this.listeners) {
      this.listeners.forEach((callback) => callback(data));
    }
  }
}
