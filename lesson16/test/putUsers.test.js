const axios = require("axios");
const { Validator } = require("jsonschema");
const putUsersJsonSchema = require("../testData/putUsers.v1.json");

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