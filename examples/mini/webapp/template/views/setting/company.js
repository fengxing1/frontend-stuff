$(document).ready(function() {
  $(".js-checkAccount").on("click", function() {
    alert("通过");

    return false;
  });

  $(".js-deleteAccount").on("click", function() {
    confirm("确定要删除此账号？");
    
    return false;
  });
});
