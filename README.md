# Instructions

What this code does is run the front-end in amplify, this front-end is made with react and Amplify API components.
In this package all the user interface unrelated to the bog is managed, it connects to cognito in AWS, also it connects to S3 and an API gateway. 
It uses cognito to manage authentication, S3 to manage all the information about the uploaded inventory and the API gateway to update the chatbot knowledge base.

In order to run this code you need to first run the repository of the cdk-repository. 
Then, once is ran and all the information is retrieve you have to update the .env file.
With that done, you run

```sh
npm install
```
And then
```sh
npm run dev
```
Once done that it should be running in your local host.
