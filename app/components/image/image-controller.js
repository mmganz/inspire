(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService();
	imgService.getImage(function(imageData){
		displayImage(imageData);
	})



function displayImage(imageData){
	var template = ''
	var imgData = JSON.parse(imageData)
	for (prop in imgData){
		template =`url("${imgData.url}")`
	$('body').css('background-image',template)
	}
	return;
}


}())
