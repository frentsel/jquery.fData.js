# Observer JS

The tiny jQuery plugin for work with form like with usual object.

#[Demo](https://frentsel.github.io/jquery.fData.js/index.html)

*Example for use*

```javascript
// Get Form Data
$('form').fData();
// return
/*{
    "firstName": "Vasya56745657 547",
    "lastName": "Pupkin547",
    "email": "vasya-pupkin@mail.ru",
    "tel": "+7012345678"
}/*

// Fill form
$('form').fData({
    "firstName": "Vasya",
    "lastName": "Pupkin",
    "email": "vasya-pupkin@mail.ru",
    "tel": "+7012345678"
});
```