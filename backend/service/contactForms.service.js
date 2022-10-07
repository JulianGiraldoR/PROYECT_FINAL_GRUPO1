const contactFormSchema = require('../models/contactForm.model');

const readContactForms = () => new Promise((resolve, reject) => {
    contactFormSchema.find()
      .then((contactForms) => resolve( contactForms ))
      .catch((error) => reject({code: 500, message: error}))
  });

  const readContactForm = (id) => new Promise((resolve , reject) => {
    contactFormSchema.findById(id)
      .then((contactForm) => resolve(contactForm))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const createContactForm = (contactForm) => new Promise((resolve, reject) => {
    const formDB = contactFormSchema(contactForm);
    formDB.save()
      .then(() => resolve({code: 201, message: "Product created successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updateContactForm = (id, contactForm) => new Promise((resolve , reject) => {
    contactFormSchema.findByIdAndUpdate(id, contactForm)
      .then(() => resolve({code: 201, message: "Form updated successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });
  const deleteContactForm = (id) => new Promise((resolve , reject) => {
    contactFormSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "Form deleted successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  })

module.exports = {
    readContactForms,
    readContactForm,
    createContactForm,
    updateContactForm,
    deleteContactForm
  }