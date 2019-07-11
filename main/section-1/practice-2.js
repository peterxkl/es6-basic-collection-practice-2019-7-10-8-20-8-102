'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let subcollectionB=collectionB[0];
  let collection=collectionA.filter((num)=>{
    
    return subcollectionB.includes(num);
 });

  return collection;
}
