function remove(){
	var myDiv1 = Ext.get('div1');
	var firstChild = myDiv1.down('div:last-child');
	firstChild.remove();
	
	
}

Ext.onReady(remove);