const axios = require("axios");

describe("API PUT Negative tests", function () {
  let errorResponse;
  let invalidEndPointID = "/api/v1/Users/"; 

  beforeAll(async () => {
    try {
      errorResponse = await axios.put(baseUrl + invalidEndPointID, {
            "id": 2,
            "userName": 2,             // Invalid type
            "password": "string"
          }, {
            headers: {
              "accept": " */*",
              "Content-Type": "application/json; v=1.0"
            }
      });
    } catch (error) {
      errorResponse = error.response;
    }
  })

  test("PUT /api/v1/Users/{invalid id} should be status 405", async () => {
    expect(errorResponse.status).toEqual(405);
  })

  test("PUT /api/v1/Users/{invalid id} should have status text 'Method Not Allowed'", async () => {
    expect(errorResponse.statusText).toEqual("Method Not Allowed");
  })
})