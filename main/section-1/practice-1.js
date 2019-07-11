'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   
  let collection=collectionA.filter((num)=>{
    
    return collectionB.includes(num);
 });

  return collection;
}
