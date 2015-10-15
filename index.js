$(document).ready(function () {
    // YOUR CODE HERE!
    // $("#xxx") for a Id
    // $(".xxx") for a Class
    $(".add-items").submit(function(event){

//    	alert('cool');
	console.log("Hi")

	event.preventDefault(); // submit will submit the form and load again the page, this is why without this code, the Hi will only falsh and desiappear because a new page is loaded

    });
});
