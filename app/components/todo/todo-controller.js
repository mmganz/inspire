(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	var toDoService = new ToDoService(); 
    
var arr= toDoService.getToDos()
update();
	
$('form').on('submit', function(event){
    event.preventDefault();
    var entry = $('#addToDo').val()
    arr.push(entry)
    toDoService.saveToDos(arr);
    update()    
})

$('#list').on('click', '.alert', function(){
    var id = this.id
     arr.splice(id,1)
     toDoService.saveToDos(arr)
    update()
})
   


function update(){
    var template = ''
    $('#list').empty()
    // var toDo = toDoService.getToDos()
   for (var i = 0; i<arr.length; i++){
       template+= `
        <div class="row">
        <div class="small-1 columns">
        <button type="button" class="alert button tiny round" id= "${i}">X</button>
        </div>
        <div class="small-10 columns">
        <li id=${i}>${arr[i]}</li>
        </div>
        </div>`
    $('#list').html(template).prepend(`<div class="row"><div class="small-12 columns"><h6>Things to do: ${arr.length}</h6></div></div>`)
    $('form').trigger("reset");
   }
        return
}


update()



}())
