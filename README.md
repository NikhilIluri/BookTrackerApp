# MyReads Project

This application allows you to keep track of your books. You can search books,move the books to your shelves based on whether you have read it , want to read or whether you are currently reading.

## Prerequisites

Make sure you have following things installed on your system
1) Node.js
2) NPM
3) Any code editor of your choice
4) A command terminal

## Getting Started

To run this application, you need to the following after downloading/cloning the repository.
Access the project folder and from the command line do the following
1) Install all project dependencies with "npm install"
2) Start the server with "npm start"
It will load the application on localhost (usually localhost:3000), depending on availability of port it might change

### BooksAPI Overview

1) getAll()
   Returns a Promise which resolves to a JSON object containing a collection of book objects.
   This collection represents the books currently in the bookshelves in your app.
2) update(book, shelf)
   book: <Object> containing at minimum an id attribute
   shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
   Returns a Promise which resolves to a JSON object containing the response data of the POST request
3) search(query, maxResults)
    query: <String>
    maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
    Returns a Promise which resolves to a JSON object containing a collection of book objects.
    These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search       page.


### Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Built with

1) React JS, create-react-app
2) Node.js, npm

## Authors

1) Starter template provided by Udacity
2) Nikhil Iluri

## Acknowledgemnts

Thanks to Udacity team. Special thanks to Tyler McGinnis.