export default async function handler(req, res) {
    // 1. Only allow POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    // 2. Get API Key from Environment Variables (Secrets)
    const API_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY) {
        console.error("Missing GROQ_API_KEY environment variable");
        return res.status(500).json({ error: 'Server configuration error: Key not found.' });
    }

    try {
        // 3. Proxy the request to Groq server-side
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
            return res.status(groqResponse.status).json({
                error: "Groq API Error",
                message: data.error?.message || "Failed to fetch from Groq"
            });
        }

        // 4. Return the successful response to the browser
        return res.status(200).json(data);
    } catch (err) {
        console.error('Secure Proxy Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
