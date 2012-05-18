function handler() {
	console.log('hello');
	
	var win;
	var newWindow = function(btn){
		if (!win){
			console.log(btn);
			win = new Ext.Window({
				animateTarget : btn.el,
				html : 'My first vanilla window',
				closeAction : 'hide',
				id : 'myWin',
				height : 200,
				width : 300,
				constrain : true
			});
		}
		win.show();	
	};
	
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'New Window',
		style : 'margin : 100px',
		handler : newWindow
		
	});
}


Ext.onReady(handler);