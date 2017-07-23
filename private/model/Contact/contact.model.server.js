/**
 * Created by Aadi on 5/15/2017.
 */

var clientId= '242564311962-id45q9d6vqt5epluuv4vkqqda8mbr47q.apps.googleusercontent.com';
var clientSecret= 'xDoMFKedht_K4rQNwd25IljE';

var mongoose= require('mongoose');
var q= require('q');

var contactSchema= require('./contact.schema.server');
var contactModel= mongoose.model('contactModel', contactSchema);

contactModel.getAllContacts= getAllContacts;
contactModel.getContactById= getContactById;
contactModel.createContact= createContact;
contactModel.sendMail= sendMail;

module.exports= contactModel;
var nodemailer= require('nodemailer');
function sendMail(contactDetails) {
    console.log('Contact Model Server: '+contactDetails);
    var deferred= q.defer();
    var transporter= nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'aadishlok9@gmail.com',
            pass: 'MasterChief#117',
            refreshToken: '1/kzI2KcJ54s3OXKqB8RzYGnq0etwMh1kD_4X9vP-XXMs',
            accessToken: 'ya29.GltYBGC5PNAr38typH1j5nMnDKLAbMS2P64osQ_8VT2WExEjwHuN3hX5MPVk3dnJfTbftZqhg8XThtDMDS_WOO_KdMPTXTrvi5QD1S4WG6w9IsAGJl0mOKz0A9ZV'
        }
    });
    transporter.verify(function (err, success) {
        if(err){
            console.log('Error: '+err);
        }else{
            console.log('Successful: '+success);
        }
    });
    var mailOptions= {
        from: contactDetails.email,
        to: 'aadishlok9@gmail.com',
        subject: 'Message from '+contactDetails.firstName+' '+contactDetails.lastName,
        text: contactDetails.message
    };
    transporter.sendMail(mailOptions, function (error, response) {
        console.log('sending mail');
        if(error){
            console.log('Model Error: '+error);
            deferred.reject(error);
        }else{
            console.log('Response Successful'+response);
            deferred.resolve(response);
        }
        transporter.close();
    });
    return deferred.promise;
}

function createContact(contact){
    var deferred= q.defer();
    contactModel.create(contact, function (err, contact) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(contact);
        }
    });
    return deferred.promise;
}

function getAllContacts(){
    var deferred= q.defer();
    contactModel.find(function (err, contacts) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(contacts);
        }
    });
    return deferred.promise;
}

function getContactById(id){
    var deferred= q.defer();
    contactModel.find(id, function (err, contact) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(contact);
        }
    });
    return deferred.promise;
}

