'use strict';

module.exports = function countSameElements(collection) {
  let array=[];
  let object={};
  collection.filter((num)=>{
    object[num]=(object[num]+1)||1;
  });
  let x=Object.keys(object);
  x.filter((num)=>{
      let obj={
        key:num,
        count:object[num]
      }
      array.push(obj);
  });
  // for(let key in object){
  //   let obj={
  //     key:key,
  //     count:object[key]
  //   }
  //   array.push(obj);
  // }
  // object.filter((key)=>{
  //   let obj={
  //     key:key,
  //     count:object[key]
  //   }
  //   array.push(obj);
  // });
  return array;
}
