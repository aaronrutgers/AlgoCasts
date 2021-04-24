// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  map = {}
  // Register an event handler
  on(eventName, callback) {
    if (this.map[eventName]) {
      this.map[eventName].push(callback)
    } else {
      this.map[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.map[eventName]?.forEach(callback => {
      callback()
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.map[eventName]
  }
}

module.exports = Events;
