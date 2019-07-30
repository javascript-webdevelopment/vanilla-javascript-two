# Vanilla Javascript Two

This lecture is an extention of a the vanilla javascript one lecture. We will cover more topics when working with the DOM.

## Events

An Event in Javascript and HTML is anytime the user interacts with our document.

### Handling Events

We can add and handle events by using the built in `document` method `.addEventListener()`. This built in document method will add an `event type` to an element and also define an `event handler` callback function.

#### Event Type

There are many different events that we can add to an element.

##### Mouse Events

`click` - the element will listen for a click action
`dblclick` - the element will listen for a double click
`mouseover` - the element will listen for a cursor to move over the element
`mouseenter` - the element will listen for the cursor to enter the element area
`mouseout` - the element will listen for the cursor to leave the element area

##### Keyboard Events
`keydown` - the element listens for any key to be pressed
`keyup` - the element listens for a key to lift

##### Form Events
`reset` - this will listen for a reset action
`submit` - this will listen for a submit event

##### Focus Events

`focus` - listens for the element to receive focus
`blur` - listens for an element to lose focus

##### Input Events
`change` - listens for a change in a controlled input

#### Event Handler

The `event handler` is the callback function that we will provide to the `.addEventListener` method. This will be executed when the passed in event occurs.

>Note: We can only have one event handler per event

```javascript
function eventHandler(event){
    // logic that happens when the event happens
}
```

The `event` parameter will be an object that we can use to access additional properties about the event that occurs. This is a great way to capture the value from an input field.

Example:

```html
<input type="text" id="myInput">
```

```javascript
// Create variable to store the input value
let inputValue = '';
// Add the event and function to handle the event
document.getElementById('myInput').addEventListener('change', function(event){
    inputValue = event.target.value
    console.log(inputValue);
});
```

## Event Bubbling
