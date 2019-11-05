///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calcAge(1985);

// function calcAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calcAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;

mike.calcAge();
