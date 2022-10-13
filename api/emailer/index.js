// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const template = require('./emailTemplate');
const sgMail = require('@sendgrid/mail')
const axios = require('axios');

module.exports = async function(context, req) {
    const {name, email, message, token} = req.body;
    const verifyURL = 'https://www.google.com/recaptcha/api/siteverify'

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'chriseannichols550@gmail.com',
        from: 'chriseannichols550@gmail.com',
        subject: 'Website Form Submission',
        text: template(name, email, message)
    }
    
    try{
        const res = await axios.post(verifyURL,{
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token
        })
        if(res.success){
            try {
                await sgMail.send(msg)
                console.log('Email sent successfully');
                context.res.json({
                    body: 200,
                    text: 'Email sent successfully'
                });
            } catch(error) {
                console.error('There was an issue sending the email');
                console.error(error);
                context.res.json({
                    body: 500,
                    text: 'There was an error sending the message'
                });
            }
        }
    } catch(error) {
        console.error('Captcha threw an error');
        console.error(error);
        context.res.json({
            body: 500,
            text: 'There was an error with the captcha'
        });
    }

}
