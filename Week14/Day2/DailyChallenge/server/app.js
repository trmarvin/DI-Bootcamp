import express from 'express';

const app = express();
app.use(express.json());

// In-memory "tables"
const users = [];
const hashpwd = [];

app.post('/users', (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  const newUser = {
    id: users.length + 1,
    email,
    username,
    first_name,
    last_name,
  };
  users.push(newUser);

  const newPwd = {
    id: hashpwd.length + 1,
    username,
    password,
  };
  hashpwd.push(newPwd);

  res.status(201).json({ message: 'User created', user: newUser });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});