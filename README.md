# WATS 3020 FizzBuzz Project

In this project you will create a webpage that calculates "FizzBuzz". This is a common coding challenge to see presented in job interviews, and there are many ways to solve it in every language. We are not aiming to create the most sophisticated, obscure or tiny implementation. We aim to create a clear, understandable logic that builds on the basic components of Javascript.

[FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) originates as a children's game designed to teach division. The rules of the game are thus:

1. Players stand in a circle and count off in sequence beginning with the number "1".
2. For each player, when it is their turn to count off, they must first decide if the number they have come to
   is divisble by 3, 5, or both.
   * If the number is divisible by 3, the player says, "Fizz."
   * If the number is divisible by 5, the player says, "Buzz."
   * If the number is divisible by **both** 3 and 5, the player says, "FizzBuzz."
   * If none of these conditions are true, the player says the number.

In the children's game, if a child gets one wrong, they must sit down, and the last child standing wins.

FizzBuzz is also [a common question in programming interviews](https://en.wikipedia.org/wiki/Fizz_buzz#Programming_interviews) because it is a fairly simple algorithm to describe and implement. When asked in a programming context, it provides some insight into how a person handles some basic, but common, programming tasks.

To complete the work for this project, you will edit the `js/main.js` completing all of the `TODO` notes in that file. These notes will lead you to complete the Basic Requirements below. If you wish to push your experience further, attempt some of the Stretch Goals, too.

## Base Requirements

In order to successfully complete this project, you must accomplish the following goals:

* Take input from the user to determine the max number for your FizzBuzz calculation.
* Use a `while` loop to facilitate re-prompting the user for a number in case they do not enter a suitable number.
* Validate using `Number.isSafeInteger()` that the input from the user is a suitable number. (If not, re-prompt them to enter a new number.)
* Create code that makes proper use of conditionals to determine FizzBuzz calculations.
* Generate an array of FizzBuzz calculations using a `for` loop.
* Output your FizzBuzz calculations using a `for ... of` loop.

You can check your calculations against this example of calculations for the numbers 1&mdash;20:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

## Stretch Goals

* Improve the conditionals that check the validity of the `maxNum` supplied by the user. Try to implement better messaging (perhaps using `alert()` commands) to let the user know what went wrong and how to correct the problem if they submit bad data.
* There are many ways to tighten this code. You can combine functions, initialize values in different ways, or enhance the algorithm to be more compact. Try to enhance the code in some way to make it fewer lines. (Note: This might result in a trade-off between easy readability and more tightly compacted code. Consider how you feel about that trade-off.)
* This code could also be enhanced by breaking it out into re-usable functions, etc. Enhance the code by organizing it into more generic, re-usable components.
