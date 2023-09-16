Rest APi --> JSON format

Get /user --> List of Users

Get /user/1 --> Get the user ID 19
Get /user/2 --> Get the user ID 2

Dynamic Path Parameters

Get /user/:id
:id --> Variable | Dynamic (":" used to make Dynamic )


Post /user --> create  new user 

Patch /user/1 --> Edit the user with Id 1

Delete /user/1 --> Delete the user with Id 1

we can use "mockaro.com" to get Fake Data For Texting Purpose

line no. 27 -> Get,Patch,Delete have same routes "/users/:idd" so we can use shorthand by "app.route().get().patch().delete()"  

"req.body" contain the html data 

"app.use(express.urlencoded({ extended: false }))" these line used to fetch HTML Form data without these line if i use "req.body" so it will give undefined value

line no. 47 " userData.push({ ...data , id : userData.length + 1 });  Spread Syntax (...data): The spread syntax, denoted by three dots (...), is used to expand the properties of an object or elements of an array.

post("/login",(req,resp)=>{
   //// "login" is an route
}) post method's route should be match with "action="_" " form attribute if not matched so it will give error and if we want to give route according us so we need to remove "action="_" " form attribute so we can give any route(endpoint)