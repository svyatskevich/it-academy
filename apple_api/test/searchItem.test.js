const axios = require("axios");
const { Validator } = require("jsonschema");
const getUsersJsonSchema = require("../testData/searchItem.v1.json");

const validator = new Validator();

describe("API Search Item", function () {
   let response;
   let endPoint = "/shop/searchresults/internalmvc";
   let params = {
      find: "airtag",
      src: "alp",
      tab: "explore",
   };
   let headers = {
      Accept: "*/*",
      host: "www.apple.com",
   };

   beforeAll(async () => {
      response = await axios.get(baseUrl + endPoint, { params, headers });
   });

   test("GET /searchresults/internalmvc should return status 200", async () => {
      expect(response.status).toEqual(200);
   });

   test("GET /searchresults/internalmvc should be valid jsonschema", async () => {
      const validationResult = await validator.validate(response.data,getUsersJsonSchema);
      expect(validationResult.valid).toEqual(true);
   });

   test("GET /searchresults/internalmvc should contain search text in 'body.searchTerm'", async () => {
      expect(response.data.body.searchTerm).toEqual("airtag");
   });
});
