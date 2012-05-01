function handler() {
	console.log('hello');

	var panel1 = {
		html		: 'I am panel 1',
		id			: 'panel1',
		frame 		: true,
		height		: 100
	};

	var panel2 = {
		html		: '<b>I am Panel 2</b>',
		id			: 'panel2',
		frame 		: true
	};

	var myWin = new Ext.Window({
		id			: 'myWin',
		height		: 400,
		width		: 400,
		items 		: [
		      		   panel1,
		      		   panel2
		]
		}).show();
	
	
}


Ext.onReady(handler);