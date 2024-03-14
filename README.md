# Typescript

A Typescript cheat sheet repository

## Install

_Note:_

- _you need to already have npm installed_
- _when working with a team, you should not use typescript globally to avoid version conflicts_

```bash
npm install -g typescript
```

## File extensions

`.ts`
`.tsx` (for react jsx files)

## Compile

```bash
tsc --watch
```

## Run

```bash
node index.js
```

TIP: You can use `nodemon` to watch for changes and restart the server automatically

```bash
npm install -g nodemon
nodemon index.js
```

OR use `nodemon` directly with `.ts` files

```bash
nodemon index.ts
```

> Note: If you get an error when running nodemon with typescript files, make sure you also have `ts-node` installed with:
> `npm install -g ts-node`

## Config file

`tsconfig.json`
TIP: You can generate a config file with `tsc --init`

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

TIP: You can also use interfaces (interface User {...}) -see below

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

## Interfaces (useful when declaring objects)

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

## Function interfaces - define the shape of a function

```typescript
interface MyMathFunction {
  (a: number, b: number): number
}

// When implementing a function from an interface, all types must match the interface
const multiply: MyMathFunction = (a: number, b: number): number => a * b
```

## Type assertion (when you know the type of a variable)

TIP: Try to avoid using `any` type

```typescript
let customerID: any = '123'
let customerIDAsNumber = customerID as number
let customerIDAsNumber2 = <number>customerID
```

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

## Extending Classes (Subclasses)

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

## Generics (allow us to create reusable components)

`<T>` is a placeholder that allows to later define the type of the generic

```typescript
function getId<T>(id: T): T {
  return id
}
const numberId = getId<number>(1) // this function call will only accept numbers
const stringId = getId<string>('1') // this function call will only accept str
```

## Enum - allows to define a set of enumerated named constants

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

- [Typescript Docs](https://www.typescriptlang.org/docs/)
- [Download Typescript](https://www.typescriptlang.org/download)
- [Online Playground](https://www.typescriptlang.org/play)

## Pick and Omit

- `Pick`: create a new type from an existing type by picking some properties
- `Omit`: create a new type from an existing type by omitting some properties

```typescript
interface User {
  id: number
  name: string
  lastName: string
  age: number
}

type Username = Pick<User, 'name' | 'lastName'>

type UserWithoutId = Omit<User, 'id'>
```
