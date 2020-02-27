! function(a) {
    "use strict";



    // var b = a("header .wed_logo_animation").attr("data-rotate");
    // "" != b && a("header .wed_logo_animation").addClass("wed_logo_rotate_" + b),
    //     a("header .wed_logo_animation").lettering(),
    //     a("header .wed_logo_animation span").each(function() {
    //         var b = 0,
    //             c = 50,
    //             d = Math.floor(Math.random() * (c - b + 1) + b);

    //         a(this).css("transition-delay", "0." + d + "s")
    //     }),
    a("#bgndVideo").length > 0 && a("#bgndVideo").YTPlayer(),
        a(".wed_timer").appear(function() {
            var b = a(this);

            b.countTo({
                from: 0,
                to: b.html(),
                speed: 1300,
                refreshInterval: 60
            })
        });
    var d = a("header").height() - 1;

    a(window).load(function() {
        if (a("body").imagesLoaded(function() {
                a(".wed_page_loader div").fadeOut(),
                    a(".wed_page_loader").delay(200).fadeOut("slow")
            })) {


            a(window).stellar({ horizontalScrolling: !1, responsive: !0 })
        }
        a(".wed_countdown").each(function() {
            var b = a(this).attr("data-year"),
                c = a(this).attr("data-month"),
                d = a(this).attr("data-day");

            a(this).countdown({ until: new Date(b, c - 1, d) })
        });
        var c = a(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: !0,
            masonry: { columnWidth: ".grid-item" }
        });

        c.imagesLoaded().progress(function() {
            c.isotope("layout")
        }), a(window).resize(function() {
            c.isotope("layout")
        }), a(".masonry").masonry({ itemSelector: ".masonry-item" }), a(".filter-button-group").on("click", "a", function() {
            a(this).parents(".filter-button-group").find("a").removeClass("active"), a(this).addClass("active");
            var b = a(this).attr("data-filter");

            c.isotope({ filter: b })
        })
    })
}(jQuery);