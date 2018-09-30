'use strict';

class Mailbox {
    constructor() {
        this.messages = [];
    }

    get messageCount() {
        return this.messages.length;
    }

    addMessage(subject, text) {
        if(!(/^[A-Za-zА-Яа-я0-9-_.,!?\s]{3,50}$/.test(subject))) {
            throw new Error("Invalid subject!");
        }

        this.messages.push({subject, text});

        return this;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(subject) {
        return this.messages.filter(m => m.subject.toLowerCase().includes(subject.toLowerCase()));
    }

    toString() {
        return this.messageCount === 0 ? 'Empty mailbox' : this.messages.map(m => `[${m.subject}] - ${m.text}`).join('\n');
    }
}

let mailbox = new Mailbox();

mailbox.addMessage("Domain expiration", "Your domain name registration expires soon!");
mailbox.addMessage("Questionnaire", "Help us improve.");

console.log(mailbox.toString());

let domainMessages = mailbox.findBySubject("domain");

console.log(domainMessages);