const axios = require("axios");

describe("API DELETE tests", function () {
  let response;
  let endPointID = "/api/v1/Users/0";
  beforeAll(async () => {
    response = await axios.delete(baseUrl + endPointID, {
      headers: {
        "accept": "*/*"
      }
    });
  })

  test("DELETE /api/v1/Users/{id} should be status 200", async () => {
    expect(response.status).toEqual(200);
  })
})
