$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
    
        var newState = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newState
        }).then(
          function () {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".burgerInput").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#newBurger").val().trim()
    };
    
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("New Burger Created");
        location.reload();
    })
    })

})
