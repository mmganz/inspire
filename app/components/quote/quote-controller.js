(function(){
	
	//Get your QuoteService

	var quoteService = new QuoteService();
	quoteService.getQuote(function(quoteData){
		displayQuote(quoteData)
	})

	function displayQuote(quoteData){
		var template = ''
		var qData = JSON.parse(quoteData)
			template = `
			<div class="quoteSect">
			<div id="quotewa">
			<h5 class="text-center"><em>${qData.quote}</em></h5>
			<span id="author" class="text-center">${qData.author}</span>
			</div>
			</div>
			`
			$('#quote').html(template)
	}
	
}())
