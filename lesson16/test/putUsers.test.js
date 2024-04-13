const axios = require("axios");
const { Validator } = require("jsonschema");
const putUsersJsonSchema = require("../testData/users.v1.json");

const validator = new Validator();

describe("API PUT tests", function () {
  let response;
  let endPointID = '/api/v1/Users/0';
  beforeAll(async () => {
    response = await axios.put(baseUrl + endPointID, {
        "id": 0,
        "userName": "string",
        "password": "string"
      }, {
        headers: {
          "accept": " */*",
          "Content-Type": "application/json; v=1.0"
        }
      });
  })

  test("PUT /api/v1/Users/{id} should be status 200", async () => {
    expect(response.status).toEqual(200);
  })

  test("PUT /api/v1/Users/{id} should be valid jsonschema", async () => {
    const validationResult = await validator.validate(response.data, putUsersJsonSchema);
    expect(validationResult.valid).toEqual(true);
  })
})

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