# Typescript

A Typescript cheat sheet repository

## Table of Contents

- [Typescript](#typescript)
  - [Table of Contents](#table-of-contents)
  - [HOW TO RUN this project](#how-to-run-this-project)
  - [Install Typescript](#install-typescript)
  - [File extensions](#file-extensions)
  - [Compile](#compile)
  - [Run](#run)
  - [Run with nodemon](#run-with-nodemon)
  - [Config file](#config-file)
  - [Basic Types](#basic-types)
  - [Union](#union)
  - [Objects](#objects)
    - [Empty object](#empty-object)
    - [Object with any values](#object-with-any-values)
    - [Objects with optional properties](#objects-with-optional-properties)
    - [Objects with readonly properties](#objects-with-readonly-properties)
  - [Array of my defined objects](#array-of-my-defined-objects)
  - [Functions](#functions)
  - [Interfaces](#interfaces)
  - [Function interfaces](#function-interfaces)
  - [Type assertion](#type-assertion)
  - [Classes](#classes)
    - [Classic way of declaring properties](#classic-way-of-declaring-properties)
    - [readonly property](#readonly-property)
    - [private property](#private-property)
    - [static property](#static-property)
    - [Getter and Setter](#getter-and-setter)
  - [Extending Classes](#extending-classes)
  - [Class Interface](#class-interface)
  - [Generics](#generics)
  - [Enum](#enum)
  - [Pick and Omit](#pick-and-omit)
  - [Partial and Required](#partial-and-required)
  - [Record](#record)
  - [Exclude](#exclude)
  - [ReturnType](#returntype)
  - [Parameters](#parameters)
  - [Readonly](#readonly)
  - [keyof](#keyof)
  - [Optional Chaining](#optional-chaining)
  - [Nullish Coalescing](#nullish-coalescing)
  - [Null Assertion](#null-assertion)
  - [Definitely Typed](#definitely-typed)
  - [Template Literal Types](#template-literal-types)
  - [Resources](#resources)

## HOW TO RUN this project

> Make sure you have Node.js installed on your machine

- Clone the repository and `cd` into it:

  ```bash
  git clone https://github.com/emanuelefavero/typescript.git
  cd typescript
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Run the typescript file:

  ```bash
  npm run dev
  ```

---

## Install Typescript

- Globally:

  ```bash
  npm install -g typescript
  ```

- Or locally in your project (better for version control and teams):

  ```bash
  npm install --save-dev typescript
  ```

## File extensions

- `.ts`
- `.tsx` (for react jsx files)

## Compile

> TIP: You can use `tsc --init` to generate a `tsconfig.json` file with default settings

- Compile typescript files to javascript

  ```bash
  tsc --watch
  ```

- Use `nodemon` in another terminal to automatically run the compiled javascript file after each change

  ```bash
  nodemon index.js
  ```

## Run

- You can also use `ts-node` to run typescript files directly without compiling them first

  ```bash
  npm install -g ts-node
  ts-node index.ts
  ```

- `Node.js v24` supports typescript natively, so you can run typescript files directly without `ts-node` or `tsc`

  > BEWARE: Some typescript features are not supported yet in Node.js, as typescript will run in `strip-only mode`

  ```bash
  node index.ts
  ```

## Run with nodemon

This is the easiest way to develop typescript files, as it will automatically restart the server when you make changes

```bash
nodemon index.ts
```

> Note: If you get an error when running nodemon with typescript files, make sure you also have `ts-node` installed with:
> `npm install -g ts-node`

## Config file

- You can generate the config file with `tsc --init`
- Config file: `tsconfig.json`
- use the tsconfig file in this repo as a reference
- specify the `outDir` to compile to a specific folder
- specify the `rootDir` to compile from a specific folder
- tell typescript to compile to es6 with `target: "es6"`

## Basic Types

```typescript
let number: number = 32
let string: string = 'John'
let boolean = true
let any: any = 'this could be any type'

let arrayOfNumbers: number[] = [1, 2, 3]
let arrayOfStrings: string[] = ['a', 'b', 'c']
let arrayOfAny: any[] = [1, 'a', true]
let arrayOfObjects: object[] = [{ a: 1 }, { b: 2 }]

let tuple: [string, number] = ['a', 1]
let tupleArray: [string, number][] = [
  ['a', 1],
  ['b', 2],
]
```

## Union

```typescript
let union: string | number = 'a'
union = 1
```

## Objects

> TIP: You can also use interfaces (interface User {...}) -see below

```typescript
type User = {
  name: string
  age: number
}

const user: User = {
  name: 'Jack',
  age: 32,
}
```

### Empty object

> use this instead of `{}`\*\*

```typescript
interface User = Record<string, never>
```

### Object with any values

```typescript
interface User = {
  [key: string]: any
}
```

### Objects with optional properties

```typescript
interface User = {
  name: string
  age?: number
}
```

### Objects with readonly properties

```typescript
interface User = {
  readonly id: number
}
```

## Array of my defined objects

```typescript
const arrayOfUsers: User[] = [
  {
    name: 'Jack',
    age: 32,
  },
  {
    name: 'John',
    age: 47,
  },
]
```

## Functions

```typescript
function add(a: number, b: number): number {
  return a + b
}

const subtract = (a: number, b: number): number => a - b

function log(message: string | number): void {
  console.log(message)
}
```

## Interfaces

> TIP: Useful when declaring objects

```typescript
interface UserInterface {
  // define a readonly property (the id cannot be reassigned, e.g. user1.id = 2)
  readonly id: number
  name: string
  // define an optional property (the age property is optional)
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}
user1.age = 47
```

## Function interfaces

> TIP: Define the shape of a function

```typescript
interface MyMathFunction {
  (a: number, b: number): number
}

// When implementing a function from an interface, all types must match the interface
const multiply: MyMathFunction = (a: number, b: number): number => a * b
```

## Type assertion

```typescript
let customerID: any = '123'

// Treat customerID as a number
let customerIDAsNumber = customerID as number

// Alternatively, you can use the angle-bracket syntax (not always recommended, especially in JSX files):
// let customerIDAsNumber2 = <number>customerID
```

> TIP: Try to avoid using `any` type as much as possible

---

## Classes

```typescript
class Person {
  constructor(public id: number, public name: string) {}

  register() {
    return `${this.name} is now registered`
  }
}

const person1 = new Person(1, 'Jack')
const person2 = new Person(2, 'John')
```

### Classic way of declaring properties

- use the one you prefer

  ```typescript
  class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }
  }
  ```

### readonly property

- property that can not be modified

  ```typescript
  class Person {
    constructor(public readonly name: string) {}
  }
  ```

### private property

- property that can only be accessed within the class

  ```typescript
  class User {
    private _fullName: string = ''
  }
  ```

> TIP: class properties are public by default. We can also define protected properties (those will be only accessible within the class and its subclasses)
>
> e.g. `protected _fullName: string = ''`

### static property

- property that can only be accessed without creating an instance of the class

  ```typescript
  class User {
    static userName = 'John'
  }
  User.userName
  ```

### Getter and Setter

```typescript
class User {
  private _fullName: string = ''

  get fullName(): string {
    return this._fullName
  }

  set fullName(value: string) {
    this._fullName = value
  }
}

const user1 = new User()
user1.fullName = 'John Doe'
console.log(user1.fullName)
```

> Getters and setters can be used to perform additional tasks when a property is accessed or modified

## Extending Classes

```typescript
class Employee extends Person {
  constructor(id: number, name: string, public position: string) {
    super(id, name)
  }

  // Overriding a method
  register() {
    return `${this.name} is now registered as an employee`
  }
}

const employee1 = new Employee(1, 'James', 'Developer')
```

## Class Interface

```typescript
interface FruitInterface {
  name: string
  isFavorite: boolean
  favorite(): string
}

class Fruit implements FruitInterface {
  constructor(public name: string, public isFavorite: boolean) {}

  favorite() {
    if (this.isFavorite) {
      return `${this.name} is my favorite fruit`
    } else {
      return `${this.name} is my NOT favorite fruit`
    }
  }
}

const banana = new Fruit('banana', false)
const mango = new Fruit('mango', true)
```

## Generics

- allow us to create reusable components that can work with any data type

  > `<T>` is a placeholder that allows to later define the type of the generic

  ```typescript
  function getId<T>(id: T): T {
    return id
  }
  const numberId = getId<number>(1) // this function call will only accept numbers
  const stringId = getId<string>('1') // this function call will only accept str
  ```

## Enum

- Allows to define a set of enumerated named constants

  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  }
  let color: Color = Color.Blue // 2
  let colorName: string = Color[2] // 'Blue'

  enum Color2 {
    Red = 1,
    Green,
    Blue,
  }
  let color2: Color2 = Color2.Blue // 3

  enum Color3 {
    Red = '#ff0000',
    Green = '#00ff00',
    Blue = '#0000ff',
  }
  let color3: Color3 = Color3.Blue // '#0000ff'
  ```

## Pick and Omit

- `Pick`: create a new type from an existing type by picking some properties
- `Omit`: create a new type from an existing type by omitting some properties

  ```typescript
  interface User {
    id: number
    name: string
    lastName: string
    age?: number
  }

  type Username = Pick<User, 'name' | 'lastName'>

  type UserWithoutId = Omit<User, 'id'>
  ```

## Partial and Required

- `Partial`: allows to make all properties of an object type optional
- `Required`: allows to make all properties of an object type required

  ```typescript
  interface User {
    id: number
    name: string
    lastName?: string // optional property
    age?: number // optional property
  }

  // All properties are optional in PartialUser type
  type PartialUser = Partial<User>

  // All properties are required in RequiredUser type
  type RequiredUser = Required<User>
  ```

## Record

- `Record`: allows to create an object type with a specific set of keys and values

  ```typescript
  let products: Record<string, number> = {
    'MacBook Air': 12,
    'AirPods Pro': 18,
  }
  ```

## Exclude

- `Exclude`: creates a new type by excluding specified types from a union type

  ```typescript
  type Theme = 'light' | 'dark' | 'system'
  let themeSwitch: Exclude<Theme, 'system'> = 'light' // light | dark
  ```

## ReturnType

- `ReturnType`: allows to extract the return type of a function type

  ```typescript
  function getUser(): { name: string; age: number } {
    return {
      name: 'Jane',
      age: 28,
    }
  }

  let userReturnType: ReturnType<typeof getUser> = {
    name: 'Bob',
    age: 25,
  }
  ```

## Parameters

- `Parameters`: allows to extract the parameter types of a function type

  ```typescript
  function add2(a: number, b: number): number {
    return a + b
  }
  let addParams: Parameters<typeof add2> = [5, 10] // [number, number]

  // Use addParams to call the function
  let sum = add2(...addParams)
  console.log(sum) // 15, (5 + 10)
  ```

## Readonly

- `Readonly`: allows to create a type with all properties of an object type as read-only

  ```typescript
  interface Username2 {
    firstName: string
    lastName: string
  }

  let user4: Readonly<Username2> = {
    firstName: 'John',
    lastName: 'Doe',
  }

  // Error: Cannot assign to 'firstName' because it is a read-only property:
  // user4.firstName = 'Jane'
  ```

## keyof

- `keyof`: creates a union type of the keys of an object type

  ```typescript
  function printUser(user: User, key: keyof User) {
    console.log(`User ${key}: ${user[key]}`)
  }
  printUser(user, 'name') // User name: Jack
  printUser(user, 'age') // User age: 32
  ```

## Optional Chaining

- `?.`: allows to safely access nested properties of an object without throwing an error if a property is `undefined` or `null`

  ```typescript
  interface Address {
    street?: {
      name: string
      number: number
    }
  }

  const address: Address = {
    street: {
      name: 'Main St',
      number: 123,
    },
  }

  const streetName = address.street?.name // 'Main St'
  ```

## Nullish Coalescing

- `??`: allows to provide a default value when a variable is `null` or `undefined`

  ```typescript
  const userAge = user.age ?? 18 // if user.age is null or undefined, use 18
  ```

## Null Assertion

- `!`: allows to assert that a variable is not `null` or `undefined`

  ```typescript
  const streetNumber = address.street!.number // using ! asserts that street is not null or undefined
  ```

## Definitely Typed

- [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) is a repository of high-quality TypeScript type definitions for popular libraries and frameworks.
- You can install types for a library using npm:

  ```bash
  npm install --save-dev @types/library-name
  ```

  > TIP: VSCode will often suggest installing types for libraries you use, so you can just click on the suggestion to install them.

## Template Literal Types

- Template literal types allow you to create string types that are based on other string types, similar to template literals in JavaScript.

  ```typescript
  type Greeting = `Hello, ${string}` // Hello, followed by any string
  let greeting: Greeting = 'Hello, John' // valid
  // let invalidGreeting: Greeting = 'Hi, John' // invalid, will cause a type error
  ```

## Resources

- [Typescript Docs](https://www.typescriptlang.org/docs/)
- [Download Typescript](https://www.typescriptlang.org/download)
- [Online Playground](https://www.typescriptlang.org/play)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#typescript)
