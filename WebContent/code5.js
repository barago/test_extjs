function handler(){
	console.log('hello');
	
	var myObservable = new Ext.util.Observable();
	
	myObservable.addEvents('sayHello', 'sayGoodbye');
	
	myObservable.on('sayHello', function() {
		console.log('Hello stranger');
	});
	myObservable .on('sayGoodbye', sayGoodByeFn);
	
	myObservable.fireEvent('sayHello');
	myObservable.fireEvent('sayGoodbye', 'Julien', 'Cokelaere');
	
}


var sayGoodByeFn = function(firstName,lastName) {
	console.log('Goodbye ' + firstName + ' ' + lastName + '!');
};



Ext.onReady(handler);