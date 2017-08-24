$(document).ready(function () {
    $("#add").click(function () {
        //$("#firstList").append("<li>First item</li>");
        var task = $("input[name=ListItem").val()
        $("ol").append("<li>" + task + "</li>");
    });

    //$("ol").sortable();
 });

//$(document).ready(function () {
//    $("#button").click(function () {
//            var task = $("input[name=ListItem").val()
//            $("ol").append("<li>" + task + "</li>");
//        });

    //$("input[name=ListItem]").keyup(function (event) {
    //    if (event.keyCode == 13) {
    //        $("#button").click();
    //    }
    //});
    //$("li").html("task")

    //$(document).on("dblclick", "li", function () {
    //    $(this).toggleClass("strike");
    //});

    //$("input").focus(function () {
    //    $(this).val("");
    //});
//});