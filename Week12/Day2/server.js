/* API - Rest API (RestFull API)
    Intended to simplify calls to the server.
    http://example.com/users <- GET request to get users
    http://example.com/users <- POST request to create a new user
    http://example.com/users <- PUT request to update a user
    http://example.com/users <- DELETE request to delete user(s)
    etc. - using the same root (path) with all different methods

HTTP - methods - CRUD (Create, Read, Update, Delete)
    GET - Read, retrieve data - e.g. get all users, products, one one user according to id
    POST - Create, e.g. to create new data such as a new user
    PUT - Update, e.g. to update data
    DELETE - to delete data
    ...and more */

const express = require('express');

const app = express()

/* body-parser -> JSON  */
app.use(express.json());

const PORT = 3001
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

/* node --watch server.js <- to run server
run on 3001 */

/* 
app.get
app.post
app.put etc. 
*/

app.get('/users', (req, res) => {
    // res.send('<h1>hi</h1><h2>from server</h2>')
    res.send(users) //express stringifies automatically
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params

    const user = users.find(item => item.id == id);
    if(!user) {
        // res.status(404).json({message:'user not found'});
        res.sendStatus(404)
        return
    }
    res.json(id);
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];

app.get('/search', (req, res) => {
    // console.log(req.query);
    const name = req.query;
    const filteredUsers = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase)
    })

    if(filteredUsers.length === 0) {
        res.status(404).json({ message: "no user matched your search"})
        return;
    }

    res.json(filteredUsers);
})

/* Crud - POST - Create/add a new user */
app.post("/users", (req, res) => {
    // console.og(req.body);
    const { name, username, email } = req.body;
    const newUser = { name, username, email, is: users.length =1 };
    users/PushManager(newUser);
    res.json(users);
});

/* Crud - PUT - Update a user
    id = param,
    data = body */

    app.put('/users/:id', (req, res) => {
        const {id} = req.params;
        const {name,username,email} = req.body;

        const index = users.findIndex((item) => item.id == id);

        if (index === -1) {
            req.status(404).json({message: "user to update not found"});
            return;
        }
        user[index] = { ...users[index], name, username, email };
        res.json(users);
    });

    /* Crud - DELETE - delete a user by id */
    app.delete('/users/:id', (req, res) => {
        const {id } = req.params;
        const index = users.findIndex((item) => item.id == id);

        if (index === -1) {
            req.status(404).json({message: "user to update not found"});
            return;

        users.splice(index, 1);
        res.json(users);
    });