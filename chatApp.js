"use strict"

const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */
    constructor(title) {
        super();

        this.title = title;

       
        this.intervalId = setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
        }, 1000);
    }

    close(){   
        clearInterval(this.intervalId);
        this.emit('close');
        this.removeAllListeners();
    }
}

module.exports = ChatApp;