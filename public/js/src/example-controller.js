var exampleController = (function() {
	var ret = {};

	function onDocumentReady() {
		console.log("Hello, world!");
	}
	
	function examplePublicFunction() {

	}

	$(onDocumentReady);

	ret = {
		examplePublicFunction: examplePublicFunction
	};

	return ret;
})(jQuery);