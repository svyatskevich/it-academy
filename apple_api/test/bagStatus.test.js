const axios = require("axios");
const { Validator } = require("jsonschema");
const getUsersJsonSchema = require("../testData/bagStatus.v1.json");

const validator = new Validator();

describe("API Bag Status", function () {
   let response;
   let endPoint = "/shop/bag/status";
   let params = {
      apikey: "SJHJUH4YFCTTPD4F4",
   };
   let headers = {
      Accept: "*/*",
      host: "www.apple.com",
   };

   beforeAll(async () => {
      response = await axios.get(baseUrl + endPoint, { params, headers });
   });

   test("GET /shop/bag/status should return status 200", async () => {
      expect(response.status).toEqual(200);
   });

   test("GET /shop/bag/status should be valid jsonschema", async () => {
      const validationResult = await validator.validate(response.data,getUsersJsonSchema);
      expect(validationResult.valid).toEqual(true);
   });

   test(`GET /shop/bag/status should contain 0 items`, async () => {
      expect(response.data.items).toEqual(0);
   });
});
