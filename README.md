# Observer JS

The tiny js library for manage of events. 
You also can pass some data into event. 
Each different event can have a multiple handlers. 

#[Demo](https://frentsel.github.io/jquery.fData.js/index.html)

*Example for use*

```javascript

// Example
var form = $('form');

// Return json object of form
console.log(form.fData());

// Fill form
form.fData({
  userName: 'Sanya',
  email: 'sanya@gmail.com',
  age: 32
})
```

```javascript

// Example
var form = $('form');

// Return json object of form
console.log(form.fData());

// Fill form
form.fData({
  userName: 'Sanya',
  email: 'sanya@gmail.com',
  age: 32
})
```

Result in console
```javascript
Action: secondHandler, data:  1485090689879
```
