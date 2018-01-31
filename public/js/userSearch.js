$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
  

  console.log("looking for something to show up");

// Adding event listeners from the form to create a new object


$(document).on("click", "#done", runsearch);


  function runsearch(){
    var nameSearch = "testing the name kim";
    var nameTest = $("#mpName");
  console.log("I have been clicked");
      console.log("This is the name entered: " + nameSearch);
      console.log("This is the name entered: " + nameTest);
      location.reload();
    }
});

  // function runsearch(event) {
  //   mp.findall({
  //     where: {
  //       age: ageSearch
      // }
    // });

