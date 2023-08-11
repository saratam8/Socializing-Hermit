# Socializing-Hermit

## Description

This application is an API that social network web applications can use to store user information, friends, thoughts and reactions to a MongoDB database. Users can socialize while still being a hermit in the comforts of their own home.

## Installation

Node.js must be installed on the machine that the application is running on. Express and Mongoose npm packages must also be installed.

## Usage

To use this application, open the project in the terminal of your choice and run the command "node index.js".

Ensure a MongoDB connection is established.

Use Insomnia to read and write data. 

* Retrieve all users by sending a GET request to /api/users

* Create a new user by sending a POST request to /api/users and the following data format:

    `{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
    }`

* Retrieve a single user by sending a GET request to /api/users/:userId and inserting a specific _id number into the query parameter

* Update a single user by sending a PUT request to /api/users/:userId and the following data format:

    `{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
    }`

* Delete a single user by sending a DELETE request to /api/users/:userId

* Post a new friend to a user by sending a POST request to /api/users/:userId/friends/:friendId

* Delete a friend from a user's friend list by sending a DELETE request to /api/users/:userId/friends/:friendId

* Retrieve all thoughts by sending a GET request to /api/thoughts

* Create a new thought by sending a POST request to /api/thoughts and the following data format:

    `{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
    }`

* Retrieve a single thought by sending a GET request to /api/thoughts/:thoughtId inserting a specific _id number into the query parameter

* Update a thought by sending a PUT request to /api/thoughts/:thoughtId

* Delete a thought by sending a DELETE request to /api/thoughts/:thoughtId

* Add a reaction to a thought by sending a POST request to /api/thoughts/:thoughtId/reactions with the following data format:

    `{
        "reactionBody": "Sounds great!",
        "username": "lernantino"
    }`

* Delete a reaction by sending a DELETE request to /api/thoughts/:thoughtId/reactions/:reactionId

## Technology Used

* Node.js
* MongoDB
* Express.js
* Mongoose.js

## Demo of Application

https://drive.google.com/file/d/1nUvILNns5Tlq_TldFOHxmXWOxY5iSwZj/view?usp=sharing

## Resources Used

https://mongoosejs.com/docs/api/model.html

https://www.mongodb.com/docs/manual/reference/operator/update-array/

## Author Links

https://github.com/saratam8


