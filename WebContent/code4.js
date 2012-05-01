function handler(){
	var myDiv1 = Ext.get('myDiv');
	myDiv1.on('click', function (eneventObj, elRef){
		console.log('myDiv click handler, source element ID : ' + elRef.id);
	});
	Ext.get('myHref').on('click', function(eventObj, elRef) {
		eventObj.stopEvent();
		console.log('myHref click handler, source element ID : ' + elRef.id);
	});
	
	Ext.get('myDiv').on('contextmenu', function(eventObj, elRef){
		console.log('myDiv contextMenu handler, source element ID : ' + elRef.id);
	});
	
	Ext.get('myHref').on('contextmenu', function(eventObj, elRef){
		eventObj.stopEvent();
		console.log('myHref contextMenu Handler, source element ID : ' + elRef.id);
		
		if (!this.ctxMenu) {
			this.ctxMenu = new Ext.menu.Menu({
				items : [{
					text : "This is"
				},{
					text : "our custom"
				},{
					text : "context menu"
				}]
			});
		}
		this.ctxMenu.show(elRef);
	});
	
	
	
}

Ext.onReady(handler);