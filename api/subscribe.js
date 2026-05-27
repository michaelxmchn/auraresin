const resend = require('resend');

const apiKey = process.env.RESEND_API_KEY;

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const resendClient = new resend.Resend(apiKey);

    await resendClient.contacts.create({
      audienceId: '26de410a-3d45-410b-bccb-66ebced1037c',
      email: email,
      unsubscribed: false,
    });

    return res.status(200).json({ success: true, message: 'Subscribed successfully!' });
  } catch (error) {
    // If contact already exists, still return success
    if (error.message && error.message.includes('already exists')) {
      return res.status(200).json({ success: true, message: 'Already subscribed!' });
    }
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
};