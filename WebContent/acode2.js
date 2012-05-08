function changeDiv() {
	var win = new Ext.Window({
		id : 'myWindow',
		title : 'First Extjs window',
		width : 300,
		height : 150,
		layout : 'fit',
		autoLoad : {
			url : 'sayHi.html',
			scripts : true
		}

	});
	win.show();
	
	var myDiv1 = Ext.get('div1');
	var firstChild = myDiv1.down('div:first-child');
	firstChild.remove();
	Ext.get('child4').remove();
	
	Ext.getBody().load({
		url: 'htmlFragment.html',
		scripts : true
	})

}

Ext.onReady(changeDiv);