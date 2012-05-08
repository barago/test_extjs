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

	Ext.get('myDiv').on('click', function(eventObj, elRef) {
		console.log('myDiv click handler, source element id : ' + elRef.id);
	});

	Ext.get('myHref').on('click', function(eventObj, elRef) {
		eventObj.stopEvent();
		console.log('myHref click handler, source element id : ' + elRef.id);
	});

	Ext.get('myDiv').on('contextmenu', function(eventObj, elRef) {
		console.log('myDiv context menu handler, source el id : ' + elRef.id);
	});

	Ext.get('myHref').on('contextmenu', function(eventObj, elRef) {
		eventObj.stopEvent();
		console.log('myHref context menu handler, source el id : ' + elRef.id);

		if (!this.ctxMenu) {
			this.ctxMenu = new Ext.menu.Menu({
				items : [ {
					text : 'this is '
				}, {
					text : 'our first'
				}, {
					text : 'context menu'
				} ]
			});
		}
		this.ctxMenu.show(elRef);
	});

}

Ext.onReady(changeDiv);