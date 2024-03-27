const axios = require("axios");

describe("API GET Negative tests", function () {
  let errorResponse;
  let invalidEndPointID = "/api/v1/Users/55"; // Invalid ID

  beforeAll(async () => {
    try {
      errorResponse = await axios.get(baseUrl + invalidEndPointID, {
        headers: {
          "accept": "*/*"
        }
      });
    } catch (error) {
      errorResponse = error.response;
    }
  })

  test("GET /api/v1/Users/{invalid id} should be status 404", async () => {
    expect(errorResponse.status).toEqual(404);
  })

  test("GET /api/v1/Users/{invalid id} should have status text 'Not Found'", async () => {
    expect(errorResponse.statusText).toEqual("Not Found");
  })
})