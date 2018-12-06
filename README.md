# Technical

## Step 1

> After cloning the repo `cd` into the `server` folder  
  Run `yarn && yarn build && yarn start` your server should now be running.

## Step 2

> cd into `react` folder and run `yarn && yarn start` 
  The application will open in a new browser window. 
  The basic boilerplate has been written from scratch.
  

### Notes

> Angular and View attempted lightly but not operational.  
  Some small adjustmemnts had to be made to the server to  
  get it working properly, like disabling etags to prevent 304 responses  
  where the same data would be returned after `GET` request.  
  I have also added id's to the json data as json server will  
  not operate as expected without a unique `id` / index  
  In Production all aspects should be tested and coverage suffiecient for the repo  
  to prevent unforseen regression.

