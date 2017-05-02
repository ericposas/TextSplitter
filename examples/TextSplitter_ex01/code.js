//grabbing published objects from the library [Adobe Animate]

function customCode(){
  
  var sentence = new lib.sentence();
  exportRoot.addChild(sentence);
  
  for(var i = 0; i < sentence.numofinstances; i++){
    TweenLite.from(i == 0 ? sentence.instance : sentence["instance_"+i], 0.75, {delay:(i*0.05),x:0,y:0,rotation:-180,alpha:0,ease:Power1.easeOut});
  }
  
}
