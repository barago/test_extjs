function handler() {
	console.log('hello');

var myCallback = function(btn, text){
	console.info('You pressed : ' + btn);
	if(text){
		console.info('You entered : ' + text);
	}
};

Ext.MessageBox.wait("We're doing something...", 'Hold on...');


}





Ext.onReady(handler);