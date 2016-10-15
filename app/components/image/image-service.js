function ImageService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);
	imgService = this

	imgService.getImage = function (callWhenDone) {
        var i = localStorage.getItem('image');
        if(i){
            i = JSON.parse(i);
            return callWhenDone(i)
        }
		$.get(apiUrl, function (res){
            localStorage.setItem('image', JSON.stringify(res))
            callWhenDone(res);
        })
			
	}
}

