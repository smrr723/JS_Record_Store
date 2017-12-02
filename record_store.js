var _ = require("lodash");
var Record_Store = function(name, city){
   this.name = name;
   this.city = city;
   this.inventory = [];
   this.balance = 1000;
};

Record_Store.prototype = {
   add: function(record){
      this.inventory.push(record);
   },
   addBalance: function(amount){
      this.balance += amount;
   },
   removeBalance: function(amount){
      this.balance -= amount;
   },
   displayProps: function(record){
      return record.title + ", by " + record.artist + " (" + record.genre + ") - £" + record.price;
   },
   listInventory: function(){
      return this.inventory;
   },
   sell: function(record){
      _.remove(this.inventory, function(n){
         return n === record;
      });
      this.balance += record.price;
   },
   financialStats: function(){
      var inventoryVal = _.sumBy(this.inventory, 'price');
      return "Hi! Jarvis, your Financial Advisor here! Currently you have a store balance of: " + this.balance + ", and an inventory of " + this.inventory.length + " items which total: £" + inventoryVal + "!  Keep it up!";
   },
   viewByGenre: function(genre){
      var genreArray = _.find(this.inventory, function(item){
         return item.genre === genre;
      });
      return genreArray;
   }
};


module.exports = Record_Store;
