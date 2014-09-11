'use strict';

function Priority(){

}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorities');}
});

Priority.create = function(obj, cb){
  Priority.collection.save(obj, cb);
};

Priority.all = function(cb){
  Priority.collection.find().toArray(cb);
};

module.exports = Priority;
