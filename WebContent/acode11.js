function handler() {
	console.log('hello');


	var win = new Ext.Window({
		height : 75,
		width : 200,
		modal : true,
		title : 'Rigid window',
		html : 'impossible de bouger cette fenetre',
		plain : true,
		border : false,
		resizable : false,
		draggable : false,
		closable : false,
		buttonAlign : 'center',
		buttons : [{
			text : 'close',
			handler : function(){
				win.close();
			}
		}]
	});

	win.show();	
}





Ext.onReady(handler);