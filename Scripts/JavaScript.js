$(document).ready(function () {
    $("#add1").click(function () {
        var task = $("input[name=firstListItem]").val();
        $("#firstList").append("<li>" + task + "</li>");
         $("input[name=firstListItem]").val("");
    });
    $("#add2").click(function () {
        var task2 = $("input[name=thornListItem]").val();
        $("#thornList").append("<li>" + task2 + "</li>");
        $("input[name=thornListItem]").val("");
    });

    $("input[name=firstListItem]").keyup(function (event) {
        if (event.keyCode === 13) {
            var task = $("input[name=firstListItem]").val();
            $("#firstList").append("<li>" + task + "</li>");
        }
    });

    $("input[name=thornListItem]").keyup(function (event) {
        if (event.keyCode === 13) {
            var task2 = $("input[name=thornListItem]").val();
            $("#thornList").append("<li>" + task2 + "</li>");
            $("input[name=firstListItem]").val("");
        }
    });
    $(document).on("dblclick", "li", function () {
        $(this).toggleClass("strike");
    });
 });

   //$(function () {
    //    $("ol").sortable();
    //});

    //$("input").focus(function () {
    //    $(this).val("");
    //});
//});