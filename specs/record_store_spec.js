var assert = require("assert");
var Record = require("../record");
var Record_Store = require("../record_store");

describe("Record Store", function(){
   beforeEach("Setup", function(){
      record_store = new Record_Store("CodeClan Records", "Glasgow");
      record1 = new Record("Lenny Kravitz", "Fly Away", "Rock", 10);
      record2 = new Record("Daft Punk", "Harder Better Faster Stronger", "Electronic", 12);
      record3 = new Record("ACDC", "Rock and Roll Train", "Rock", 8);
      record_store.add(record1);
      record_store.add(record2);
      record_store.add(record3);
   });
   it("should have properties", function(){
      assert.strictEqual(record_store.name, "CodeClan Records");
   });
   it("should be able to hold records", function(){
      assert.strictEqual(record_store.inventory[0].artist, "Lenny Kravitz");
   });
   it("should have a balance", function(){
      assert.strictEqual(record_store.balance, 1000);
   })
});
