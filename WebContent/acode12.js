function handler() {
	console.log('hello');

var myCallback = function(btn, text){
	console.info('You pressed : ' + btn);
	Ext.MessageBox.prompt(title,msg,myCallback);
	if(text){
		console.info('You entered : ' + text);
	}
};

var msg = 'Your document was saved successfully';
var title = 'Save status :';
Ext.MessageBox.prompt(title,msg,myCallback);

Ext.Msg.show({
	title : 'Input required:',
	msg : 'Please tell us about yourself',
	width : 300,
	buttons : Ext.MessageBox.OKCANCEL,
	multiline : true,
	fn : myCallback,
	icon : Ext.MessageBox.INFO
});


}





Ext.onReady(handler);