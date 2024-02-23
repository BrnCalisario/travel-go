import * as nodemailer from "nodemailer";
import configs from "../../config/configs";

class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }


    sendMail() {
        console.log(configs)
        let mailOptions = {
            from: "nodemailerandre@gmail.com",
            to: this.to,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            host: configs.host,
            secure: false,
            auth: {
                user: configs.user,
                pass: configs.password
            },
            tls: { rejectUnauthorized: false }
        });


        console.log(mailOptions);

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
                return error;
            } else {
                console.log(info)
                console.log("mandei")
                return "E-mail enviado com sucesso!";
            }
        });
    }


}

export default new Mail;