
(function($){
	$(function(){



       
        if($(".tours-main").length){	
            $("body").addClass('tours-main-wrap');	
        }
   
            var header = new Headroom(document.querySelector(".main-header-section"), {
                tolerance: 5,
                offset: 205,
                classes: {
                    initial: "headroom",
                    pinned: "slideDown",
                    unpinned: "slideUp"
                }
            });

            header.init();
        
        
        
        
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop() + 92;

            $('.sidebar-wrap').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.sidebar-wrap ul li a.anchor-active').removeClass('anchor-active');
                    $('.sidebar-wrap ul li a').eq(i).addClass('anchor-active');
                }
            });
        }).scroll();

        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        
  $('.search-btn > a').click(function () {
            $(".main-header-section").toggleClass("searchbar-show");
        });
		
		
		
       
        //FAQs Accordion Function
        $(".tours-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > .tours-accordion-trigger").on("click touch", function(){
                $(".tours-accordion-item").removeClass("active")
                $(".tours-accordion-item .tours-accordion-content").slideUp();
                if($this.find(".tours-accordion-content:visible").length){
                    $(".tours-accordion-item").removeClass("active")
                    $(".tours-accordion-item .tours-accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".tours-accordion-item .tours-accordion-content").slideUp();
                    $this.find(" > .tours-accordion-content").slideDown();
                }
            })
        })
        
        
        
        $(".tours-accordion-content:first").slideDown();
        $(".tours-accordion-item:first").addClass('active');
        $(".high-lights-item").each(function(){
            var $this = $(this);
            $this.find(" > .tours-accordion-trigger").on("click touch", function(){
                $(".tours-accordion-item").removeClass("active")
                $(".tours-accordion-item .tours-accordion-content").slideUp();
                if($this.find(".tours-accordion-content:visible").length){
                    $(".tours-accordion-item").removeClass("active")
                    $(".tours-accordion-item .tours-accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".tours-accordion-item .tours-accordion-content").slideUp();
                    $this.find(" > .tours-accordion-content").slideDown();
                }
            })
        })

        $(".high-lights-item-thumb-wrap:first").slideDown();
        $(".high-lights-item:first").addClass('active');
        if($(window).width() < 768){ 
        $(".high-lights-item").each(function(){
            var $this = $(this);
            $this.find(".high-lights-item-title a").on("click touch", function(e){
                e.preventDefault();
                $(".high-lights-item").removeClass("active")
                $(".high-lights-item-thumb-wrap").slideUp();
                if($this.find(".high-lights-item-thumb-wrap:visible").length){
                    $(".high-lights-item").removeClass("active")
                    $(".high-lights-item-thumb-wrap").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".high-lights-item-thumb-wrap").slideUp();
                    $this.find(".high-lights-item-thumb-wrap").slideDown();
                }
            })
        })

        }
        
        /*
        if($(window).width()<=768){
            $(".accordion-nav").each(function(){
                var $this = $(this);
                $this.on("click touch", function(){
                    $(".accordion-nav").removeClass("active");
                    $(".accordion-content").slideUp();
                    if($this.parent().find(".accordion-content:visible").length){
                        $(".accordion-item").removeClass("active");
                        $(".accordion-content").slideUp();
                    }
                    else{
                        $this.addClass("active");
                        $this.parent().find(" > .accordion-content").slideDown();
                    }
                })
            }) 
           
        }*/
        
        // Phone nav click function
        $('#phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".main-nav").fadeToggle()
        });

   

        
	})// End ready function.
   
    
    
	

})(jQuery)

