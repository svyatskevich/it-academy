const axios = require("axios");
const { Validator } = require("jsonschema");
const postUsersJsonSchema = require("../testData/postUsers.v1.json");

const validator = new Validator();

describe("API POST tests", function () {
  let response;
  let endPoint = '/api/v1/Users';
  beforeAll(async () => {
    response = await axios.post(baseUrl + endPoint, {
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

  test("POST /api/v1/Users should be status 200", async () => {
    expect(response.status).toEqual(200);
  })

  test("POST /api/v1/Users should be valid jsonschema", async () => {
    const validationResult = await validator.validate(response.data, postUsersJsonSchema);
    expect(validationResult.valid).toEqual(true);
  })
})
