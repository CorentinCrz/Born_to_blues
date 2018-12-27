# Born_to_Blues 
[![CircleCI](https://circleci.com/gh/ayshiff/Born_to_blues.svg?style=svg)](https://circleci.com/gh/ayshiff/Born_to_blues) [![Coverage Status](https://coveralls.io/repos/github/ayshiff/Born_to_blues/badge.svg?branch=master)](https://coveralls.io/github/ayshiff/Born_to_blues?branch=master)

Clone the project :
```
https://github.com/ayshiff/Born_to_blues.git
```

## Available Scripts

In the project directory, you can run:

### **Run it with docker**  🐳

```
docker build -t born-to-blues .
```

And then : 
 ```docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  born-to-blues
  ```

### **Run it without docker**

### `npm install`

It will install all the dependencies.

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run flow`

The project uses [FLow](https://flow.org/) for type checking. Feel free to increase the type checking coverage by adding some types 👍.

### `npm run lint`

The project also use [ESlint](https://eslint.org/) (a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code) and [Prettier](https://prettier.io/). You can see lint warnings / errors by running this command.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Coveralls.io will create a coverage report from your app.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### **Project Structure**

```
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── Home
│   │   │   ├── Home.test.js
│   │   │   ├── HomeComponent.js
│   │   │   ├── HomeContainer.js
│   │   │   ├── duck
│   │   │   │   ├── actions.js
│   │   │   │   ├── index.js
│   │   │   │   ├── operations.js
│   │   │   │   ├── reducers.js
│   │   │   │   ├── tests.js
│   │   │   │   └── types.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       ├── HomeComponent.css
│   │   │       └── HomeContainer.css
│   │   ├── MusicStyle
│   │   │   ├── MusicStyle.test.js
│   │   │   ├── MusicStyleComponent.js
│   │   │   ├── MusicStyleContainer.js
│   │   │   ├── duck
│   │   │   │   ├── actions.js
│   │   │   │   ├── index.js
│   │   │   │   ├── operations.js
│   │   │   │   ├── reducers.js
│   │   │   │   ├── tests.js
│   │   │   │   └── types.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       ├── MusicStyleComponent.css
│   │   │       └── MusicStyleContainer.css
│   │   ├── MusicStyleDetails
│   │   │   ├── MusicStyleDetails.test.js
│   │   │   ├── MusicStyleDetailsComponent.js
│   │   │   ├── MusicStyleDetailsContainer.js
│   │   │   ├── duck
│   │   │   │   ├── actions.js
│   │   │   │   ├── index.js
│   │   │   │   ├── operations.js
│   │   │   │   ├── reducers.js
│   │   │   │   ├── tests.js
│   │   │   │   └── types.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       ├── MusicStyleDetailsComponent.css
│   │   │       └── MusicStyleDetailsContainer.css
│   │   └── NavigationBar
│   │       ├── NavigationBar.js
│   │       ├── NavigationBar.test.js
│   │       ├── index.js
│   │       └── styles
│   │           └── NavigationBar.css
│   ├── config
│   ├── i18n
│   │   ├── i18n.js
│   │   └── locales
│   │       ├── en.json
│   │       └── fr.json
│   ├── index.css
│   ├── index.js
│   ├── reducers.js
│   ├── serviceWorker.js
│   └── utils
│       └── pointFreeUpperCase.js
```

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
