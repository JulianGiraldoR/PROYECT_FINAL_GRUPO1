const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');
const contactFormController = require('../controller/contactForms.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  contactFormController.getContactForms(size)
    .then( contactForms => {
      response(res, {code: 200, key: "contactForms", payload: contactForms})
    })
    .catch(error => {
      log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  contactFormController.getContactForm(id)
    .then( product => {
      response(res, {code: 200, key: "contactForm", payload: contactForm})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.post('', (req, res) => {
  const { body } = req;
  contactFormController.postContactForm(body)
    .then( result => {
      response(res, { code: result.code, key: "message", payload: result.message});
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.put('/:contactFormID', (req, res) => {
  const { contactFormID } = req.params;
  const { body } = req;
  contactFormController.putContactForm(contactFormID, body)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  contactFormController.deleteContactForm(id)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    })
});

module.exports = router;