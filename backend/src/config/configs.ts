import 'dotenv/config'

const EMAIL = process.env.EMAIL
const EMAILPASS = process.env.EMAILPASS
class Configs {
    public host = "smtp.gmail.com";
    public port = 465;
    public user = EMAIL;
    public password = EMAILPASS;
}

export default new Configs;