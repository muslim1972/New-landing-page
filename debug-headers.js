const https = require('https');

const url = 'https://shamelapp.com/version.json';

https.get(url, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', JSON.stringify(res.headers, null, 2));

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body:', data);
    });
}).on('error', (e) => {
    console.error(e);
});
