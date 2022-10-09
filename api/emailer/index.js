// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }
// module.exports = async function (context, req) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// };

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const sgMail = require('@sendgrid/mail')

module.exports = async function(context, req) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'chriseannichols550@gmail.com', // Change to your recipient
        from: 'chriseannichols550@gmail.com', // Change to your verified sender
        subject: 'Website Form Submission',
        text: `Name: ${req.body.name} \n Email: ${req.body.email} \n Message: ${req.body.message}`
    }
    sgMail
        .send(msg)
        .then(() => {
        console.log('Email sent')
        context.res.json({
            text: "Success"
        });
        })
        .catch((error) => {
        console.error(error)
        context.res.json({
            text: "Failed"
        });
        })
}
