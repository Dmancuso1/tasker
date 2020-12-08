const supertest = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/) // from supertest lib
      .expect(200) // from supertest lib

    expect(response.body.message)
      .toEqual('🌴🌴 LIVE INVENTORY APP 🌴🌴')
  })
}) 