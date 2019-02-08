# Wikipedia Article Viewer
Displays wikipedia cards items that are relevant to the users input.

[View it on Codepen](https://codepen.io/gvenezia/full/GzQvjN)

This project is a reconsideration of an earlier Wiki Viewer written in Vanilla JS:
[Github](https://github.com/gvenezia/wikiViewer)
[Codepen](https://codepen.io/gvenezia/full/EQLrGr)

## Why'd you build it?
I was inspired to recreate my earlier Wiki Viewer by the following quote: 
> "It is not possible to write complex, efficient and easy to maintain UIs with Vanilla JavaScript. That’s the main reason you need a modern JavaScript framework." - *[Alberto Gimeno](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)*

Since the wikiViewer UI isn't all that complex, I wanted to see if this project was close to the point at which it makes sense to transition from Vanilla JS to a framework. In theory it seems like even smaller applications could benefit from a front-end framework. If the amount of work is similar, then the potential for scaling up and component reuse would tip the scale in favor of front-end frameworks.

## User Stories (in progress)
* Users can type in any word and the 10 top Wikipedia page results will be displayed in a concise fashion
* Results update automatically as the user types
* Users can click on any of the page containers to be redirected to the corresponding Wikipedia page
* Users can click on the random article button and be redirected to a random Wikipedia page

## How was it made?
Built with 
* React
* JSX
* axios
* Wikipedia API
* HTML
* CSS
* Semantic UI


***  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## create-react-app Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
