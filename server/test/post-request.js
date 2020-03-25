const axios = require('axios');
const https = require('https');


axios.get('http://localhost:3000/api/settings').then(({ data }) => console.log(data));
/*
axios.default.post('https://hw.shri.yandex/api/conf',
                    {   repositoryName: 'http://NEW-repo-name',
                        branchName: 'masterNew',
                        commandRun: 'npm run buildNew',
                        period: 0},
                    { headers: {
                        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg3MDg1NTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXBwYWxzZSIsInVybjpnaXRodWI6bmFtZSI6Ik5hdGFsaWEiLCJ1cm46Z2l0aHViOnVybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYXBwYWxzZSIsIm5iZiI6MTU4NDA5NTU5OSwiZXhwIjoxNTg2Njg3NTk5LCJpc3MiOiJTaHJpLUhvbWV3b3JrIiwiYXVkIjoiU2hyaS1Ib21ld29yayJ9.SWuHrFqQY1w0TH17lnyRo1XM4gE9ovyOLz9wmsDM2L8"
                    }})
    .then(({ data }) => console.log(data));
*/
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg3MDg1NTMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXBwYWxzZSIsInVybjpnaXRodWI6bmFtZSI6Ik5hdGFsaWEiLCJ1cm46Z2l0aHViOnVybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYXBwYWxzZSIsIm5iZiI6MTU4NDA5NTU5OSwiZXhwIjoxNTg2Njg3NTk5LCJpc3MiOiJTaHJpLUhvbWV3b3JrIiwiYXVkIjoiU2hyaS1Ib21ld29yayJ9.SWuHrFqQY1w0TH17lnyRo1XM4gE9ovyOLz9wmsDM2L8';
/*const api = axios.create({
    //baseURL: 'https://hw.shri.yandex/api/',
    //timeout: 1000,
    
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
});*/
/*
const instance = axios.create({
    baseURL: 'https://hw.shri.yandex',
    headers: {
        Authorization: "Bearer " + authToken
    },
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
});

instance.get('/api/conf')
.then(res => {
    console.log(res.data);
    console.log(res.data.data);
    if (res.data) {
        console.log('DATA IS NOT EMPTY');
    } else {
        console.log('DATA IS EMPTY');
    }
})
.catch(err => { 
    console.log(err.errno);
    console.log(err.code);
    console.log(err.response); // undefined
    console.log(err.isAxiosError); // true/false
});

/
instance.post('https://hw.shri.yandex/api/conf', {
    "repoName": "karrepo2",
    "buildCommand": "npm run build",
    "mainBranch": "master2",
    "period": 10
}).then(res => {
    console.log(res.data);
    if (res.data) {
        console.log('DATA IS NOT EMPTY');
    } else {
        console.log('DATA IS EMPTY');
    }
})
.catch(err => { 
    console.log(err.errno);
    console.log(err.code);
    console.log(err.response); // undefined
    console.log(err.isAxiosError); // true/false
});

api.get('https://hw.shri.yandex/api/conf')
.then(res => {
    console.log(res.data);
    if (res.data) {
        console.log('DATA IS NOT EMPTY');
    } else {
        console.log('DATA IS EMPTY');
    }
})
.catch(err => { 
    console.log(err.errno);
    console.log(err.code);
    console.log(err.response); // undefined
    console.log(err.isAxiosError); // true/false
});

*/












// curl -d '{"value":55}' -H "Content-Type: application/json" -X POST http://localhost:3000/counter