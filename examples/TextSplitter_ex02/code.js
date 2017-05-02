function code(){
  var sentence = new lib.sentence();
  exportRoot.addChild(sentence);
  
  var letter_count = 11;
  var delay_stagger = 0.1;
  
  //utils -- getting random number 
  function getX(){
    return getRandomInt(20,100);
  }
  function getY(){
    return getRandomInt(20,300);
  }
  
  //test function, animating each letter one way randomly, then reversing to start position, then starting over -- looping endlessly 
  start(10);
  function start(n){
    if(n == (letter_count-1)){
      var x = getX();
      var y = getY();
      for(var i = 0; i < letter_count; i++){
        TweenLite.to(i == 0 ? sentence.instance : sentence["instance_"+i], 1, {
          x:i == 0 ? sentence.instance.x+x : sentence["instance_"+i].x+x,
          y:i == 0 ? sentence.instance.y+y : sentence["instance_"+i].y+y,
          rotation:360,
          delay:(delay_stagger*i),
          onComplete: reverse,
          onCompleteParams: [i,x,y]
        });
      }
    }
  }
  
  function reverse(n,x,y){
    var x = x, y = y;
    if(n == (letter_count-1)){
       for(var i = 0; i < 11; i++){
        TweenLite.to(i == 0 ? sentence.instance : sentence["instance_"+i], 1, {
          x:i == 0 ? sentence.instance.x-x : sentence["instance_"+i].x-x,
          y:i == 0 ? sentence.instance.y-y : sentence["instance_"+i].y-y,
          rotation:0,
          delay:(delay_stagger*i),
          onComplete: start,
          onCompleteParams: [i]
        });
      }
    }
  }
  
}

