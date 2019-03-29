$(function() {
  // jQuery goes here!
  // $("#result").load("test.txt", function(response, status, xhr) {
  //   if (status == "error") {
  //     alert(xhr.statusText);
  //   }
  // });
  // $.get("test.txt", function(data) {
  //   $("#result").html(data);
  // });

  $.getJSON("users.json", function(users) {
    $.each(users, function(i, user) {
      $("ul#users").append($("<li></li>").html(user.email));
    });
  });

  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json"
  }).done(function(data) {
    // console.log(data);
    let myData = [];
    $.each(data, function(i, post) {
      myData.push("<h3>" + post.title + "</h3><p>" + post.body + "</p>");
    });
    // append to dom element
    $("#result").append(myData);
  });
});
