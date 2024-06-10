
// const mysql = require('mysql2/promise');


// const pool = mysql.createPool({

//   host: '193.203.184.93',
//   user: "u606152440_usersdata",
//   password: "?w8o1DlTI|9o",
//   database: "u606152440_users",

//   // host: 'localhost' ,
//   // user: "root",
//   // password: "",
//   // database: "eyeflow",

  
// });

// pool.getConnection()
//   .then(connection => {
//     console.log('Connected to the database');
//     connection.release();
//   })
//   .catch(err => {
//     console.error('Error connecting to the database:', err);
//   });

// module.exports = {
//   queryAsync: async (sql, values) => {
//     const connection = await pool.getConnection();
//     try {
//       const [rows] = await connection.execute(sql, values);
//       return rows;
//     } finally {
//       connection.release();
//     }
//   },
// };



const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '193.203.184.93',
  user: "u606152440_usersdata",
  password: "?w8o1DlTI|9o",
  database: "u606152440_users",
});

pool.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

module.exports = {
  queryAsync: async (sql, values) => {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute(sql, values);
      return rows;
    } finally {
      connection.release();
    }
  },
};
