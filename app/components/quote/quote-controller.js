(function(){
	
	//Get your QuoteService

	var quoteService = new QuoteService();
	quoteService.getQuote(function(quoteData){
		displayQuote(quoteData)
	})

	function displayQuote(quoteData){
		var template = ''
		var qData = JSON.parse(quoteData)
		for (prop in qData){
			template = `
			<div class="quoteSect">
			<div id="quotewa">
			<p class="text-center">${qData.quote}</p>
			<span id="author" class="text-center">${qData.author}</span>
			</div>
			</div>
			`
			$('#quote').html(template)
		}
		return;
	}
	
}())
