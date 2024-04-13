const axios = require("axios");
const { Validator } = require("jsonschema");
const getUsersJsonSchema = require("../testData/getUsers.v1.json");

const validator = new Validator();

describe("API GET tests", function () {
  let response;
  let endPoint = '/api/v1/Users';
  beforeAll(async () => {
    response = await axios.get(baseUrl + endPoint, {
        headers: {
          "accept": "text/plain; v=1.0"
        }
      });
  })

  test("GET /api/v1/Users should be status 200", async () => {
    expect(response.status).toEqual(200);
  })

  test("GET /api/v1/Users should be valid jsonschema", async () => {
    const validationResult = await validator.validate(response.data, getUsersJsonSchema);
    expect(validationResult.valid).toEqual(true);
  })
})
