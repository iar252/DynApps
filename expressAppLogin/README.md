# API Log In

## About
There is a sign up page where the information put in, is stored in the database. Then, the user is routed to the login page. At the login page, the user can use their information to sign in. If their username or password are incorrect or they don't have an account, they are routed to the sign up page. 
After a successful log in, the user should be able to search for recipes. Once they've entered the name of something they're looking for, for example "cake", the page will display the number of recipes there are, and randomly choose one for the user to try. It will provide a picture of the recipe, along with credit for the publisher, and a link to the recipe. 


## How to Use 
Once you download the code, you should get your own API from this website: https://www.food2fork.com/user/api
Once you sign up, copy and paste the API key generated for you and put that into a config.js file that looks like below:
module.exports = {
	apiKey: '*******************'
}
OR you can directly put the string of the API key into line 6 of the app.js file for the variable "apiKey".

Afterwards, you have to cd into the folder that holds the project and make sure that you have node and npm. Install the following:
npm init
npm install --save express
npm install hbs --save
npm install body-parser --save
npm install request --save

In order to run the code, go ahead and cd into the expressApp folder then run "node app.js". Visit localhost:3000, and make an account. Remember the information then log in and view recipes. 
## There are currently no known bugs. 