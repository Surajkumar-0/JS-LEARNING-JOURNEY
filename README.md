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


# 02_Data types:-

A data type describes the kind of value a variable holds. JavaScript is a dynamically typed language, so a variable can hold values of different types at different times.

## Primitive data types

- **Number**: Represents numeric values. JavaScript's `Number` type supports values up to about 2<sup>53</sup> in integer precision; use `BigInt` for larger integers.
- **BigInt**: Represents integers larger than the safe range of `Number`.
- **String**: Represents text, usually written inside single or double quotation marks.
- **Boolean**: Represents either `true` or `false`.
- **Null**: Represents an intentional absence of a value.
- **Undefined**: Means a value has not been assigned.
- **Symbol**: Represents a unique value, often used as a unique object key.

## Object

An object is a non-primitive type used to group related data and behavior. Arrays and functions are also objects in JavaScript.

## `typeof`

The `typeof` operator reports the type of a value as a string. For example, `typeof undefined` returns `"undefined"`. A historical JavaScript quirk is that `typeof null` returns `"object"`, even though `null` represents the intentional absence of a value.

## Strict mode

`"use strict"` enables strict mode in a script. It helps catch some common mistakes, such as assigning to an undeclared variable. JavaScript modules are strict by default.

## Key points

- Common primitive types include `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, and `symbol`.
- Objects can hold collections of related values.
- `typeof null` returns `"object"` because of a long-standing language quirk.
- In Node.js, use `console.log()` to display values; browser-only functions such as `alert()` are not available by default.


# 03_Type Conversion and Operations:-

JavaScript can convert values from one data type to another. A conversion can be **explicit**, when the programmer requests it, or **implicit**, when JavaScript performs it automatically.

## Explicit type conversion

### `Number()`

`Number()` converts a value to a number when possible. A numeric string such as `"33"` becomes `33`. A string that is not a valid number, such as `"33abc"`, becomes `NaN` (Not a Number). `NaN` has the JavaScript type `number`.

When converted to a number, `true` becomes `1` and `false` becomes `0`.

### `Boolean()`

`Boolean()` converts a value to `true` or `false`. Empty strings, `0`, `-0`, `NaN`, `null`, and `undefined` convert to `false`. These are called **falsy** values. Other values—including non-empty strings such as `"false"`—convert to `true` and are called **truthy** values.

### `String()`

`String()` converts a value to text. For example, the number `33` becomes the string `"33"`.

## Implicit conversion

In some expressions, JavaScript automatically converts values to make the operation possible. With `+`, if a string is involved, values are generally converted to strings and joined. For example, `"1" + 2` produces `"12"`. The order matters: `1 + 2 + "2"` first adds the numbers, then joins the result with the string, producing `"32"`.

Use explicit conversion when you want the result to be clear and predictable.

## Arithmetic operators

| Operator | Operation |
| --- | --- |
| `+` | Addition |
| `-` | Subtraction; unary `-` also changes a number's sign |
| `*` | Multiplication |
| `/` | Division |
| `%` | Remainder after division |
| `**` | Exponentiation (power) |

Parentheses can control the order of operations, as in regular arithmetic.

## Increment operators

`++` increases a number by one. Prefix increment (`++value`) changes the value before the expression is evaluated; postfix increment (`value++`) evaluates the current value first, then changes it. If it is used as a standalone statement, both forms increase the variable by one.

## Assignment chaining

An assignment such as `num1 = num2 = num3 = 2 + 2` assigns the result from right to left. Each variable receives the value `4`.

## Key points

- Use `Number()`, `Boolean()`, and `String()` for explicit conversion.
- An invalid numeric conversion results in `NaN`; its type is still `number`.
- Empty strings and zero are falsy, while non-empty strings are truthy.
- `+` can add numbers or join strings, depending on the values and expression order.
- Prefer clear conversions and parentheses to make expressions easier to understand.


# 04_Strings:-

A string is a sequence of text characters. Strings can be written with single quotes, double quotes, or backticks. Strings are immutable, which means string methods return a new string rather than changing the original.

## Template literals

Backticks create a template literal. They allow variables and expressions to be inserted with `${...}` and make it easy to build readable text.

## String objects

JavaScript also has a `String` object constructor. For everyday text, use string primitives such as `"suraj"`; they are simpler and are usually preferred over creating a `String` object with `new String()`.

## Useful string properties and methods

| Property or method | What it does |
| --- | --- |
| `length` | Returns the number of UTF-16 code units in the string |
| `toUpperCase()` | Returns an uppercase version of the string |
| `charAt(index)` | Returns the character at an index; indexing starts at `0` |
| `indexOf(text)` | Returns the first matching position, or `-1` if it is not found |
| `substring(start, end)` | Returns text between two positions; the end position is excluded |
| `slice(start, end)` | Returns part of a string; it accepts negative positions counted from the end |
| `trim()` | Removes whitespace from the beginning and end |
| `replace(search, replacement)` | Returns a copy with the first matching text replaced (for a string search) |
| `includes(text)` | Returns `true` if the string contains the given text, otherwise `false` |
| `split(separator)` | Splits a string into an array using the separator |

## String indexes and ranges

String indexes start at `0`. In methods such as `slice()` and `substring()`, the start position is included and the end position is excluded. `slice()` supports negative indexes, which count from the end of the string. `substring()` handles negative values differently, so use `slice()` when you need negative positions.

## Key points

- Use backticks and `${...}` to insert values into text.
- String methods do not change the original string; they return a value or a new string.
- `indexOf()` returns `-1` when the search text is absent.
- `split()` returns an array, while `includes()` returns a boolean.
