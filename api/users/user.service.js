const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
      pool.getConnection((error,conn)=>{
        conn.query(`insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)`,
          [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number
          ],
  (error, results, fields) => {
    if (error) {
      return callBack(error);
      // console.log("error");
    }
    return callBack(null, results);
  }
        );
      })
      
    }
}









// (error, results, fields) => {
//   if (error) {
//     return callBack(error);
//     // console.log("error");
//   }
//   return callBack(null, results);
// }