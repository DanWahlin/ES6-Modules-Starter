#ES6/ES2015 Modules Starter Project

## Quick Start

1. Install the global packages.

    `npm install gulp -g`

2. Install the local packages for this demo.

    `npm install`

3. Run Gulp:

    `gulp`

4. Run the server, launch the browser, and transpile the ES6 to ES5 using Babel

    `npm start`

## Details

The source code is located in the `js` folder and written in ES6/ES2015. We use `gulp` to transpile to ES5 using Babel. The `gulp` command runs the default Gulp task which transpiles the code and puts it in the `dist` folder and then watches for more changes. If you change the source, it will transpile again.

When you launch index.html (via `npm start`), SystemJS kicks in and looks for `config.js` for its settings. We tell SystemJS that the base URL for the code is in `/dist`. This is important so all import statements that were written assuming relative pathing in the `src` folder will still work. Finally, we tell SystemJS that import statements by default should assume they end with `.js`. This is accomplished by setting `defaultExtension` to `js`. See the code below for an example.

```javascript
System.config({
    map: {
      main: 'dist' //Map "main" to the "dist" folder
    },
    packages: {
      //Define settings for loading files in "dist"
      dist: {
        main: 'main.js',
        format: 'system',
        defaultExtension: 'js'
      }
    }
});
```

We can now import the main starting module (`main.js`) like this:

```javascript
System.import('main');
```

Now SystemJS gets `/dist/main.js` which in turn imports `car` and `truck`. Each of those import `auto` and extend it.
SystemJS knows that the base URL is `/dist` and to assume an extension of `.js`, so it really gets `/dist/car.js` and `/dist/truck.js`
which in turn get `/dist/auto.js`.
