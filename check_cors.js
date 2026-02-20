const https = require('https');

const url = 'https://www.shamelapp.com/version.json';

console.log(`Checking headers for: ${url}`);
https.get(url, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    const cors = res.headers['access-control-allow-origin'];
    console.log(`CORS HEADER: ${cors ? cors : 'MISSING'}`);
    console.log('ALL HEADERS:');
    console.log(JSON.stringify(res.headers, null, 2));
}).on('error', (e) => {
    console.error(e);
});
