function handler() {
	console.log('hello');

	var win;
	var newWindow = function(btn){
		if(!win) {
			win = new Ext.Window({
			animateTarget : btn.el,
			html : 'My first vanilla Window',
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
		text : 'Open my Window',
		style : 'margin : 100px',
		handler : newWindow
	});

}


Ext.onReady(handler);