# Robert3Blackwell.com
Personal website with professional information on Robert Blackwell

This website is a work in progress. I am currently experimenting with Django and AJAX
to improve the maintainability of my code and speed of content delivery.

##Structure
I am continuously striving to organize my project in such a way that it will
take advantage of every opportunity to deliver content efficiently to my users.

This is mostly unnecessary, however, because my website is not only infrequently
trafficked, it was also around 500KB before my changes.

All that being said, I wanted to take the opportunity to streamline my simple site
so that in the future, when I am working on more complicated projects, I will be
able to implement those patterns.

###Modular HTML
My HTML files are broken into smaller files that are repeated to recreated the larger files.
This will make my code base easier to maintain.

###Piecemeal Content Serving
I am aiming to reduce load times (which are admittedly not a problem given my small file sizes)
by serving the elements of my page only as they are needed.

Since the intro to my website is an animation which at first displays only one image other than
components shared between all of my pages (such as stylesheets and the navbar), I will serve
only that image and the shared components as my first content to the user. This allows me to
improve my load time by eliminating 3 images that are used later in the animation sequence: the 
time in between moving to the next image in my animation will be sufficient to retrieve the other
resources.

Again, this is more an exercise in implementing theoretical optimization strategies than a way
to add practical value to my site.

##Technologies Used

###Grunt
This is my first time using Grunt.

I am using it to minify my CSS and JS, to serve my development files locally, etc.
Grunt has also allowed me to modularize my HTML so that I can reuse parts of it 
and avoid repeating code.

I have also built my own task within my Gruntfile that inlines Base64 images 
within my HTML.

###Foundation 5
My website is based on Foundation 5 with modifications to styling passed in 
through SCSS.

###JavaScript
I use JS to create the animations in my intro, center text vertically with images, etc.

###SCSS
This is my first time using SCSS. The ability to use variables is awesome.
