$(document).ready(function () {
    // YOUR CODE HERE!
    // $("#xxx") for a Id
    // $(".xxx") for a Class
    $(".add-items").submit(function(event){

	event.preventDefault(); // submit will submit the form and load again the page, this is why without this code, the Hi will only falsh and desiappear because a new page is loaded
//    	alert('cool');
//	console.log($("#todo-list-item").val());

// Now let's save the reference of our input value

	var item = $("#todo-list-item").val();

//	Var xx is local variable
//	xx = will be a global variable

    });
});
