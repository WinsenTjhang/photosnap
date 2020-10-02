$(".dropbtn").click(function () {
    $(".dropdown-content").toggleClass("show");
    $(".dropbtn").toggleClass("show");
    $(".closebtn").toggleClass("show");
})

$(document).click(function (event) {
    if (!event.target.matches('.dropbtn')) {
        if ($(".dropdown-content").hasClass('show')) {
            $(".dropdown-content").removeClass('show');
            $(".closebtn").toggleClass("show");
            $(".dropbtn").toggleClass("show");
        }
    }
})

// Toggle 
$("#price-checkbox").click(function () {
    if ($(this).checked == true) {
        $(".monthly").toggleClass('show')
        $(".yearly").toggleClass('show')
    } else {
        $(".monthly").toggleClass('show')
        $(".yearly").toggleClass('show')
    }
})

