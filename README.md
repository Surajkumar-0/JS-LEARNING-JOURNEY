# JS-LEARNING-JOURNEY
Learning JavaScript one line at a time — notes, practice, and projects.


# 01_variables:-

Variables are named containers used to store data in a program. A variable lets us save a value and use it later. In JavaScript, variables can be declared with `var`, `let`, or `const`.

## `const`

`const` is used to declare a variable whose value should not be reassigned. A `const` variable must be given a value when it is declared.

### Syntax

```js
const accountId = 144553;
```

Trying to assign a new value to `accountId` causes an error. Use `const` for values that should stay assigned to the same value.

## `let`

`let` is used to declare a variable whose value may change later. It is block-scoped, which means it is available only inside the block where it is declared.

### Example

```js
let accountCity = "Chapra";
accountCity = "Saran";
```

## `var`

`var` is an older way to declare variables. It is function-scoped rather than block-scoped, which can make its behavior less predictable. For this reason, `let` and `const` are generally preferred in modern JavaScript.

## Variable declaration without a keyword

JavaScript may allow an undeclared assignment in non-strict code, but it can create an accidental global variable. In strict mode and JavaScript modules, it causes an error. Always declare variables with `const` or `let`.

## `undefined` value

When a variable is declared with `let` but no value is assigned, its value is `undefined` until a value is given.

### Example

```js
let accountState;
```

## Displaying values

`console.log()` prints a value in the console. `console.table()` displays data in a table format, which can make several values easier to read.

## Key points

- Use `const` when a variable should not be reassigned.
- Use `let` when a variable needs to be reassigned.
- Prefer `let` and `const` over `var` in modern JavaScript.
- Declare every variable with a keyword; do not leave a variable undeclared.
- JavaScript variable names are case-sensitive. For example, `accountId` and `accountid` are different names.
