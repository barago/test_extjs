function handler() {
	console.log('hello');

	var panel1 = {
		xtype : 'panel',
		title : 'Plain Panel',
		html : 'Panel with an xtype specified'
	};

	var panel2 = {
		title : 'Plain Panel 2',
		html : 'Panel with <b>no</b> xtype specified'
	};

	new Ext.Window({
		width		: 200,
		height		: 150,
		title		: 'Accordion window',
		layout 		: 'accordion',
		border		: false,
		layoutConfig : {
			animate : true
		},
		items 		: [
		      		   panel1,
		      		   panel2
		]
		}).show();
	
	
}


Ext.onReady(handler);