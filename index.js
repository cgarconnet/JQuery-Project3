$(document).ready(function () {
    // YOUR CODE HERE!
    // $("#xxx") for a Id
    // $(".xxx") for a Class
    $(".add-items").submit(function(event){

		event.preventDefault(); // submit will submit the form and load again the page, this is why without this code, the Hi will only falsh and desiappear because a new page is loaded
	//    	alert('cool');
	//	console.log($("#todo-list-item").val());

	// Now let's save the reference of our input value

	//	Var xx is local variable
	//	xx = will be a global variable
		var item = $("#todo-list-item").val();


		if (item) {
		// Manipulating DOM Elements

			$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			$("#todo-list-item").val("");
		}

    });
		// Listenning for Change is much safer than listening for click

// This checkbox do not exist yet, because added later
		// $(".checkbox").change(function(){
		// 		console.log("checkbox checked")
		// })
// we target the dynamically created checkbox
		$(document).on("change", ".checkbox", function(){
			//console.log("checkbox checked")
			// this is the checkbox as input. So it's parent is required to be checked
			// completed css will put a line-through as text-decoration
			$(this).parent().toggleClass("completed");
		});


		$(document).on("click", ".remove", function(){
			//console.log("checkbox checked")
			// this is the checkbox as input. So it's parent is required to be checked
			// completed css will put a line-through as text-decoration
			$(this).parent().remove();
		});


});
