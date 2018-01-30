$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
  

  console.log("looking for something to show up");
// Adding event listeners from the form to create a new object
  $(document).on("submit", "#search-form", runsearch);
    
  function runsearch(event){
    var nameSearch = $("#name");
  var ageSearch = $("#age");
  var locSearch = $("loc");
  console.log("Looking for name" + nameSearch);
  };
});




  // function runsearch(event) {
  //   mp.findall({
  //     where: {
  //       age: ageSearch
      // }
    // });

