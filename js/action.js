$(document).ready(function(){

//user to be able to input text and save it
$('form').submit(function(event){
	event.preventDefault();
	//user text should not be empty
	var newItem = $('#itemInput').val().trim();
	if (newItem !=""){
		//user text sould be added to list with delete button
		$('#list').append('<li><div class="box"></div><span class="item">' +newItem+ '</span><div class="delete"></div></li>');
		$('form').trigger("reset");
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


//show delete "X" when mouseover list

$('#list').on('mouseenter', 'li', function(){
		$(this).find('.delete').show();
	});
$('#list').on('mouseleave', 'li', function(){
		$(this).find('.delete').hide();
	});

/*--- Clear the text box ---*/
function clearText() {
	$('#userGuess').val('');
}


});