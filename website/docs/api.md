---
sidebar_position: 4
id: api
---
# API #

## `eventBus.subscribe(event, callback)` ##

### Arguments ###

**event**: `string` - The name of the event to subscribe to.

**callback**: `async function(object): void` - The callback to call when the event is fired. The callback will retrieve the event data. It is called as a async function.

### Description ###

Adds the given function as a subscriber to the given event so it will be called  when the event is raised. The callback will be called as a async function, which means it may contain the `await` keyword.

You may use the special event name `*` to subscribe to all events.

### Examples ###

```js
eventBus.subscribe("test", function(data) {
    console.log("test event fired");
    console.log(data);
});
```

```js
eventBus.subscribe("test", (data) => {
    console.log("test event fired");
    console.log(data);
});
```

```js
eventBus.subscribe("sawPlayer", async (name) => {
    const response = await fetch(`https://api.achaea.com/characters/${name}.json`);
    const json = await response.json();
    console.log(json.fullname);
});
```

```js
eventBus.subscribe("*", (data) => {
    console.log('Got an event with data:');
    console.log(data);
});
```

## `eventBus.raise(event[, data])` ##

### Arguments ###

**event**: `string` - The name of the event to raise.

**data**: `object`, optional - The data to pass to the subscribers.

### Description ###

Raises the event with the given name and calls all subscribed callbacks. The callbacks receive the given data as their argument.

### Examples ###

```js
eventBus.raise("test", "This is a test string");
```

```js
eventBus.raise("test", {
  content: "I have some nested data"
});
```

```js
const name = 'Keneanung';
eventBus.raise("sawPlayer", name);
```

## `eventBus.unsubscribe(event, callback)` ##

### Arguments ###

**event**: `string` - The name of the event to subscribe to.

**callback**: `async function(object): void` - The callback to remove from the list of functions that are called when the event is called.

### Description ###

Removes the given function as a subscriber to the given event so it will not be called anymore when the event is raised. This has to be the same reference as the one given to `eventBus.subscribe`.

To unsubscribe from the "all events" list, use the special event name `*`.

### Examples ###

```js
function testFunction(data) {
    console.log("test event fired");
    console.log(data);
}

eventBus.subscribe("test", testFunction);
eventBus.unsubscribe("test", testFunction);
```

```js
const defence = {
  dragon: () => {
    console.log("I'm a bulky dragon and I block everything.");
  },
  rajamalan: () => {
    console.log("I'm a quick rajamalan and I evade everything.");
  },
  none: () => {
    console.log("I'm a normal person and I can't defend.");
  }
}

eventBus.subscribe("raceChange", (raceChangeData) => {
  eventBus.subscribe("defend", defence[raceChangeData.newRace]);
  eventBus.unsubscribe("defend", defence[raceChangeData.oldRace]);
});
```
