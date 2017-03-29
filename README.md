# React app

Learning React JS, React-Router, Redux, Karma (& Mocha/Chai)

# Set up
Clone: `https://github.com/myles91/react`

``` bash

cd React

npm i -g webpack karma-cli mocha
npm i
gulp

```

# Tests

Chrome and IE seem to run off the shelf, however FireFox and Safari often require "linking".

``` bash

npm install karma-firefox-launcher --save-dev --link
npm install karma-safari-launcher --save-dev --link

```

Single run, headless:

``` bash

gulp test

```

Watch tests, headless:

``` bash

gulp test:watch

```

Single run, all browsers:

``` bash

gulp test:browsers

```
