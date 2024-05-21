# QU-POS Test

## This is a [Vite](https://vitejs.dev/) project intended to show planets from [SWAPI](https://swapi.dev/).

#### Said application gathers some amazing resources to make it possible, such as:

- To manage our packages: [yarn](https://yarnpkg.com/)

- The Design System: [MaterialUI](https://mui.com/material-ui/getting-started/),

- This guy will help Us to handle the data fetched: [SWR](https://swr.vercel.app/),

- Our browser history: [react-router](https://reactrouter.com/en/main)

- Clean code rules! So that's why these two will help Us with it: [ESlint](https://eslint.org/),
  [EsLint Sonar](https://github.com/SonarSource/,eslint-plugin-sonarjs)

### So let's get our hands dirty...

To be able to install it locally, I recommend you to have [nvm CLI](https://github.com/nvm-sh/nvm) installed, so you can use the right Node version and be sure to run it as expected.

#### Let's throw some commands:

Firstly, you need to clone the project.

```sh
git clone https://github.com/dbrazeiro/planets-voyager.git
```

Due to the `.nvmrc` file located at the root folder, We can run the following command. It'll do its job by setting the Node version to the right one.
In Case you don't want to use `nvm`, please make sure to install this one 👉 `v18.18.2`

```sh
nvm use
```

Now We can install the packages listed in our package.json, to do that We use `yarn`.
For demo purposes You'll be able to use `npm`.

```sh
npm install
```

or

```sh
yarn
```

It's time to see it working. Ready to run it locally?.

```sh
yarn dev
```

The defult url:port used by `Vite` is http://localhost:5173/.

---

To understand the rest of the commands listed in our package.json and more, We encourage you to visit [Vite](https://vitejs.dev/).

---

### Questions:

## 1.

What's a closure? Where in the code is there a closure?

## 2.

Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

### Responses:

## 1.

Closures refers to the variables behavior related to scopes.
Any function can access to a variable from outside of its scope such as `window` object, however, its variables can't be accessed from the outside, so that's why it's called `closure`. So in fact, any function located into a higher order function is an example of closure.

---

## 2.

Side effects are considered a result that wasn't expected while working on a certain task.
This is what an `impure` function would do, this kind of functions can't control some of its variables nor the returned values.
To avoid this behavior `pure` functions comes into play.

### Examples:

`Impure` function (src/routes/PlanetsPage.tsx:20):

```
  useEffect(() => {
    planets && setCount(+planets.count / rowsPerPage);
  }, [planets]);
```

Why it is an impure function?
Because it's getting two variables from outside of its scope, such as `planets.count` and `rowsPerPage` and said values are not being cotrolled.

---

`Pure` function (src/routes/PlanetsPage.tsx:17):

```
  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    navigate(`/planets/${newPage}`);
  };
```

Why is it `pure`?
It's receiving its values from its own params, so the result will always be the same if the params remians the same.

Not always an `impure` function is unwanted as detailed in the previous examples, but sometimes you don't want to change the value of an object from outside of your scope like the following.

```
var car = {
  wheels: 4,
  doors: 2
};

const returnCar = () => {
  return car.windows = 4;
}

returnCar();
console.log(car);
/*
returns:
const car = {
  wheels: 4,
  doors: 2,
  windows: 4
};
*/
```

So this would be considered an unwanted side-effect.
