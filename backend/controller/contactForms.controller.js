//crud del modelo formulario de contacto


const contactFormServices = require('../service/contactForms.service');

const getContactForms = (size) => new Promise((resolve, reject) => {
  try {
    let contactForms = [];
    contactForms = contactFormServices.readContactForms()
    if(size){
      resolve(contactForms.slice(0, size));
    }else{
      resolve( contactForms );
    }
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});

const getContactForm = (id) => new Promise((resolve, reject) => {
  try {
    resolve( contactFormServices.readContactForm(id) );
  } catch (error) {
    reject( error );
  }
});

const postContactForm = (body) => new Promise((resolve, reject) => {
  try {
    resolve( contactFormServices.createContactForm(body) );
  } catch (error) {
    reject(error);
  }
});

const putContactForm = (contactFormID, body) => new Promise((resolve, reject) => {
  try {
    resolve( contactFormServices.updateContactForm(contactFormID, body) );
  } catch (error) {
    reject(error);
  }
});

const deleteContactForm = (id) => new Promise((resolve, reject) => {
  try {
    resolve( contactFormServices.deleteContactForm(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
getContactForms,
getContactForm,
postContactForm,
putContactForm,
deleteContactForm
}
