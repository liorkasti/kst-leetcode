<<<<<<< HEAD
// Singleton pattern: This pattern ensures that a class has only one instance, while providing a global access point to this instance.
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const anotherSingleton = new Singleton();
console.log(singleton === anotherSingleton); // true

// Factory pattern: This pattern provides a way to create objects without specifying the exact class of object that will be created.
class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Woof!';
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Meow!';
    }
}

const factory = {
    create: (type, name) => {
        switch (type) {
            case 'dog':
                return new Dog(name);
            case 'cat':
                return new Cat(name);
            default:
                throw new Error('Invalid type');
        }
    },
};

const dog = factory.create('dog', 'Hope');
console.log(dog.speak()); // 'Woof!'

// Observer pattern: This pattern allows objects to be notified of changes to other objects.
class Subject {
    constructor() {
        this.observers = new Set();
    }
    attach(observer) {
        this.observers.add(observer);
    }
    detach(observer) {
        this.observers.delete(observer);
    }
    notify() {
        this.observers.forEach((observer) => observer.update());
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(`${this.name} has received update notification`);
    }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify();

//   The Command pattern is a behavioral design pattern that encapsulates a request as an object, allowing for the parametrization of clients with different requests, and the separation of an object making a request from the one that knows how to perform it.
class Command {
    execute() { }
}

class Light {
    turnOn() {
        console.log('The light is on');
    }
    turnOff() {
        console.log('The light is off');
    }
}

class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}

class Switch {
    constructor(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }
    on() {
        this.onCommand.execute();
    }
    off() {
        this.offCommand.execute();
    }
}

const light = new Light();
const onCommand = new TurnOnCommand(light);
const offCommand = new TurnOffCommand(light);
const switch = new Switch(onCommand, offCommand);

switch.on(); // The light is on
switch.off(); // The light is off

/*
In this example, the Light class represents the object that knows how to perform a request. The TurnOnCommand and TurnOffCommand classes encapsulate the request to turn on and off the light, respectively. The Switch class represents the client that parametrizes the Light class with different commands, and the client that initiates the request.
The Command pattern allows to decouple the sender of a request from the object that handles the request. The sender is only aware of the command interface, while the concrete command classes know about the actual receivers.
=======
// Singleton pattern: This pattern ensures that a class has only one instance, while providing a global access point to this instance.
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const anotherSingleton = new Singleton();
console.log(singleton === anotherSingleton); // true

// Factory pattern: This pattern provides a way to create objects without specifying the exact class of object that will be created.
class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Woof!';
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Meow!';
    }
}

const factory = {
    create: (type, name) => {
        switch (type) {
            case 'dog':
                return new Dog(name);
            case 'cat':
                return new Cat(name);
            default:
                throw new Error('Invalid type');
        }
    },
};

const dog = factory.create('dog', 'Hope');
console.log(dog.speak()); // 'Woof!'

// Observer pattern: This pattern allows objects to be notified of changes to other objects.
class Subject {
    constructor() {
        this.observers = new Set();
    }
    attach(observer) {
        this.observers.add(observer);
    }
    detach(observer) {
        this.observers.delete(observer);
    }
    notify() {
        this.observers.forEach((observer) => observer.update());
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(`${this.name} has received update notification`);
    }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify();

//   The Command pattern is a behavioral design pattern that encapsulates a request as an object, allowing for the parametrization of clients with different requests, and the separation of an object making a request from the one that knows how to perform it.
class Command {
    execute() { }
}

class Light {
    turnOn() {
        console.log('The light is on');
    }
    turnOff() {
        console.log('The light is off');
    }
}

class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}

class Switch {
    constructor(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }
    on() {
        this.onCommand.execute();
    }
    off() {
        this.offCommand.execute();
    }
}

const light = new Light();
const onCommand = new TurnOnCommand(light);
const offCommand = new TurnOffCommand(light);
const switch = new Switch(onCommand, offCommand);

switch.on(); // The light is on
switch.off(); // The light is off

/*
In this example, the Light class represents the object that knows how to perform a request. The TurnOnCommand and TurnOffCommand classes encapsulate the request to turn on and off the light, respectively. The Switch class represents the client that parametrizes the Light class with different commands, and the client that initiates the request.
The Command pattern allows to decouple the sender of a request from the object that handles the request. The sender is only aware of the command interface, while the concrete command classes know about the actual receivers.
>>>>>>> origin/master
*/