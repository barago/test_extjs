function changeDiv() {
	var win = new Ext.Window({
		id : 'myWindow',
		title : 'First Extjs window',
		width : 300,
		height : 150,
		layout : 'fit',
		autoload : {
			url : 'sayHi.html',
			scripts : true
		}

	});
	win.show();


}

Ext.onReady(changeDiv);