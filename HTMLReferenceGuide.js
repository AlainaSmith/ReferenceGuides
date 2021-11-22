//HTML

ELEMENT: paragraph <p> </p>

ELEMENT: <img src = '' >  img is the element in this case

ELEMENT: <div> </div>
ELEMENT: <p> </p>
ELEMENT: <h1> </h1>
ELEMENT: <img/>



Attributes are used to configure elements. They provide additional info about elements. They aer always
specified in the start tag. 

<img src = '' > the src is the attirbute.

width and height are attributes
style attribute


<!DOCTYPE html>
Not actually an HTML element, just a declaration
Lets browsers know to expect HTML in this file
Should always be included, otherwise the page may not work

  <html lang="en">
  The root element of the file, the parent of everything else
  Everything contained in this tag will be read as HTML
  The lang attribute can be used here to specify human languages

    <head>
    The head tag is a container used to contain metadata (data about data)
    This data is not displayed on the page, but is readable by browsers
    Meta tags are used inside the head to store the data
    Meta tags provide information about a site that can be used by search engines and other software
    We use attributes to specify the data such as a website description, keywords, author, and more    
      <!-- Meta tags and other external links go here, and the link and title tags below can be used to change the icon/title of your webpage -->
      <link rel="shortcut icon" href="some-URL-or-path-goes-here" />
      
      <title>The Title</title>
      This is a metadata tag that will contain the title of the webpage
      Webpage titles appear in browser tabs

    </head>


    <body>
    <!-- Content of page goes inside the body tag -->
    The body tag is the container for all the elements that will be rendered on the page
    The head and body pattern is common throughout programming
    Heads/headers contain information about something while the body contains the actual information
    </body>
    
  </html>
