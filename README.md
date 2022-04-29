How to Test
===========

Some practice using jest!

## install jest
npm init -y
npm install <package_name> <=> npi i <package_name>
npm install --save-dev <package_name> <> npm i -D <package_name> // not sure what this does

add to json.package...
```json
"scripts":{
    "test": "jest --watchAll
}
```

## to run script
`npm test` or `npm run test`

if you have jest installed globally...
`jest`

example js file - sum.js
```js
module.exports = function_name;

module.exports = {
    function_name: function_name,
    function_name2: function_name2
}
```

example jest file sum.test.js
```js
const function_name = require('./file_name')
const function_name = require('./sum')

describe('description',callback) // callback - fn used as an arg

describe('sum', callback() => {
    expect(sum(2,3).toEqual(5))
})
```
