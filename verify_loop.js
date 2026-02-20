const https = require('https');

const url = 'https://www.shamelapp.com/version.json';

console.log(`Checking ${url} for redirect loop...`);

https.get(url, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Location: ${res.headers.location}`);
    console.log(`Server: ${res.headers.server}`);

    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location === url) {
        console.log('🚨 DETECTED REDIRECT LOOP TO SELF!');
    } else {
        console.log('✅ No self-redirect detected.');
    }
}).on('error', (e) => {
    console.error(e);
});
