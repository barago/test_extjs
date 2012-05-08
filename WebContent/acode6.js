function handler() {
	console.log('hello');

var panel1 = {
		xtype : 'panel',
		title : 'Panel',
		html : 'Panel with xtype specified'
}

var panel2 = {
		title : 'Panel 2',
		html : 'Panel WITHOUT xtype'
}

new Ext.Window({
	title : 'Window',
	width : 300, 
	height : 300, 
	layout : 'accordion',
	border : false,
	layoutConfig : {
		animate : true
	},
	items : [
	         panel1, 
	         panel2
	         ]
	
}).show();
	
	
}


Ext.onReady(handler);