import * as endpoints from '../endpoints/getDataEndpoints';
import * as endpointsPost from '../endpoints/postDataEndpoints';
import * as data from '../data/postData';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
describe('Correct data type', () => {
    test('Checking correct data type', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.getDataSchema);
    });
});

describe('Post Data', () => {
    test('Get correct response with input data', async () => {
        let body = data.seedData;
        response = await endpointsPost.apiPostData(body);
        expect(response.status).toEqual(201);
        expect(response.body.title).toEqual('recommendation');
        expect(response.body.body).toEqual('motorcycle');
        expect(response.body.userId).toEqual(12);
    });
});