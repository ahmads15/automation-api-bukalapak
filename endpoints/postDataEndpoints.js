import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.API_GET_DATA);

export const apiPostData =  (body) => api.post('/posts')
    .set('Content-type', 'application/json')
    .send(body);