const { queryAsync } = require('../config/db');

const createUser = async (req, res) => {
  try {
    const { username, email, user_password, role, contact_no } = req.body;

    const sql = 'INSERT INTO user (username, email, user_password, role, contact_no) VALUES (?, ?, ?,?,?)';
    const result = await queryAsync(sql, [username, email, user_password, role, contact_no]);

    if (result) {
      res.status(201).json({ message: 'user created successfully', id: result.insertId });
    } else {
      res.status(500).json({ error: 'Error creating user' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
};


module.exports = {
  createUser,
};