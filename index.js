var greeting = "Hello, everybody!";


/*
it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})        */

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "" + specialGuest + "!";

/*  NEXT ONE TO FIX

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})    

ERROR:
concatenates strings to greet a special guest in `greetSpecialGuest`:

      Error: Expected 'Neil deGrasse Tyson!' to equal 'Hello, Neil deGrasse Tyson!'
      + expected - actual

      -Neil deGrasse Tyson!
      +Hello, Neil deGrasse Tyson!


*/ 

var topic = "space";

var conversation = `${topic}`;
