/*
JavaScript for Activity 4
*/

//Greeting element
var user = 'Emmalee'
var salutation = 'Welcome , '
var greeting = salutation + user + '! See the latest Honda CR-V reviews.';
var greetingElm = document.getElementById('greeting');

greetingElm.textContent = greeting;

//Price element
var productPrice = 11000; //Used price *rough* average
var StudentDisc = 0.10; //I didn't even know some dealerships actually offered a college student discount or student finacial plan for cars (probably not for a used car though)
var StudentPrice = productPrice - (productPrice * StudentDisc);
var PriceElement = document.getElementById('price');
var StudentPriceElm = document.getElementById('student-price');

PriceElement.textContent = productPrice.toFixed(2);
StudentPriceElm.textContent = StudentPrice.toFixed(2);


