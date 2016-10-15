(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		var wData = JSON.parse(weather)
		var name = wData.name
		var main = wData.weather[0].main
		var description = wData.weather[0].description 
		var temp = wData.main.temp
		var fTemp = Math.round(((temp-273.15)*9/5)+ 32)
		var cTemp = Math.round(temp-273.15)


template = `
			<div class="card text-center">
			<div class="card-section">
			<h5>${name}</h5>
			<h5>${main}</h5>
			<h5 id="ftemp">${fTemp} °F | ${cTemp} °C</h5>
			</div>
			<div class="card-divider">
			<h4 class="h4">Weather</h4>
			</div>
			</div>
			`
$('#weather').html(template)


	})
	
	
	
}())
