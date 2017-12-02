var assert = require("assert");
var Record = require("../record");

describe("Record", function(){

   beforeEach("Setup", function(){
      record = new Record("Lenny Kravitz", "Fly Away", "Rock", 10);
   });

   it("should have properties", function(){
      assert.strictEqual(record.artist, "Lenny Kravitz");
      assert.strictEqual(record.title, "Fly Away");
      assert.strictEqual(record.genre, "Rock");
      assert.strictEqual(record.price, 10);
   });

});
