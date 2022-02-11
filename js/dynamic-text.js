(function() {
    function printText( el ){

	let letterTimeout = 40

	let text = el.innerHTML
	let i = 1

	let print__fn = function(){

			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print__fn() // init
};

// init
let el = document.getElementById( 'dynamic-text' )
printText( el );
})()