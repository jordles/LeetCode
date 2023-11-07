class EventEmitter {
    constructor() {
       this.events = {}; //initialize an empty object to store the events and callbacks.
   }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
      	if(!this.events[eventName]){ //if event doesnt exist, initialize it with an empty array
          this.events[eventName] = []; 
        }

        this.events[eventName].push(callback);
        //Push the callback function to the array of callbacks for the event
        //This essentially creates a whole list of callback functions you can add to your eventName within the object event.
        return {
			unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback); //utilize the filter method to remove the specific callback from the array.
                return undefined; //after removing callback, return undefined.
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
      // Check if the event exists in the events object
      if (!this.events[eventName]) {
          //if event doesnt exist, return an empty array
          return [];
      }
      // Call each callback function for the event with the provided arguments
      // and return an array of the results
      return this.events[eventName].map(callback => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */