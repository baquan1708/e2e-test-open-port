const request = require("supertest");

describe("Health", () => {
  describe(`[GET]`, () => {
    it("should be healthy", () => {
      return request("http://localhost:3000")
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello World!");
        });
    });
  });
});
