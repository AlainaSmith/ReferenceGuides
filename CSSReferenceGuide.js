CSS

The most basic way to select HTML elements is by their tagname, such as div, h3, or button

This will be where the selector goes {
    property1: value;
    property2: value;
  }


  button {
    background-color: green;
  }


  h1, h2, h3 {
    color: teal;
    margin: 20px;
  } 


COMBINATORS 
  p > span {
    padding: 10px;
  }
  
  div span {
    color: blue;
  }



  INLINE STYLING
  <button style="color:blue;font-size:12px">Button Text</button>




  INTERNAL CSS (NOT BEST PRACTICE)
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        h1 {
          background-color: blue;
        }
      </style>
      <title>Document</title>
    </head>
    <body>
      <h1>I'm a header</h1>
    </body>
  </html>


EXTERNAL CSS (BEST PRACTICE)  with CSS in seperate file

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Page</title>
    <link rel="stylesheet" href="index.css"/>
</head>
<body>
    <h1>Welcome!</h1>
</body>
</html>


BLOCK elements
div
h1
p

INLINE elements
button
Input
span

BACKGROUND PROPERTIES

div {
    background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: none;
  }







