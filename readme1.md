# Project 4

#### By Tony Daniels

## Project Summary

Im building a Sneaker app using Postgress(PSQL), Python, JavaScript and React. The app is to bring the user excitement with the sneakers that they come up with but to store it in their pockets and use the app whenever they forget whats on their sneakerlist.

## Models

The Model will consist of a schema that will have 3 properties or possibly the edit create 

- brand: String
- name: String
- cost: String
- year: String
- image: String

## Route Table

List your routes in a table

| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /Sneakers           | get    | get all Sneakers items (index)         | index  |
| /Sneakers/:id       | get    | get a particular Sneakers item (show)  | show   |
| /Sneakers/:id/new   | get    | make a new item                        | new    |
| /Sneakers/          | post   | post the new item                      | create |
| /Sneakers/:id/edit  | get    | edit any item on the list              | edit   |
| /Sneakers/:id/      | put    | update the edited item from the list   | update |
| /Sneakers/:id       | delete | delete any item                        | delete |

## User Stories

- User should be able to put down what they want on this app so that they don’t have to worry about forgetting after. 
- User should be aboe to view all sneakers n their list
- User should be able to add a sneaker to the list
- User should be able to update a sneaker to the list
- User should be able to delete a sneaker to the list

## Challenges
pushing up the backend had a lowercase procfile, which means it wont run. It,ll crash. All Procfiles need to have an uppercase P. Pic is attached in the challenges folder

had to enable debugging so the network can show exactly where the second error was on the backend. spent 7 hours on the frontend prior to this until I realized that the 500 error was routing to a capital "y" in  the backend folder.

Had trouble putting the new contents on the index contents so I can have the modal on the index. So, instead, put the modal on the new route.


## List of Technologies

- Python
- PSQL
- JavaScript
- React



