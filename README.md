# HR Application
## Why are we doing this?
The purpose of this application is to make it easier for a HR department to manage employee data. It is also designed to make it easier to view data and find specific records using a search function as necessary. In all, it should reduce errors and make workflows more efficient, especially as the dataset expands.

## How I expected the challenge to go
I had expected this to be a larger challenge than it actually was, necessitating multiple pages and complex functionaility. When I broke it down into small tasks, I realised that this didn't have to be the case and it could all be put onto 1 page. I had also thought that the majority of my time would be spent simply showing the data, but I actually spent most time on the functions to edit and delete the data and making sure that the table reflected these changes.

## What went well?
I felt comfortable getting the JSON data into a table and I achieved this faster than I expected. I also built from the ground up using Bootstrap for styling and I found this easy to implement and a quick way to make my app look much better. The filtering function was easier than I expected, and I was pleased with the logic I was able to use here as it's efficient and is able to search any column rather than just 1. I was surprised with how simple implementing a Bootstrap modal was, which enabled me to take my project to the next level. 

## What didn't go as well?
Functions to edit, delete and filter employees were trickier to write as I wanted to keep data the same in the JavaScript object aswell as the DOM. This meant effectively duplicating all my operations as I didn't want to re-render the table on every change as this seemed inefficient. I also had an issue where I needed to make a variable visible outside of the scope of the function it was in which required me to learn about global variables and the window object. 

## Possible improvements for the future
There's several improvements I'd want to make if this web app was to be used in a production environment. First, I'd implement some sort of DBMS that would mean data would be persistent and not lost on every refresh. I wrote the application with this in mind by making sure that the JS variable was kept up to date even though this is functionaly useless with no backend. Further, I'd want to render the modals in JavaScript rather than hidden DOM elements to imtpove page load times. I could also reduce the file sizes by doing this as both modals are essentially duplicated except for titles and buttons. I'd look to add some sort of input validation to prevent erroneous data being saved and I would paginate the table to accomodate for a larger dataset.
