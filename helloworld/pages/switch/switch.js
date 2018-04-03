var pageData = {};
for(var i=1;i<3;i++) {
  (function(index){
    pageData['change'+index] = function(e) {
      console.log('switch发生change事件，携带值为:',e.detail.value)
    }
  })(i)
}
Page(pageData)