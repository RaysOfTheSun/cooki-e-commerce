let router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.render('newsletter', {title: 'Cookie Stop | Newsletter'});
});

router.post('/newsletter-signup', async (req, res) => {
    try {
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass // generated ethereal password
                }
            });

            const message = '<h3>Good day!</h3> \n' +
                '<p>Thank you for taking your time to register and subscribe to our newsletter! We will ' +
                'make sure that you receive the best content that you could possibly can.</p>';
            const plainTextMessage = 'Good day! Thank you for taking your time to register and subscribe to our ' +
                'newsletter! We will make sure that you receive the best content that you could possibly can.';

            let mailOptions = {
                from: 'cookieStop-newsletter <cookiestop@cookie.com>', // sender address
                to: `${req.body.mail}`, // list of receivers
                subject: 'Thank You for Subscribing!', // Subject line
                text: plainTextMessage, // plain text body
                html: message // html body
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log(`Message sent: ${info.messageId}`);
                // Preview only available when sending through an Ethereal account
                console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
            });
        });
        res.render('newsletter');
    } catch (e) {
        res.end(e.message || e.toString());
    }
});

module.exports = router;