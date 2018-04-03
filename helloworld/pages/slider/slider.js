var pageData={};
for(var i=1;i<4;i++){
  (function(index){
    pageData['change'+index]=function(e){
      console.log('slider'+'index'+'发生change事件，携带值：',e.detail.value);
    }
  })(i);
};
Page(pageData);