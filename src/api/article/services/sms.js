const twilio = require("twilio");

module.exports = {
  async sendSMS({eventData}) {
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID; // Replace with your Twilio Account SID
      const authToken = process.env.AUTHTOKEN; // Replace with your Twilio Auth Token
      const client = new twilio(accountSid, authToken);

      const message = await client.messages.create({
        body: `New article created: demo article`,
        from: process.env.TWILIOPHONENUMBER, // Your Twilio phone number
        mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
        to: '+91-9887876668' // Recipient's phone number (replace with eventData.phoneNumber)
      });

      console.log('SMS sent successfully:', message.sid);
    } catch (error) {
      console.error('Error sending SMS:', error.message);
      console.error('Twilio Response:', error.response.data);
      throw error;
    }
  }
};
