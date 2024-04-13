const axios = require("axios");
const { Validator } = require("jsonschema");
const getUsersIDJsonSchema = require("../testData/users.v1.json");

const validator = new Validator();

describe("API GET tests", function () {
  let response;
  let endPointID = '/api/v1/Users/3';
  beforeAll(async () => {
    response = await axios.get(baseUrl + endPointID, {
        headers: {
          "accept": "*/*"
        }
      });
  })

  test("GET /api/v1/Users/{id} should be status 200", async () => {
    expect(response.status).toEqual(200);
  })

  test("GET /api/v1/Users/{id} should be valid jsonschema", async () => {
    const validationResult = await validator.validate(response.data, getUsersIDJsonSchema);
    expect(validationResult.valid).toEqual(true);
  })
})

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