const axios = require("axios");
const { Validator } = require("jsonschema");
const getUsersJsonSchema = require("../testData/getSubMenuBag.v1.json");

const validator = new Validator();

describe("API Sub Menu Bag", function () {
   let response;
   let endPoint = "/us/shop/bag/flyout";
   let params = {
      apikey: "SFX9YPYY9PPXCU9KH",
      l: "https%3A%2F%2Fwww.apple.com%2F",
   };
   let headers = {
      Accept: "*/*",
      host: "www.apple.com",
   };

   beforeAll(async () => {
      response = await axios.get(baseUrl + endPoint, { params, headers });
   });

   test("GET /shop/bag/flyout should return status 200", async () => {
      expect(response.status).toEqual(200);
   });

   test("GET /shop/bag/flyout should be valid jsonschema", async () => {
      const validationResult = await validator.validate(response.data, getUsersJsonSchema);
      expect(validationResult.valid).toEqual(true);
   });
});
