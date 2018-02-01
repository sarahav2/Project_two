$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
  
  console.log("looking for something to show up");

// Adding event listeners from the form to create a new object

  $("#done").on("click", function runsearch(event){
    //Quit reloading you sonnova
    event.preventDefault();
    console.log("Search has been clicked");
   //Get the data form the form
    var searchResults = {
      name: $("#mpName").val().trim(),
    };
    let name = searchResults.name;

      
      console.log("This is the name entered: " + searchResults.name);
        //request the data at the route
    $.get("api/results/" + name, function(data){
      //check to see if we have the data
      if(data){
        console.log(data["0"].NAME);
        var mpResult = data["0"];
        addTableData(mpResult);
      };
      
      function addTableData(mpResult){
        $('#data-mp').append(mpResult.MP_NUM);
        $('#data-name').append(mpResult.NAME);
        $('#data-sex').append(mpResult.SEX);
        $('#data-age').append(mpResult.AGE);
        $('#data-race').append(mpResult.RACE);
        $('#data-date').append(mpResult.DATE_SEEN);
        $('#data-loc').append(mpResult.LOC);
        console.log("This should be the name: " + mpResult.NAME);
      };
    });
       
  });

    // location.reload();
  
});
