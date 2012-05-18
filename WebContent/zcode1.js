function handler() {
	console.log('hello');
	
	var myBtnHandler = function(btn){
		Ext.MessageBox.alert('You Clicked',btn.text);
	};
	
	var win;
	var newWindow = function(btn){
		if (!win){
			console.log(btn);
			win = new Ext.Window({
				animateTarget : btn.el,
				html : 'My first vanilla window',
				closeAction : 'hide',
				id : 'myWin',
				height : 200,
				width : 300,
				constrain : true
			});
		}
		win.show();	
	};
	
	var fileBtn = new Ext.Button({
		text : 'File',
		handler : myBtnHandler
	});
	
	var editBtn = new Ext.Button({
		text : 'Edit',
		handler : myBtnHandler
	});
	
	var windowBtn = new Ext.Button({
		text : 'Popup',
		handler : newWindow
	});
	
	var tbFill = new Ext.Toolbar.Fill();
	
	var myTopToolbar = new Ext.Toolbar({
		items : [
		         fileBtn,
		         windowBtn,
		         //tbFill,
		         editBtn
		         ]
	});
	
	var myBottomToolbar = [
	                       {
	                    	text : 'save',
	                    	handler : myBtnHandler
	                       },
	                       '-',
	                       {
	                    	text : 'cancel',
	                    	handler : myBtnHandler
	                       },
	                       '->',
	                       '<b>items open :1</b>'
	                       ];
	
	var myPanel = new Ext.Panel({
		height : '600',
		title : 'New Panel',
		collapsible : true,
		renderTo : Ext.getBody(),
		tbar : myTopToolbar,
		bbar : myBottomToolbar,
		html : 'Toolbar paneled',
		buttons : [{
			text : 'Bouton',
			handler : myBtnHandler
		}],
		tools : [{
			id : 'gear',
			handler : function (evt, toolEl, panel){
				var toolClassNames = toolEl.dom.className.split(' ');
				var toolClass = toolClassNames[1];
				var toolId = toolClass.split('-')[2];
				Ext.MessageBox.alert('You Clicked', 'Tool ' + toolId);
			}
		},
		{
			id : 'help',
			handler : function() {
				Ext.MessageBox.alert('You Clicked', 'The help tool');
			}
		}]
	});
	
	
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
		        	 title : 'center',
		        	 items : myPanel
		         }
		         ]
		
		
	});
	

	
}


Ext.onReady(handler);