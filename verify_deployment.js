const https = require('https');

const urls = [
    'https://shamelapp.com/version.json',
    'https://www.shamelapp.com/version.json'
];

function checkUrl(url) {
    console.log(`\n🔍 Checking: ${url}`);
    const req = https.get(url, (res) => {
        console.log(`HTTP Status: ${res.statusCode}`);
        console.log('Headers:', JSON.stringify(res.headers, null, 2));

        if (res.statusCode >= 300 && res.statusCode < 400) {
            console.log(`➡️ Redirects to: ${res.headers.location}`);
        }

        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                try {
                    const json = JSON.parse(data);
                    console.log('✅ Content Verified via JSON parse.');
                    console.log('Version in file:', json.version);
                } catch (e) {
                    console.log('❌ Failed to parse JSON content.');
                    console.log('Preview:', data.substring(0, 100));
                }
            }
        });
    });

    req.on('error', (e) => {
        console.error(`❌ Error fetching ${url}:`, e.message);
    });
}

urls.forEach(checkUrl);
