const request = require('supertest');
const app = require('./app');

describe("Api rest test definitions", () => {
  test("Should respond with status 200", async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);

  })

  test("Should respond with 'Hello Everyone' message", async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe("Hello Everyone");
  })
})