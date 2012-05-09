function handler() {
	console.log('hello');
	
	new Ext.Viewport({
		layout : 'border',
		items : [
		         {
		        	 height : 75,
		        	 region : 'north',
		        	 title : 'The North title !'
		         },
		         {
		        	 width : 150,
		        	 region : 'west',
		        	 title : 'West panel title'
		         },
		         {
		        	 region : 'center',
		        	 title : 'center'
		         }
		         ]
		
		
	});
	
	
}


Ext.onReady(handler);