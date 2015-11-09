$(document).ready(function(){

//user to be able to input text and save it
$('form').submit(function(event){
	event.preventDefault();
	//user text should not be empty
	var newItem = $('#itemInput').val().trim();
	if (newItem !=""){
		//user text sould be added to list with delete button
		$('#list').append('<li><div class="box"></div><span class="item">' +newItem+ '</span><div class="delete"></div></li>');
	} else{
		alert('Type a new item');
	}
});

//delete button should remove item
$('#list').on('click', '.delete', function(){
	$(this).closest('li').remove();
});

//click should toggle check off item
$('#list').on('click','li', function(){
	$(this).toggleClass('checked');
	$(this).children('.box').toggleClass('checkedBox');
});

//sortable list items
$('#list').sortable({ axis: "y" });


//sortable list items

$('#list').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
$('#list').on('mouseleave', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});

});