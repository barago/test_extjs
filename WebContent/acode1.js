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
	myDiv1.setSize(350, 350, {duration: 1, easing:'bounceOut'});
	myDiv1.createChild('Child from a String');
	myDiv1.createChild({
		tag : 'div',
		html : 'html from a config object '
	});
	myDiv1.createChild({
		tag : 'div',
		html: 'nested',
		style : 'border: 1px dashed; padding: 5px;',
		children: {
			tag : 'div',
			html: 'div inside div',
			style : 'color: #EE0000; border: 1px solid'
		}
	});
	myDiv1.insertFirst({
		tag: 'div',
		html : 'Inserted as node 0'
	});
	myDiv1.createChild({
		tag : 'div',
		id : 'removemelater',
		html : 'inserted in 4th place'},
		myDiv1.dom.childNodes[3]
	);
	


}

Ext.onReady(changeDiv);