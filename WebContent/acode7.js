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

Ext.getCmp('myWindow').add({
	id:'addedPanel',
	title : 'appended panel',
	html : 'Hello there !'
});

Ext.getCmp('myWindow').add({
	id:'addedPanel2',
	title : 'appended panel2',
	html : 'Hello there !2'
});

Ext.getCmp('myWindow').insert(1,{
	id : 'insertedPanel',
	title : 'Inserted Panel',
	html : 'Hello inserted'
});

Ext.getCmp('myWindow').doLayout();

var panelToRemove = Ext.getCmp('addedPanel2');
Ext.getCmp('myWindow').remove(panelToRemove);

}


Ext.onReady(handler);