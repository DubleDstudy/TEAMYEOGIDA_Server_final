var productsearch=require('../config/database').productsearch;
var productinfo=require("../config/database").productinfo;

productsearch.belongsTo(productinfo,{targetKey:'productpid',foreignKey:'search_productpid'});

exports.info=(search_personpid)=>productsearch.findAll({
  attributes : {exclude : ['idx','search_personpid','search_productpid']},
  include:{
    model : productinfo,
    attribute : {exclude:["idx","producthit","productphone","checker","personpid"]}
  },
  where:{search_personpid:search_personpid}
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues;
  }
  return result;
});
