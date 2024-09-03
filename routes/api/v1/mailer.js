var express = require('express');
const sendNow = require('../../../services/sendmailer');
var router = express.Router();

router.post('/send_mail', function(req, res, next) {
  const {sendFrom, sendTo, message, subject} = req.body
  if(!sendFrom) return res.status(500).send({message: 'send from not found'});
  if(!sendTo) return res.status(500).send({message: 'send to not found'});
  if(!subject) return res.status(500).send({message: 'subject not found'});
  if(!message) return res.status(500).send({message: 'message not found'});
  sendNow(sendTo, subject, message, sendFrom).then(() => {
    res.send({message: 'mail send successfully'});
  }).catch((e) => {
    console.log("error in mailer: ", e);
    res.status(500).send({message: 'respond with a resource'});
  });
  
});

router.get('/', function(req, res, next) {
  res.send({message: 'no action found'});
});

module.exports = router;