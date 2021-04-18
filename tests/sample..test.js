const request = require("supertest");
const app = require("./server");
describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});
describe("GET / ", () => {
  test("It should respond with an array of meetings", async () => {
    const response = await request(app).get("/api/v1/meetings");
    expect(response.statusCode).toBe(200);
  });
});
