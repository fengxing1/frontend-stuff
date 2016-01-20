$(document).ready(function() {
  $(".js-editPhone").on("click", function() {
    $(".EditableArea").addClass("is-editing");

    return false;
  });

  $(".js-cancelEditing").on("click", function() {
    $(".EditableArea").removeClass("is-editing");
    $(".EditableArea-row--edit input").val("");

    return false;
  });

  $(".js-submitPhone").on("submit", function() {
    console.log($(":text", $(this)).val());

    return false;
  });
});
