function handler() {
	console.log('hello');
	
	var myBtnHandler = function(btn){
		Ext.MessageBox.alert('You Clicked',btn.text);
	}
	
	var fileBtn = new Ext.Button({
		text : 'File',
		handler : myBtnHandler
	});
	
	var editBtn = new Ext.Button({
		text : 'Edit',
		handler : myBtnHandler
	});
	
	var tbFill = new Ext.Toolbar.Fill();
	
	var myTopToolbar = new Ext.Toolbar({
		items : [
		         fileBtn,
		         tbFill,
		         editBtn
		         ]
	});
	
	
	new Ext.Viewport({
		layout : 'border',
		items : [
		         {
		        	 height : 50,
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
		        	 title : 'center',
		        	 items : 
			        		 [
			        		  myTopToolbar
			        		  ]
		         }
		         ]
		
		
	});
	
}


Ext.onReady(handler);