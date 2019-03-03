# Food Examiner

An application that provide various food related inforamtion including
-Food image recognition (powered by Clarifai API)
-Food images request (powered by Unsplash API)
-Recipes search (powered by Recipe Puppy API)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you have node.js installed, you can install node.js via https://nodejs.org/en/

### Installing


Install dependencies for server

```
$ npm install
```

Install dependencies for client

```
$ cd client
$ npm install
```

### Environment variable file
Create a .env file for api keys, an example named .env.example is provided.
Please refer to the respective documentation on how to setup api keys for different apis.
Unsplash: https://unsplash.com/documentation
Clarifai: https://clarifai.com/developer/docs/
Google Recaptcha: https://www.google.com/recaptcha/intro/v3.html

### Running the application

Runnng the client
```
$ cd client
$ npm start
### client runs on localhost:3000
```

Running the server
```
$ nodemon app.js
### server runs on localhost:3001
```

## Deploy on Heroku

1. Make sure you have a Heroku account, you can register an account at https://www.heroku.com/
2. Make sure you have the Heroku CLI installed, you can install it via https://devcenter.heroku.com/articles/heroku-cli
3. Download the project as zip or clone the project with git clone
    ```
    $ git clone https://github.com/williamang2736/food-services.git
    ```
4. Login with heroku
    ```
    $ login heroku
    ```
5. Go to the heroku web dashboard, press on 'New', then 'Create new app'
6. Enter your application name and submit
7. Add heroku as a remote repository
   ```
    $ git init
    $ heroku git:remote -a <your-heroku-application-name>
   ```
8. Push to heroku (deploy)
    ```
    $ git push heroku master
    ```

## Built With

* [Express](https://github.com/expressjs/express) - The server side web framework
* [React](https://github.com/facebook/react) - Front end library
* [Redux](https://github.com/reduxjs/redux) - State management
* Please refer to package.json file for more information

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

