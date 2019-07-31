// Input Value Example
let inputValue = '';

document.getElementById('myInput').addEventListener('change', function(event){
    inputValue = event.target.value
    console.log(inputValue);
});

// Event Bubbling Example
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', function(){
    console.log('parent was clicked');
});

// not stopping the bubbling effect
child.addEventListener('click', function(){
    console.log('child was clicked');
});

// stopping the bubbling effect
child.addEventListener('click', function(event){
    event.stopPropagation();
    console.log('child was clicked');
});

// Form preventDefault Example
const formBtn = document.getElementById('form-btn');

formBtn.addEventListener('click', function(event){
    // prevent default event
    event.preventDefault();
    // stop event bubbling
    event.stopPropagation();

    console.log('stopped form submission')
});