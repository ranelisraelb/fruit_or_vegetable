// The purpose of this project is as follows:
// 1. User enters produce in text text field.
// 2. Autocomplete suggestions show for each letter typed by user.
// 3. User hits submit button.
// 4. Returns if produce user typed in is a fruit or vegetable.

//Logic
//1. Compare "query" string to objects in array
//2. each object has 2 props: name of fruit and vegetable or fruit.
//3. if else function to check for fruit first, if string matches then returns fruit
//4. if false, returns vegetable.

// document.getElementById('result').innerHTML = "it's a fruit!";
// document.getElementById('result').innerHTML = "it's a veggie!";

function userProduce() {
    var fruits = ['apple', 'banana', 'grape']
    var produceChoice = document.getElementById("produce");
    if (fruits.indexOf(produceChoice.value) > -1) {
        alert("it's a fruit!");
    } else {
        alert("it's a veggie!");
    }
}