function QuoteService(){
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	var quoteService = this;
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	quoteService.getQuote =  function(callWhenDone){
        var q = localStorage.getItem('quote')
        if(q){
            q = JSON.parse(q);
            return callWhenDone(q)
        }

		$.get(apiUrl, function(res){
            localStorage.setItem('quote', JSON.stringify(res))
            callWhenDone(res);
        })
		}
	}
