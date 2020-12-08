const supertest = require('supertest');

const app = require('../../app');


describe('GET /api/v1/countries', () => {
  it('should respond with an array of countries', async () => {
    const response = await supertest(app)
    .get('/api/v1/countries')
    .expect('Content-Type', /json/) 
    .expect(200)

    expect(response.body).toEqual([])

  });
});