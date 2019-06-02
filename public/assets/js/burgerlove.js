// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgerToggler").on("click", function(event) {
      var id = $(this).data("id");
      var devStatus = $(this).data("devoured");
      if (devStatus == false){
        devStatus = true;
      } else {
        devStatus = false;
      }
      var toggleTo = {
        devoured: devStatus
      };
  console.log("sending " + id + " to server as " +devStatus)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: toggleTo
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".burgerEntry").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      //only need name as rest is automatically set.
      var burgerBuilder = {
        burger_name: $("#burgertext").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: burgerBuilder
      }).then(
        function() {              
          location.reload();
        }
      );
    });
  });
  