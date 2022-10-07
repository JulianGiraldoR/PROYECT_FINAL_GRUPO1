// crud del modelo users

const userServices = require('../service/users.service');

const getUsers = (size) => new Promise((resolve, reject) => {
    try {
      let users = [];
      users = userServices.readUsers()
      if(size){
        resolve(users.slice(0, size));
      }else{
        resolve( users );
      }
    } catch (error) {
      reject({code: 500, message: "Error unexpected", log: error });
    }
  });
  
  const getUser = (id) => new Promise((resolve, reject) => {
    try {
      resolve( userServices.readUser(id) );
    } catch (error) {
      reject( error );
    }
  });
  const putUser = (userID, body) => new Promise((resolve, reject) => {
    try {
      resolve( userServices.updateUser(userID, body) );
    } catch (error) {
      reject(error);
    }
  });
  
  const deleteUser = (id) => new Promise((resolve, reject) => {
    try {
      resolve( userServices.deleteUser(id) );
    } catch (error) {
      reject(error);
    }
  });


  module.exports = {
    getUsers,
    getUser,
    putUser,
    deleteUser
  }