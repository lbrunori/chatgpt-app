const https = require('https');

// When the button is clicked, execute the API request
const getChatGPTRequest = (question) => {
    const prompt = question;
    const apiKey = "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";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const data = JSON.stringify({
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
        n: 1
    });
    const options = {
        hostname: 'api.openai.com',
        path: '/v1/engines/text-davinci-003/completions',
        method: 'POST',
        headers: headers
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const response = JSON.parse(data);
            const paragraphQuestion = document.createElement('p');
            const paragraphResponse = document.createElement('p');
            paragraphQuestion.textContent = "You 👤: " + prompt;
            paragraphResponse.textContent = "IA 🤖: " + response.choices[0].text;
            document.querySelector('#responses-holder').appendChild(paragraphQuestion);
            document.querySelector('#responses-holder').appendChild(paragraphResponse);

        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(data);
    req.end();
};

module.exports = {
    getChatGPTRequest
}
