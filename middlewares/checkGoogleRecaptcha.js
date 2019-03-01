const axios = require("axios");

const checkGoogleRecaptcha = async (req, res, next) => {
  try {
    const secret = process.env.GOOGLE_RECAPTCHA_SECRET || "123";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${
      req.body.googleRecaptchaValue
    }`;
    const response = await axios.post(url);
    if (response.data && response.data.success) {
        return next();
    }
    throw 'Google Recaptcha validation failed';
  } catch (err) {
    return res.status(400).json({ err });
  }
};

module.exports = checkGoogleRecaptcha;
