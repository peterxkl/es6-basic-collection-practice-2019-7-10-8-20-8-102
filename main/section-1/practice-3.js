'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let subcollectionB=objectB.value;
  let collection=collectionA.filter((num)=>{
    
    return subcollectionB.includes(num);
 });

  return collection;
}
