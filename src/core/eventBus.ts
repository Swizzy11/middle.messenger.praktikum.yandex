class EventBus {
  listeners: any;
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => any): void {
    this.remove(event);
    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  emit(event: string, ...args: any): void {
    this.remove(event);
    this.listeners[event].forEach(listener => listener(...args));
  }

  remove(event: string): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

export default EventBus;
