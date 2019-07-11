'use strict';

module.exports = function countSameElements(collection) {
  let array=[];
  let object={};
  collection.filter((num)=>{
    if(num.length>1){
      let number=parseInt(num.replace(/[^0-9]/ig,""));
      num=num.substring(0,1);
      object[num] = object[num] ? object[num] +number : number;
    }else{
      object[num]=(object[num]+1)||1;
    }
  });
  let x=Object.keys(object);
  x.filter((num)=>{
      let obj={
        name:num,
        summary:object[num]
      }
      array.push(obj);
  });
  return array;
}
