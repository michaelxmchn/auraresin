module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = '26de410a-3d45-410b-bccb-66ebced1037c';

    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({
        success: true,
        contacts: data.data || [],
        count: data.data?.length || 0
      });
    } else {
      return res.status(400).json({ error: data.message || 'Failed to fetch contacts' });
    }
  } catch (error) {
    console.error('Get subscribers error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};