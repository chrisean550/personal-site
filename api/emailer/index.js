const template = require('./emailTemplate');
const axios = require('axios');
const { EmailClient } = require('@azure/communication-email');
const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;

module.exports = async function(context, req) {
    const {name, email, message, token} = req.body;
    const params = `?secret=${captchaSecret}&response=${token}`;
    const emailConfig = {
        sender: 'DoNotReply@9b0c6868-9c83-41c5-b16a-8e77cd432019.azurecomm.net',
        content: {
            subject: 'Website Form Submission',
            plainText: template(name, email, message)
        },
        recipients: {
            to: [
                {
                    email:'chriseannichols550@gmail.com'
                }
            ]
        }
    }
    
    try{
        const captchaRes = await axios.post(
            verifyURL+params,
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"   
                }
            }
        )
        if(captchaRes.data.success){
            try {
                const client = new EmailClient(connectionString);
                await client.send(emailConfig);
            } catch(error) {
                console.error(error);
            }
        } else {
            console.log('Captcha failed.')
            context.res.json({
                body: 500,
                text: 'The captcha did not pass'
            });
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
