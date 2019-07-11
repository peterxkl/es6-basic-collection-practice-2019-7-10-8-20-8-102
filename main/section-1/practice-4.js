'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let subcollectionA=collectionA.map((num)=>{
    return num.key;
  });
  let subcollectionB=objectB.value;
  let collection=subcollectionA.filter((num)=>{
    
    return subcollectionB.includes(num);
 });

  return collection;
}
