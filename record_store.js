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
   }
};


module.exports = Record_Store;
