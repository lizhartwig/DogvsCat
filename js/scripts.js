$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#meow").prepend("<li>Meow</li>");
    $("ul#bark").prepend("<li>Ruff Ruff </li>");
    $("ul#meow").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#bark").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#dog").click(function() {
    $("ul#meow").prepend("<li>Meow</li>");
    $("ul#bark").prepend("<li>Ruff Ruff </li>");
    $("ul#meow").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#bark").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
