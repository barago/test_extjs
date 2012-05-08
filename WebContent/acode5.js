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

	var myObservable = new Ext.util.Observable();
	myObservable.addEvents('sayHello');
	myObservable.addEvents('sayGoodbye');
	
	myObservable.on('sayHello', function(){
		console.log('Hello stranger');
		});
	
	myObservable.fireEvent('sayHello');
	
	var sayGoodbyeFn = function(name, lastname){
		console.log('Goodbye '+ name + ' ' + lastname);
	}
	
	myObservable.on('sayGoodbye', sayGoodbyeFn);
	
	myObservable.fireEvent('sayGoodBye', 'John', 'Smith');
	
	myObservable.un('sayGoodbye', sayGoodbyeFn);

}

Ext.onReady(changeDiv);