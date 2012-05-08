function handler() {
	console.log('hello');

var panel1 = {
		html : 'Panel 1',
		id : 'panel1',
		frame : true,
		height : 100
}

var panel2 = {
		html : 'Panel 2',
		id : 'panel2',
		frame : true
}

var myWin = new Ext.Window({
	id : 'myWindow',
	height : 400,
	width : 400,
	
	items : [
	         panel1,
	         panel2
	         ]
});

myWin.show();
	
}


Ext.onReady(handler);