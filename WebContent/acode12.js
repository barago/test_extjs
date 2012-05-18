function handler() {
	console.log('hello');

var myCallback = function(btn, text){
	console.info('You pressed : ' + btn);
	if(text){
		console.info('You entered : ' + text)
	}
};

var msg = 'Your document was saved successfully';
var title = 'Save status :';
Ext.MessageBox.alert(title,msg,myCallback);


}





Ext.onReady(handler);