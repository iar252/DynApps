# Express App

## About
On the website, you should be able to search for recipes. Once you've entered the name of something you're looking for, for example "cake", the page will display the number of recipes there are, and randomly choose one for you to try. It will provide a picture of the recipe, along with credit for the publisher, and a link to the recipe. 


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

In order to run the code, go ahead and cd into the expressApp folder then run "node app.js" and play around on the website!

## There are currently no known bugs. 