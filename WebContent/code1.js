function changeDiv() {
	

	var myDiv1 = Ext.get('div1');
	myDiv1.createChild({
		tag : 'div',
		html : 'Child from a config Object'
	});
	
	myDiv1.createChild({
		tag		: 'div',
		id		: 'nestedDiv',
		style	: 'border: 1px dashed; padding: 5px;',
		children : {
				tag		: 'div',
				html	: '... a nested div',
				style	: 'color: #EE0000; border: 1px solid'
		}
	});
	myDiv1.insertFirst({
		tag		:'div',
		html	:'Child inserted as node 0 of myDiv1'
	});
	myDiv1.createChild({
		tag		:'div',
		id		:'removeMeLater',
		html	:'Child inserted as node 2 of myDiv1'
	}, myDiv1.dom.childNodes[3]);

};

Ext.onReady(changeDiv);