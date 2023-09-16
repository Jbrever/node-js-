const express = require("express");
const app = express();
const userData = require("./MOCK_DATA.json");
const fs = require("fs");

app.get("/", (req, resp) =>
  resp.send('give endpint "/users" to get users Data')
);
app.get("/users", (req, resp) => {
  return resp.json(userData);
});

// app.get("/users/:idd", (req, resp) => {
//   const iddd = req.params.idd;
//   const user = userData.find((user)=>user.id == iddd)
//   resp.json(user)
// });


//it's below code not working

app.get("/users/:fname",(req, resp)=> {
    const fName = req.params.fname;
    console.log(fName)
    const user = userData.find((name)=>name.first_name == fName)
    return resp.json(user)
})

// app.use(express.json())

// shorthand

app
  .route("/users/:idd")
  .get((req, resp) => {
    const iddd = req.params.idd;
    const user = userData.find((user) => user.id == iddd);
    return resp.json(user);
    
  })
  .patch((req, resp) => {
    return resp.json({ status: "panding...." });
  })
  .delete((req, resp) => {
    resp.json({ status: "on process...." });
  });

app.use(express.urlencoded({ extended: false }));

app.post("/users", (req, resp) => {
  const data = req.body;
  console.log(data);
  userData.push({ ...data , id : userData.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(userData), (err, data) =>{
    resp.json({ status: "successfull" })
});
});

app.listen( 9000,() => console.log("server connected !!!"));
