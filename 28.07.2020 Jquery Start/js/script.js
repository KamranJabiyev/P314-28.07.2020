$(document).ready(function () {

    // $(".list li").click(function(){
    //     $(this).hide();
    // })

    // $(document).on("click",".list li",function(){
    //     $(this).hide();
    // })

    // let li=$("<li>Osman Tez Sagal</li>");
    // $(".list").append(li);

    // $(document).on("click","#btn-effect",function(){
    //     // $(".main").hide();
    //     // $(".main").show("slow");
    //     // $(".main").toggle();
    //     // $(this).css("color","red")
    //     // $(this).css({
    //     //     "color":"white",
    //     //     "background-color":"green",
    //     //     "padding":"20px",
    //     //     "border":"none",
    //     //     "border-radius":"10px"
    //     // })
    // })

    // $(document).on("click","#btn-effect",function(){
    //     // $(".main").show("slow").css("background-color","red")
    //     // $(".main").show(2000,function(){
    //     //     $(this).css("background-color","red")
    //     // })
    //     // $(".main").fadeToggle(2000)
    //     // $(".main").slideToggle("slow").css("border","3px solid red")
    //     $(".main").slideToggle(2000,function(){
    //         $(this).css("border","3px solid red");
    //     })
    // })

    // $(document).on("click","#btn-stop",function(){
    //     $(".main").stop();
    // })

    // $(document).on("click","#btn-effect",function(){
    //     $(".main").animate({
    //         backgroundColor: "#fff",
    //         left:"150px",
    //         top:"150px",
    //         width:"200px",
    //         height:"200px"
    //     })
    // })

    // console.log($(".text").text())
    // $(".text").html("Salam P314")
    // $("input").val("From code")

    // $(document).on("click","#delete",function(){
    //     // $(".list").empty();
    //     // $(".list").remove();
    //     $(".list li").remove(".test")
    // })

    // console.log($(".test").parentsUntil("html"))
    // console.log($(".list li").eq(3))
    let count = 1;
    $(document).on("click", "#add", function () {
        // $(".list").append($(`<li>${count}</li>`));
        // $(".list").prepend($(`<li>${count}</li>`));
        // $(".list").before($(`<li>${count}</li>`));
        $(".list").after($(`<li>${count}</li>`));
        count++;
    })
});

