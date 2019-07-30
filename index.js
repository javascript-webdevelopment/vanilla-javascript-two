// Input Value Example
let inputValue = '';

document.getElementById('myInput').addEventListener('change', function(event){
    inputValue = event.target.value
    console.log(inputValue);
});