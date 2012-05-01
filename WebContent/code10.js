function handler() {
	console.log('hello');

	var win;
	var newWindow = function(btn){
		if(!win) {
			win = new Ext.Window({
				height : 75,
				width : 200,
				modal : true,
				title : 'This is one rigid window',
				html : 'Try to move or resize me',
				plain : true,
				border : false,
				resizable : false,
				draggable : false,
				closable : false,
				buttonAlign : 'center',
				buttons : [{
						text : 'I give up!',
						handler : function(){
							win.close();
						}
				}]
			});
		}
		win.show();
	};

	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Open my Window',
		style : 'margin : 100px',
		handler : newWindow
	});

}


Ext.onReady(handler);