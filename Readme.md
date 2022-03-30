# Links
- [Website](https://codyper.netlify.app)
- [Typing speed test](https://codyper.netlify.app/test)

# About the API I used
Let's get the detail of the REST APIs I've created using Hasura.
> You can only perform get request on these endpoints and no need to signup or create a new account to use it

1. `https://type-to-learn.hasura.app/api/rest/get-code/:name`  
Get code by programming language name. An example of the request would be `https://type-to-learn.hasura.app/api/rest/get-code/python`

2. `https://type-to-learn.hasura.app/api/rest/get-random/:limit`  
Get code from a random programming language with a limit. An example of the request would be `https://type-to-learn.hasura.app/api/rest/get-random/5`

3. `https://type-to-learn.hasura.app/api/rest/get-code/:name/:limit`  
Get code from a  programming language with a limit. An example of the request would be `https://type-to-learn.hasura.app/api/rest/get-code/javascript/5`

4. `https://type-to-learn.hasura.app/api/rest/get-code-with-src/:name/:limit`  
Get code from a programming language with a limit and the source of the code. An example of the request would be `https://type-to-learn.hasura.app/api/rest/get-code-with-src/java/2`

5. `https://type-to-learn.hasura.app/api/rest/get-code-with-offset/:limit/:offset`  
Get code from any programming language with a limit and offset.  Offset prevent us from getting the same result on every query. An example of the request would be `https://type-to-learn.hasura.app/api/rest/get-code-with-offset/5/14`