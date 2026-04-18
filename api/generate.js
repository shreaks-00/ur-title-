export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const API_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: 'API key not configured on server.' });
    }

    try {
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(req.body)
        });

        const data = await groqResponse.json();

        if (!groqResponse.ok) {
            return res.status(groqResponse.status).json(data);
        }

        return res.status(200).json(data);
    } catch (err) {
        console.error('Groq proxy error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
