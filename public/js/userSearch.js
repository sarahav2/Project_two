$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
  
  console.log("looking for something to show up");

// Adding event listeners from the form to create a new object

  $("#done").on("click", function runsearch(event){
    //Quit reloading you sonnova
    event.preventDefault();
    console.log("Search has been clicked");
   //Get the data form the form
    var nameTest = {
      name: $("#mpName").val().trim()
    };
    let name = nameTest.name;
      
      console.log("This is the name entered: " + nameTest.name);
        //request the data at the route
    $.get("api/results/" + name, function(data){
      //check to see if we have the data
      if(data){
        console.log(data);
        
      }
    })   
  });

    // location.reload();
  // function runsearch(event) {
  //   mp.findall({
  //     where: {
  //       age: ageSearch
      // }
    // });
});



