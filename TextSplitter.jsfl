//Split paragraph by letter 

var document = fl.getDocumentDOM();
var timeline = document.getTimeline();

document.breakApart();

//set array that will store tmp values for 'selection'
var tmp = new Array();
//get all elements 
var elements = timeline.layers[0].frames[0].elements;
//loop through 'selection' array, setting selection to only one element at 'i' and converting each to a symbol 
for(var i = 0; i < elements.length; i++){
	document.selectAll();
	tmp[i] = document.selection[i];
	document.selectNone();
	document.selection = [tmp[i]];
	item = document.convertToSymbol("movie clip", "letter_"+0+i, "top left");
	item.linkageExportForAS = true;
	//fl.trace(document.selection);
}

//select all symbol-fied letters, turn them into a grouped symbol
document.selectAll();
sentence = document.convertToSymbol("movie clip", "sentence", "top left");
sentence.linkageExportForAS = true;

