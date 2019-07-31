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

Event bubbling is when events bubble up through the DOM tree. Any time an event happens, it will bubble up and being activated for every parent element going until the `window` object. This means that if any parent elements have the same event, the callback function associated with that event will fire.

```html
<!-- HTML ELEMENTS -->
<div class="parent">
    <button class="child">Click Me</button>
</div>
<!-- Javascript -->
<script>
    // Capture the elements
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');

    // Add Events
    parent.addEventListener('click', function(){
        console.log('parent was clicked');
    });

    child.addEventListener('click', function(){
        console.log('child was clicked');
    });
</script>
```

Try running the code from above, you'll notice how when we click the button with the class of child, it will console log 'child was clicked'. The event then bubbles up and sees that the parent element has a 'click' event as well so it will fire it's callback. This can cause some weird behaviour that we don't want.

![Event Bubbling](images/event-bubbling.png)

### Stopping Event Bubbling

We can stop event bubbling by using `.stopPropagation()`. This is a built in method that comes from the `event` object that the event handler callback receives.

```html
<!-- HTML ELEMENTS -->
<div class="parent">
    <button class="child">Click Me</button>
</div>
<!-- Javascript -->
<script>
    // Capture the elements
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');

    // Add Events
    parent.addEventListener('click', function(){
        console.log('parent was clicked');
    });

    child.addEventListener('click', function(event){
        // we receive the event obj as a param in the callback and then can use it to call stopPropagation
        event.stopPropagation();
        console.log('child was clicked');
    });
</script>
```

## Forms

Forms can be used to capture a specific set of user data. We can create a form using the `<form>` html tag. An html form contains `form elements`, form elements are different types of input elements like text fields, check boxes, and submit buttons inside of `<form>` tags.

### Form Input Element

The `<input>` form element is the most essential form element. The `<input>` element can be displayed in different ways depending on the `type` attribute it recieves.

`<input type="text">` - Defines a one line input field
`<input type="radio">` - Defines a radio button
`<input type="submit">` - Defines a button to submit the form data

### Form Lable Element

The `<label>` element defines a label for an input element and will tell the user what the input should be used for; username, password, email, etc.

```html
<label>Username</label>
<input type="text">
```

### Form Example

```html
<form>
    <label>Email</label>
    <input type="email">
    <label>Password</label>
    <input type="password">
    <!-- Submit Button -->
    <input type="submit" id="form-btn">
</form>
```

When a button inside of a form is clicked, a `submit` event fires. The submit event will try to make a request to some server and cause the page to refresh. We do not want this to happen because it will make us lose whatever has happened in the web page.

### Canceling Default Events

We can prevent the form from causing a page refresh by canceling the `submit` event. We can cancel a default event by using the built in event method `.preventDefault()`.

`.preventDefault()` - this method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

```html
<!-- form -->
<form>
    <label>Email</label>
    <input type="email">
    <label>Password</label>
    <input type="password">
    <!-- Submit Button -->
    <input type="submit" id="form-btn">
</form>

<!-- javascript -->
<script>
const formBtn = document.getElementById('form-btn');

formBtn.addEventListener('click', function(event){
    // prevent default event
    event.preventDefault();
    // stop event bubbling
    event.stopPropagation();

    console.log('stopped form submission')
});
</script>
```

Notice how the page no longer refreshes when we hit that submission button. The `.preventDefault()` method can be used for any default event and is not limited to forms, it's just most commonly used with forms.

## DOM Selectors

We can use some built `document` methods to grab specific elements from the DOM.

`.querySelector` - this returns the first element in our document that matches the specified selector. Here we can use selecters to find an element just like CSS.

```html
<ul id="myList" class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
// element
const myList = document.querySelector('ul');

// id
const myList = document.querySelector('#myList');

// class
const myList = document.querySelector('.myList');
```

`.querySelectorAll` - this works just like querySelector, however this will return a NodeList with all of the matching elements with the specified selector.

```html
<ul id="myList" class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const listItems = document.querySelectorAll('li');
```

## Node Methods

`.createElement('element name')` - this method creates an element with the name that is passed in as an argument

`.appendChild('element to append')` - this method appends a node as the last child of a node list

Creating a button with text example:
```javascript
// create the button element
const btn = document.createElement('BUTTON');
// add inner text
btn.innerText = 'Click me';
// Add the new button into the body element
document.body.appendChild(btn);
```

