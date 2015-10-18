$(document).ready(function () {
    // YOUR CODE HERE!
    // $("#xxx") for a Id
    // $(".xxx") for a Class

    // Before we load what's in LocalStorage
    // Then we show them on the page
	$("#list-items").html(localStorage.getItem("list-items"));



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

			// Now let's save it local storage

			// IF item = dance show instead a gif

			if (item == 'dance') {
				$("#list-items").append("<li><input class='checkbox' type='checkbox'/><img src='assets/dance.gif'/><a class='remove'>x</a><hr></li>");
			} else {
				$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			}
			//Now we can save the updated list in LocalStorage
			localStorage.setItem("list-items", $("#list-items").html());	
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

			// we also change the checked in the DOM, so we can save this value in LocalStorage 
			if ($(this).attr("checked")) {
				$(this).removeAttr("checked");
			} else {
				$(this).attr("checked","checked");
			}
			//Now we can save the updated list in LocalStorage
			localStorage.setItem("list-items", $("#list-items").html());	
		});


		$(document).on("click", ".remove", function(){
			//console.log("checkbox checked")
			// this is the checkbox as input. So it's parent is required to be checked
			// completed css will put a line-through as text-decoration

/* v1
			$(this).parent().remove(); // The remove will now be called in the call-back function
			localStorage.setItem("list-items", $("#list-items").html());
*/

			$(this).parent().slideUp("slow", function(){
// not required because already removed
//				$(this).parent().remove();
				//Now we can save the updated list in LocalStorage
				localStorage.setItem("list-items", $("#list-items").html());
// below command is to really remove the global localStorage
//				localStorage.removeItem("list-items");	
			});


		});

});
