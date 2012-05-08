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
	
	var tpl = new Ext.Template("<div>Hello {0}.</div>");
	tpl.append(document.body,['Julien']);
	tpl.append(document.body,['Charlène']);
	
	var tpl2 = new Ext.Template('<div style="background-color : {color}; margin : 10px;">',
	'<b> Name : </b> {name}  </br>',
	'<b> Age : </b> {age}  </br>',
	'<b> Date of birth : </b> {dob}  </br>',
	'</div>'
	);
	
	tpl2.compile();
	
	tpl2.append(document.body, {
		color : 'yellow',
		name : 'Julien',
		age : '32',
		dob : '23/12/1979'
	});
	
	tpl2.append(document.body, {
		name : 'Charlène',
		age : '27',
		dob : '09/06/1985'
	});

	
	var tplData = [{
		color : "#FFE9E9",
		name : 'Naomi White',
		age : 25,
		dob : '03/17/84',
		cars : ['Jetta', 'Camry', 'S2000']
		},{
		color : "#E9E9FF",
		name : 'John Smith',
		age : 20,
		dob : '10/20/89',
		cars : ['Civic', 'Accord', 'Camry']
		}];
	
	var tpl3 = new Ext.XTemplate (
			'<tpl for=".">',
				'<div style="background-color : {color}; margin : 10px;">',
					'<b> Name : </b> {name}  </br>',
					'<b> Age : </b> {age}  </br>',
					'<b> Date of birth : </b> {dob}  </br>',
				'</div>',
			'</tpl>'
			
	);
	
	tpl3.compile();
	tpl3.append(document.body,tplData);
	

}

Ext.onReady(changeDiv);