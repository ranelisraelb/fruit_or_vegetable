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


function userProduce() {
    var fruits = ['apple', 'banana', 'grape']
    var veggies = ['brocolli', 'carrot', 'eggplant']
    var produceChoice = document.getElementById("produce");
    if (fruits.indexOf(produceChoice.value) > -1) {
        document.getElementById('result').innerHTML = "Fruit!";
    } else if (veggies.indexOf(produceChoice.value) > -1) {
        document.getElementById('result').innerHTML = "Veggie!";
    } else {
        document.getElementById('result').innerHTML = "Not Sure!";
    }
}