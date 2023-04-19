| Milestone Project 2  |
| ------------------- | 
| Software Development Program: Milestone Project II |
| **ORDER-UPP** | 

 Order-UPP app is where waiters can take an order and electronically submit it into an SQL database.

 **Setup**
| You will need to setup a Postgres database inside of backend. Then create your .env environment variables 
PORT=4000
PG_URI=postgres://yourusername:yourpassword@localhost:4000/OrderIn
Next add your username and password in the Config.json file of our backend app with your username and password | 

Cd into back end run npm install. 
Cd into frontend2 run npm install. 
In seperate terminals run the command npm start to make both frontend React app and API backend run at the sametime.

 API Backend will run on "http://localhost:4000" 

| Method |  Path |  Page |
| ------ | ----- | -------------- | 
 GET     |   /   |     Home       |
 POST    |   /   |  Create Order  |
 PUT     | /:id  |  Update Order  |
 DELETE  | /:id  |  Delete Order  |

****There is a submodule for front-end2:  front-end2 @ 9810697****


| Credits |
| -------- | 
| Chase Key |
| Gabriel Salinas | 
| Danna Bohnhoff | 
    
  



This milestone project takes place at the end of the web developer unit of the program. It's meant to put into practice skills learned in courses 6 (Back-end Development & APIs), 7 (React & Redux), and 8 (SQL & data Modeling)
