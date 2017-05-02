# Text Splitter -- Adobe Animate CC Command

  Save "TextSplitter.jsfl" in "/Users/[USER]/Library/Application Support/Adobe/Animate CC 2015.2/en_US/Configuration/Commands/" or wherever your Adobe Animate commands are configured to be saved. After doing so, "TextSplitter" will show up in the Adobe Animate "Commands" drop-down selection.
  
  To Use:
  Create a block of text or paragraph. Select the created text. Run "TextSplitter" via the Commands drop down. Your Adobe Animate text is now split by letter, with each letter being its own SymbolInstance. You can access these via Javascript, even outside of the Adobe Animate IDE, like so:
  
  ```javascript
  
  function customCode(){
    //TextSplitter names the grouping Symbol "sentence"; All individual letters can be accessed via: sentence.instance_1, and so on
    var sentence = new lib.sentence();
    exportRoot.addChild(sentence);
    
    //the first instance is called "instance," all subsequent instances(letters) are numbered 
    for(var i = 0; i < sentence.numofinstances; i++){
      TweenLite.from(i == 0 ? sentence.instance : sentence["instance_"+i], 0.75, {delay: (i*0.05),x:0,y:0,rotation:-180,alpha:0,ease:Power1.easeOut});
    }
  
  }
  
  ```
  
  