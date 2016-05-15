//function getTempCallback( loaction, callback ){
//	callback( undefined, 78 );
//	callback( 'city not found' );
//}
//
//getTempCallback( 'philadelphia', function( err,temp ){
//	if( err ){
//		console.log('error', err);
//	}else{
//		console.log('success', temp);
//	}
//});
//
//function getTempPromise(location){
//	return new Promise( function( resolve, reject ){
//		setTimeout(function(){
//			resolve(79);
//			reject('City not found');
//		}, 1000);
//	});
//}
//
//getTempPromise('philadelphia').then(function( temp ){
//	console.log('promise success', temp);
//},function(err){
//	console.log('promise error', err);
//});


///Challenge Area
function addpromise( a,b ){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}else{
			reject('A & B need to be numbers');
		}
	});
}

addpromise(2,3).then(function( sum ){
	console.log('success', sum);
},function(err){
	console.log('error',err);
});


addpromise('andrew',9).then(function( sum ){
	console.log('this should not show up');
},function(err){
	console.log('this should appear', err);
});