# wildlife-sharing
Application for sharing posts of wildlife

Regarding Security Requirements:

The visitors can view the Home page and All posts for wildlife,
they can also register with first, last name, email, and password,
which will allow them to create their posts,
to vote on posts (if the current user is not the author of the post). Authors can edit or delete posts at any time.

​

Validation and Error Handling:

​
Login / Register

​
· The first name should be at least 3 characters long and contains only English letters

· The last name should be at least 5 characters long and contains only English letters

· The email should be in the following format: name@domain.extension

o Only Latin letters are allowed for any of the parts of the email

o There must be a point(.) after the domain

o Example of a valid email - "petar@gmail.com"

· The password should be at least 4 characters long

· The repeat password should be equal to the password

​
Post

​
· The Title and Keyword should be at least 6 characters (each).

· The Location should be a maximum of 15 characters long.

· The Date should be exactly 10 characters - "02.02.2021"

· The Wildlife Image should start with http:// or https://.

· The Description should be a minimum of 8 characters long.

​

Back-end framework - Express.js

Database - MongoDB with mongoose

View engine - Express-handlebars 

Hashing the passwords - bcrypt
