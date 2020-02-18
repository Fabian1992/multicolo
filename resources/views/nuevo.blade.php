<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} | {{ ucfirst($title ?? '') }}</title>

	<!-- Global stylesheets -->
	
	<link href="{{ asset('admin/font/fontawesome-free-5.9.0-web/css/all.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/css/wedding_library.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('client/css/wedding_style.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('client/css/min.css') }}" rel="stylesheet" type="text/css">
   

	<!-- /global stylesheets -->

	<!-- Core JS files -->
	 <script src="{{ asset('admin/js/jquery.min.js') }}"></script> 
{{--     
    <script src="{{ asset('client/js/jquery-1.12.4.min.js') }}"></script> --}}
    
	<script src="{{ asset('admin/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('admin/js/blockui.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_library.js') }}"></script>
    <script src="{{ asset('client/js/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('client/js/jquery.mb.YTPlayer.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_script.js') }}"></script>
	<!-- /core JS files -->

	@stack('linksCabeza')
	{{--  <script>
		Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
			sound: false,
			continueDelayOnInactiveTab: false,
			position:"bottom right",
			size:"mini"
		});

		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});

	
	</script>  --}}

</head>
    <body>
       
        <!-- Video -->
    <div id="bgndVideo" class="player" data-property="{videoURL:'http://youtu.be/hGy-Mue6RRM',containment:'body', autoPlay:true, mute:false, startAt:0, opacity:1,}"></div>

    <!-- Music Bottom Container -->
    <div class="wed_music_content">
        <div class="wed_music_container">
            <i class="ti ti-music"></i>
        </div>
    </div>
    <!-- Music Bottom Container End -->

    {{--  <!-- Soundcloud -->
    <div class="wed_iframe">
        <!-- over -->
        <div class="wed_over wed_music_over" data-color="#000" data-opacity="0.5"></div>
        <iframe src="https://www.youtube.com/watch?v=kbqSGGUmZDI;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
    </div>  --}}


     <!-- Preloader -->
    <div class="wed_page_loader">
        <div class="wed_story_content">
            <div class="wed_heart_container_row_4">
                <img class="wed_fourth_heart_1" src="https://mafer.soysoftware.com/images/small_people/heart_1.png" alt="">
                <img class="wed_fourth_heart_2" src="https://mafer.soysoftware.com/images/small_people/heart_2.png" alt="">
                <img class="wed_fourth_heart_3" src="https://mafer.soysoftware.com/images/small_people/heart_3.png" alt="">
            </div>
            <div class="wed_story_small_img">
                <img src="https://mafer.soysoftware.com/images/small_people/small_couple.png" alt="">
            </div>

        </div>
    </div>
    <!-- Preloader End--> 
    <div class="wed_flowers">
        foo
        <div class="wed_fl_1 wed_fl skrollable skrollable-between" data-0="top:260px" data-500="top:1000px" data-1200="top:1500px" data-3000="top:3000px" data-4500="top:4000px" data-6500="top:6000px" data-8000="top:8000px" style="top: 260px;">
            <img src="{{ asset('client/images/petals/blue_flower/1.png') }}" alt="">
        </div>
        <div class="wed_fl_2 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:800px" data-1200="top:1200px" data-3000="top:2600px" data-4500="top:4900px" data-6500="top:6900px" data-8000="top:8900px" style="top: 210px;">
            <img src="{{ asset('client/images/petals/blue_flower/16.png') }}" alt="">
        </div>
        <div class="wed_fl_3 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:1000px" data-1200="top:1400px" data-3000="top:3600px" data-4500="top:4500px" data-6500="top:7000px" data-8000="top:6700px" style="top: 210px;">
            <img src="{{ asset('client/images/petals/blue_flower/1_blur.png') }}" alt="">
        </div>
        <div class="wed_fl_4 wed_fl skrollable skrollable-between" data-0="top:650px" data-500="top:600px" data-1200="top:600px" data-3000="top:3900px" data-4500="top:4900px" data-6500="top:6600px" data-8000="top:8600px" style="top: 650px;">
            <img src="{{ asset('client/images/petals/blue_flower/1.png') }}" alt="">
        </div>
        <div class="wed_fl_5 wed_fl skrollable skrollable-between" data-0="top:50px" data-500="top:1100px" data-1200="top:1600px" data-3000="top:3200px" data-4500="top:4100px" data-6500="top:6100px" data-8000="top:9100px" style="top: 50px;">
            <img src="{{ asset('client/images/petals/blue_flower/2_blur.png') }}" alt="">
        </div>
        <div class="wed_fl_6 wed_fl skrollable skrollable-between" data-0="top:490px" data-500="top:520px" data-1200="top:1220px" data-3000="top:3220px" data-4500="top:4130px" data-6500="top:6130px" data-8000="top:9150px" style="top: 490px;">
            <img src="{{ asset('client/images/petals/blue_flower/2_blur.png') }}" alt="">
        </div>
        <div class="wed_fl_7 wed_fl skrollable skrollable-between" data-0="top:300px" data-500="top:720px" data-1200="top:1200px" data-3000="top:3000px" data-4500="top:5000px" data-6500="top:6400px" data-8000="top:7000px" style="top: 270px;">
            <img src="{{ asset('client/images/petals/blue_flower/4_blur.png') }}" alt="">
        </div>

        <div class="wed_fl_8 wed_fl skrollable skrollable-between" data-0="top:490px" data-500="top:520px" data-1200="top:1220px" data-3000="top:3220px" data-4500="top:4130px" data-6500="top:6130px" data-8000="top:9150px" style="top: 490px;">
            <img src="{{ asset('client/images/petals/blue_flower/111.png') }}" alt="">
        </div>
        <div class="wed_fl_11 wed_fl skrollable skrollable-between" data-0="top:260px" data-500="top:1000px" data-1200="top:1500px" data-3000="top:3000px" data-4500="top:4000px" data-6500="top:6000px" data-8000="top:8000px" style="top: 260px;">
            <img src="{{ asset('client/images/petals/blue_flower/11.png') }}" alt="">
        </div>
        <div class="wed_fl_9 wed_fl skrollable skrollable-between" data-0="top:110px" data-500="top:300px" data-1200="top:1200px" data-3000="top:3050px" data-4500="top:4100px" data-6500="top:6800px" data-8000="top:8700px" style="top: 130px;">
            <img src="{{ asset('client/images/petals/blue_flower/9.png') }}" alt="">
        </div>
        <div class="wed_fl_12 wed_fl skrollable skrollable-between" data-0="top:360px" data-500="top:730px" data-1200="top:1200px" data-3000="top:2800px" data-4500="top:4500px" data-6500="top:6200px" data-8000="top:6500px" style="top: 360px;">
            <img src="{{ asset('client/images/petals/blue_flower/16.png') }}" alt="">
        </div>
        <div class="wed_fl_10 wed_fl skrollable skrollable-between" data-0="top:650px" data-500="top:600px" data-1200="top:600px" data-3000="top:3900px" data-4500="top:4900px" data-6500="top:6600px" data-8000="top:8600px" style="top: 650px;">
            <img src="{{ asset('client/images/petals/blue_flower/3_blur.png') }}" alt="">
        </div>

        <div class="wed_fl_13 wed_fl skrollable skrollable-between" data-0="top:360px" data-500="top:730px" data-1200="top:1200px" data-3000="top:2800px" data-4500="top:4500px" data-6500="top:6200px" data-8000="top:6500px" style="top: 360px;">
            <img src="{{ asset('client/images/petals/blue_flower/111.png') }}" alt="">
        </div>
        <div class="wed_fl_14 wed_fl skrollable skrollable-between" data-0="top:300px" data-500="top:720px" data-1200="top:1200px" data-3000="top:3000px" data-4500="top:5000px" data-6500="top:6400px" data-8000="top:7000px" style="top: 270px;">
            <img src="{{ asset('client/images/petals/blue_flower/4_blur.png') }}" alt="">
        </div>
        <div class="wed_fl_15 wed_fl skrollable skrollable-between" data-0="top:140px" data-500="top:1000px" data-1200="top:1200px" data-3000="top:3800px" data-4500="top:4900px" data-6500="top:6100px" data-8000="top:7200px" style="top: 250px;">
            <img src="{{ asset('client/images/petals/blue_flower/15.png') }}" alt="">
        </div>
        <div class="wed_fl_16 wed_fl skrollable skrollable-between" data-0="top:110px" data-500="top:300px" data-1200="top:1200px" data-3000="top:3050px" data-4500="top:4100px" data-6500="top:6800px" data-8000="top:8700px" style="top: 130px;">
            <img src="{{ asset('client/images/petals/blue_flower/16.png') }}" alt="">
        </div>
        <div class="wed_fl_17 wed_fl skrollable skrollable-between" data-0="top:140px" data-500="top:1000px" data-1200="top:1200px" data-3000="top:3800px" data-4500="top:4900px" data-6500="top:6100px" data-8000="top:7200px" style="top: 250px;">
            <img src="{{ asset('client/images/petals/blue_flower/17.png') }}" alt="">
        </div>
        <div class="wed_fl_18 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:800px" data-1200="top:1200px" data-3000="top:2600px" data-4500="top:4900px" data-6500="top:6900px" data-8000="top:8900px" style="top: 210px;">
            <img src="{{ asset('client/images/petals/blue_flower/18.png') }}" alt="">
        </div>
        <div class="wed_fl_19 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:1000px" data-1200="top:1400px" data-3000="top:3600px" data-4500="top:4500px" data-6500="top:7000px" data-8000="top:6700px" style="top: 210px;">
            <img src="{{ asset('client/images/petals/blue_flower/1_blur.png') }}" alt="">
        </div>
        <div class="wed_fl_20 wed_fl skrollable skrollable-between" data-0="top:50px" data-500="top:1100px" data-1200="top:1600px" data-3000="top:3200px" data-4500="top:4100px" data-6500="top:6100px" data-8000="top:9100px" style="top: 50px;">
            <img src="{{ asset('client/images/petals/blue_flower/2_blur.png') }}" alt="">
        </div>

    </div>
        
    <!-- Page -->
    <div class="wed_page" id="wed_page">

        <div class="page-wraper">

            <!-- header -->
            <header class="site-header header-transparent mo-left">
                <div class="top-bar">
                    <div class="container">
                        <div class="row d-flex justify-content-between">
                            <div class="dlab-topbar-left">
                                <ul>
                                    <li><i class="flaticon-phone-call m-r5"></i> 001 1234 6789</li>
                                    <li><i class="ti-location-pin m-r5"></i> 6701 Democracy Blvd, Suite 300, USA</li>
                                </ul>
                            </div>
                            <div class="dlab-topbar-right">
                                <ul>
                                    <li><i class="ti-skype m-r5"></i> Agency.software</li>
                                    <li><i class="ti-email m-r5"></i> info@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main header -->
                <div class="sticky-header main-bar-wraper navbar-expand-lg">
                    <div class="main-bar clearfix ">
                        <div class="container clearfix">
                            <!-- website logo -->
                            <div class="logo-header mostion">
                                <a href="index.html" class="dez-page"><img src="https://agency.dexignlab.com/xhtml/images/logo.png" alt=""></a>
                            </div>
                            <!-- nav toggle button -->
                            <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <!-- extra nav -->
                            <div class="extra-nav">
                                <div class="extra-cell">
                                    <a href="contact.html" class="dez-page site-button primary">Inquire Now </a>
                                </div>
                            </div>
                            <!-- main nav -->
                            <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                <ul class="nav navbar-nav">	
                                    <li class="active"><a href="#"><span class="ti-home"></span> <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html" class="dez-page">Home 1</a></li>
                                            <li><a href="index-2.html" class="dez-page">Home 2</a></li>
                                            <li><a href="index-3.html" class="dez-page">Home 3</a></li>
                                            <li><a href="index-4.html" class="dez-page">Home 4</a></li>
                                            <li><a href="index-5.html" class="dez-page">Home 5</a></li>
                                            <li><a href="index-6.html" class="dez-page">Home 6 <span class="new-page">New</span></a></li>
                                            <li><a href="index-7.html" class="dez-page">Home 7 <span class="new-page">New</span></a></li>
                                        </ul>	
                                    </li>
                                    <li><a href="#">Pages <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="#">About Us <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="about-1.html" class="dez-page">About Us 1</a></li>
                                                    <li><a href="about-2.html" class="dez-page">About Us 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Error Page <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="error-403.html" class="dez-page">Error 403</a></li>
                                                    <li><a href="error-404.html" class="dez-page">Error 404</a></li>
                                                    <li><a href="error-405.html" class="dez-page">Error 405</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Coming Soon <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="coming-soon-1.html" class="dez-page">Coming Soon 1 </a></li>
                                                    <li><a href="coming-soon-2.html" class="dez-page">Coming Soon 2 </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="under-maintenance.html" class="dez-page">Under Maintenance</a></li>
                                            <li><a href="expertise.html" class="dez-page">Pre Solutions</a></li>
                                            <li><a href="project-management.html" class="dez-page">Project management</a></li>
                                            <li><a href="our-projects.html" class="dez-page">Our Projects</a></li>
                                            <li><a href="project-details.html" class="dez-page">Project Details </a></li>
                                            <li><a href="team.html" class="dez-page">Our Team</a></li>
                                            <li><a href="faqs.html" class="dez-page">FAQ's</a></li>
                                            <li><a href="login.html" class="dez-page">Login </a></li>
                                            <li><a href="register.html" class="dez-page">Register </a></li>
                                            <li><a href="contact.html" class="dez-page">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Our Service <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="service.html" class="dez-page">Services</a></li>
                                            <li><a href="services-details.html" class="dez-page">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Blog Standard <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog-standard.html" class="dez-page">Standard</a></li>
                                                    <li><a href="blog-standard-left-sidebar.html" class="dez-page">Standard Left Sidebar</a></li>
                                                    <li><a href="blog-standard-right-sidebar.html" class="dez-page">Standard Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog Classic <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog-classic-grid.html" class="dez-page">Classic</a></li>
                                                    <li><a href="blog-classic-left-sidebar.html" class="dez-page">Classic Left Sidebar</a></li>
                                                    <li><a href="blog-classic-right-sidebar.html" class="dez-page">Classic Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog List <i class="fa fa-angle-right"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog-list-left-sidebar.html" class="dez-page">List Left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html" class="dez-page">List Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog-details.html" class="dez-page">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Our Portfolio <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="portfolio-full-width.html" class="dez-page">Portfolio Full Width  </a></li>
                                            <li><a href="portfolio-grid-2.html" class="dez-page">Portfolio Grid 2 </a></li>
                                            <li><a href="portfolio-grid-3.html" class="dez-page">Portfolio Grid 3 </a></li>
                                            <li><a href="portfolio-grid-4.html" class="dez-page">Portfolio Grid 4 </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Shop <i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="shop-columns.html" class="dez-page">Shop Columns</a></li>
                                            <li><a href="shop-columns-sidebar.html" class="dez-page">Shop Columns Sidebar</a></li>
                                            <li><a href="shop-product-details.html" class="dez-page">Product Details</a></li>
                                            <li><a href="shop-cart.html" class="dez-page">Cart</a></li>
                                            <li><a href="shop-checkout.html" class="dez-page">Checkout</a></li>
                                            <li><a href="shop-wishlist.html" class="dez-page">Wishlist</a></li>
                                            <li><a href="shop-login.html" class="dez-page">Shop Login</a></li>
                                            <li><a href="shop-register.html" class="dez-page">Shop Register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Element <i class="fa fa-chevron-down"></i> </a>
                                        <ul class="sub-menu">
                                            <li><a href="short-icon-box.html" class="dez-page">Icon Box</a></li>
                                            <li><a href="short-counter.html" class="dez-page">Counter</a></li>
                                            <li><a href="short-portfolio.html" class="dez-page">Portfolio</a></li>
                                            <li><a href="short-tabs.html" class="dez-page">Tabs</a></li>
                                            <li><a href="short-team.html" class="dez-page">Team</a></li>
                                            <li><a href="short-testimonial.html" class="dez-page">Testimonial</a></li>
                                            <li><a href="short-form.html" class="dez-page">Form</a></li>
                                            <li><a href="short-accordions.html" class="dez-page">Accordions</a></li>
                                        </ul>
                                    </li>
                                </ul>		
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main header END -->
            </header>
            <!-- header END -->
           
            <!-- Content -->
            <div class="page-content">
                <!-- Slider -->
                <div class="main-slider style-two default-banner" id="home">
                    <div class="tp-banner-container">
                        <div class="tp-banner" >
                            <div id="welcome_wrapper" class="rev_slider_wrapper fullscreen-container" data-alias="reveal-add-on36" data-source="gallery" style="background:#ffffff;padding:0px;">
                                <!-- START REVOLUTION SLIDER 5.4.7.2 fullscreen mode -->
                                    <div id="welcome" class="rev_slider fullscreenbanner" style="display:none;" data-version="5.4.7.2">
                                <ul>	<!-- SLIDE  -->
                                    <li data-index="rs-101" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-thumb=""  data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                        <!-- MAIN IMAGE -->
                                        <img src="https://agency.dexignlab.com/xhtml/images/main-slider/dummy.png"  alt=""  data-lazyload="images/main-slider/slide4.jpg" data-bgposition="center center" data-kenburns="on" data-duration="4000" data-ease="Power3.easeInOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="4" class="rev-slidebg" data-no-retina>
                                        <!-- LAYERS -->
        
                                        <!-- LAYER NR. 1 -->
                                        <div class="tp-caption tp-shape tp-shapewrapper ov-tp " 
                                            id="slide-101-layer-14" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                            data-width="full"
                                            data-height="full"
                                            data-whitespace="nowrap"
                                            data-type="shape" 
                                            data-basealign="slide" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":10,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1500,"frame":"999","to":"opacity:0;","ease":"Power4.easeIn"}]'
                                            data-textAlign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 5;font-family:Open Sans;"> </div>
        
                                        <!-- LAYER NR. 2 -->
                                        <div class="tp-caption  " 
                                            id="slide-101-layer-1" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['-40','-80','-80','-70']" 
                                            data-fontsize="['70','70','50','30']"
                                            data-lineheight="['90','80','70','60']"
                                            data-letterspacing="['-5','-5','-2','-3']"
                                            data-width="['800','none','768','260']"
                                            data-height="none"
                                            data-whitespace="['normal','nowrap','normal','normal']"
                                 
                                            data-type="text" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                                            data-textAlign="['center','left','center','center']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[10,10,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 6; min-width: 800px; max-width: 800px; white-space: normal; font-size: 90px; line-height: 90px; font-weight: 600; color: #ffffff; letter-spacing: -5px;font-family:'Montserrat',sans-serif;">Design Agency</div>
        
                                        <!-- LAYER NR. 3 -->
                                        <div class="tp-caption  " 
                                            id="slide-101-layer-2" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['50','20','10','10']" 
                                            data-fontsize="['20','20','20','17']"
                                            data-lineheight="['30','30','25','22']"
                                            data-color="['rgba(255,255,255,0.75)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)']"
                                            data-width="['640','481','500','260']"
                                            data-height="none"
                                            data-whitespace="normal"
                                 
                                            data-type="text" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 7; min-width: 640px; max-width: 640px; white-space: normal; font-size: 20px; line-height: 30px; font-weight: 400; color: rgba(255,255,255,0.75); font-family:'Montserrat',sans-serif;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        
                                        <!-- LAYER NR. 4 -->
                                        <a class="tp-caption rev-btn   tc-btnshadow tp-rs-menulink" 
                                            href="#" target="_blank"			 
                                            id="slide-101-layer-12" 
                                            data-x="['center','center','center','center']" data-hoffset="['-150','-150','-110','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['150','140','100','100']" 
                                            data-lineheight="['60','60','50','50']"
                                            data-width="['280','280','200','none']"
                                            data-height="none"
                                            data-whitespace="nowrap"
                                 
                                            data-type="button" 
                                            data-actions=''
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:-50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);"}]'
                                            data-textAlign="['center','center','center','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[50,50,20,20]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[50,50,20,20]"
        
                                            style="z-index: 8; min-width: 280px; max-width: 280px; white-space: nowrap; font-size: 17px; line-height: 60px; font-weight: 500; color: rgba(255,255,255,1); font-family:'Montserrat',sans-serif;border-radius:30px 30px 30px 30px;outline:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration: none;"><i class="fa-icon-cube" style="font-size:17px;margin-right:5px;"></i> About Us </a>
        
                                        <!-- LAYER NR. 5 -->
                                        <a class="tp-caption rev-btn   tc-btnshadow" 
                                            href="#" target="_blank"			 
                                            id="slide-101-layer-13" 
                                            data-x="['center','center','center','center']" data-hoffset="['150','150','100','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['150','140','100','160']" 
                                            data-lineheight="['60','60','50','50']"
                                            data-width="['280','280','200','none']"
                                            data-height="none"
                                            data-whitespace="nowrap"
                                 
                                            data-type="button" 
                                            data-actions=''
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","bgcolor":"#000000","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","bgcolor":"#000000","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(0,0,0,1);"}]'
                                            data-textAlign="['center','center','center','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[50,50,20,20]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[50,50,20,20]"
        
                                            style="z-index: 9; min-width: 280px; max-width: 280px; white-space: nowrap; font-size: 17px; line-height: 60px; font-weight: 500; color: #000; font-family:'Montserrat',sans-serif;background-color:#fff;border-radius:30px 30px 30px 30px;outline:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration: none;"><i class="fa-icon-cloud-download" style="font-size:17px;margin-right:5px;"></i> Read More </a>
                                    </li>
                                    <!-- SLIDE  -->
                                    <li data-index="rs-102" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-thumb=""  data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                        <!-- MAIN IMAGE -->
                                        <img src="https://agency.dexignlab.com/xhtml/images/main-slider/dummy.png"  alt=""  data-lazyload="images/main-slider/slide5.jpg" data-bgposition="center center" data-kenburns="on" data-duration="4000" data-ease="Power3.easeInOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="4" class="rev-slidebg" data-no-retina>
                                        <!-- LAYERS -->
        
                                        <!-- LAYER NR. 6 -->
                                        <div class="tp-caption tp-shape tp-shapewrapper ov-tp " 
                                             id="slide-102-layer-14" 
                                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                             data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                                        data-width="full"
                                            data-height="full"
                                            data-whitespace="nowrap"
                                 
                                            data-type="shape" 
                                            data-basealign="slide" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":10,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1500,"frame":"999","to":"opacity:0;","ease":"Power4.easeIn"}]'
                                            data-textAlign="['inherit','inherit','inherit','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 5;font-family:Open Sans;"> </div>
        
                                        <!-- LAYER NR. 7 -->
                                        <div class="tp-caption  " 
                                            id="slide-102-layer-1" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['-40','-80','-80','-70']" 
                                            data-fontsize="['70','80','50','30']"
                                            data-lineheight="['90','80','70','60']"
                                            data-letterspacing="['-5','-5','-2','-3']"
                                            data-width="['800','none','768','260']"
                                            data-height="none"
                                            data-whitespace="['normal','nowrap','normal','normal']"
                                 
                                            data-type="text" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                                            data-textAlign="['center','left','center','center']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[10,10,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 6; min-width: 800px; max-width: 800px; white-space: normal; font-size: 90px; line-height: 90px; font-weight: 600; color: #ffffff; letter-spacing: -5px;font-family:'Montserrat',sans-serif;">Creative Studio </div>
        
                                        <!-- LAYER NR. 8 -->
                                        <div class="tp-caption  " 
                                            id="slide-102-layer-2" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['50','20','20','10']" 
                                            data-fontsize="['20','20','20','17']"
                                            data-lineheight="['30','30','25','22']"
                                            data-color="['rgba(255,255,255,0.75)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)']"
                                            data-width="['640','481','500','260']"
                                            data-height="none"
                                            data-whitespace="normal"
                                 
                                            data-type="text" 
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                                            data-textAlign="['center','center','center','center']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
        
                                            style="z-index: 7; min-width: 640px; max-width: 640px; white-space: normal; font-size: 20px; line-height: 30px; font-weight: 400; color: rgba(255,255,255,0.75); font-family:'Montserrat',sans-serif;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        
                                        <!-- LAYER NR. 4 -->
                                        <a class="tp-caption rev-btn   tc-btnshadow tp-rs-menulink" 
                                            href="#" target="_blank"			 
                                            id="slide-102-layer-12" 
                                            data-x="['center','center','center','center']" data-hoffset="['-150','-150','-110','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['150','140','100','100']" 
                                            data-lineheight="['60','60','50','50']"
                                            data-width="['280','280','200','none']"
                                            data-height="none"
                                            data-whitespace="nowrap"
                                 
                                            data-type="button" 
                                            data-actions=''
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:-50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);"}]'
                                            data-textAlign="['center','center','center','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[50,50,20,20]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[50,50,20,20]"
        
                                            style="z-index: 8; min-width: 280px; max-width: 280px; white-space: nowrap; font-size: 17px; line-height: 60px; font-weight: 500; color: rgba(255,255,255,1); font-family:'Montserrat',sans-serif;border-radius:30px 30px 30px 30px;outline:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration: none;"><i class="fa-icon-cube" style="font-size:17px;margin-right:5px;"></i> About Us </a>
        
                                        <!-- LAYER NR. 10 -->
                                        <a class="tp-caption rev-btn   tc-btnshadow" 
                                            href="" target="_blank"			 
                                            id="slide-102-layer-13" 
                                            data-x="['center','center','center','center']" data-hoffset="['150','150','100','0']" 
                                            data-y="['middle','middle','middle','middle']" data-voffset="['150','140','100','160']"
                                            data-lineheight="['60','60','50','50']"
                                            data-width="['280','280','200','none']"
                                            data-height="none"
                                            data-whitespace="nowrap"
                                 
                                            data-type="button" 
                                            data-actions=''
                                            data-responsive_offset="off" 
                                            data-responsive="off"
                                            data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","bgcolor":"#000000","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","bgcolor":"#000000","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(0,0,0,1);"}]'
                                            data-textAlign="['center','center','center','inherit']"
                                            data-paddingtop="[0,0,0,0]"
                                            data-paddingright="[50,50,20,20]"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[50,50,20,20]"
        
                                            style="z-index: 9; min-width: 280px; max-width: 280px; white-space: nowrap; font-size: 17px; line-height: 60px; font-weight: 500; color: #000; font-family:'Montserrat',sans-serif;background-color:#fff;border-radius:30px 30px 30px 30px;outline:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration: none;"><i class="fa-icon-cloud-download" style="font-size:17px;margin-right:5px;"></i> Read More </a>
                                    </li>
                                </ul>
                                <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>	</div>
                                </div><!-- END REVOLUTION SLIDER -->     
                        </div>        
                    </div>        
                </div>        
                <!-- Slider END -->
                <!-- About Us -->
                <div class="section-full content-inner bg-white">
                    <div class="container">
                        <div class="max-w800 m-auto text-center wow fadeIn" data-wow-delay="0.1s">
                            <h6>About Digital Agency</h6>
                            <h4 class="m-b50 ">The Agency corporate's vision is to continue to grow and challenge convention through our spirit, scientific advancements, forward-thinking leadership, and collaborative approach.</h4>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                    <div class="icon-sm m-b20"> <a href="#" class="icon-cell"><i class="ti-headphone-alt"></i></a> </div>
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte text-uppercase">Market forecast</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                        <a href="#" class="site-button">Site Button</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                    <div class="icon-sm m-b20"> <a href="#" class="icon-cell"><i class="ti-ruler-pencil"></i></a> </div>
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte text-uppercase">Most Versatile</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                        <a href="#" class="site-button">Site Button</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 m-b10 wow fadeInUp" data-wow-delay="0.9s">
                                <div class="icon-bx-wraper bx-style-1 p-a30 center fly-box-ho">
                                    <div class="icon-sm m-b20"> <a href="#" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
                                    <div class="icon-content">
                                        <h5 class="dlab-tilte text-uppercase">Workflow automation</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
                                        <a href="#" class="site-button">Site Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- About Us End-->
                <!-- Services -->
                <div class="section-full about-section bg-white">
                    <div class="container-fluid">
                        <div class="row dzseth">
                            <div class="bg-primary col-xl-3 p-a0 col-md-6 col-lg-3 col-xs-12 d-flex dis-tbl">
                                <div class="p-a30 text-white dis-tbl-cell align-self-center wow fadeIn" data-wow-delay="0.3s">
                                    <p class="font-weight-600 m-b10">create best website</p>
                                    <h4 class="font-weight-700">Extremely well organized with perfect coding</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                                    <a href="#" class="site-button white outline outline-2">Read More</a>
                                </div> 
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 p-a0 col-xs-12 d-flex">
                                <img src="https://agency.dexignlab.com/xhtml/images/about-us/img4.jpg" class="abt-img img-cover" alt=""/>
                            </div>
                            <div class="bg-primary col-xl-3 p-a0 col-md-6 col-lg-3 col-xs-12 d-flex dis-tbl">
                                <div class="p-a30 text-white dis-tbl-cell align-self-center wow fadeIn" data-wow-delay="0.6s">
                                    <p class="font-weight-600 m-b10">create best website</p>
                                    <h4 class="font-weight-700">Extremely well organized with perfect coding</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                                    <a href="#" class="site-button white outline outline-2">Read More</a>
                                </div> 
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 p-a0 col-xs-12 d-flex">
                                <img src="https://agency.dexignlab.com/xhtml/images/about-us/img2.jpg" class="abt-img img-cover" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Services END -->
                <!-- About Us -->
                <div class="section-full content-inner bg-white">
                    <div class="container">
                        <div class="row m-b50 equal-wraper2">
                            <div class="col-xl-6 col-lg-6 col-md-12 equal-col wow fadeInLeft m-b20" data-wow-delay="0.3s">
                                <img src="https://agency.dexignlab.com/xhtml/images/about-us/img3.jpg" class="object-cover radius-sm" alt=""/>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12 dis-tbl equal-col wow fadeInRight" data-wow-delay="0.6s">
                                <div class="dis-tbl-cell">
                                    <h5 class="text-primary m-b5">With graceful feature, create a modern design</h5>
                                    <h2 class="font-weight-500 m-t0 m-b10">Gorgeous website template for online presence</h2>
                                    <h6 class="font-weight-400 m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</h6>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div class="icon-bx-wraper  left">
                                                <div class="icon-sm text-primary m-b20"> <a href="#" class="icon-cell text-primary"><i class="ti-desktop"></i></a> </div>
                                                <div class="icon-content">
                                                    <h5 class="dlab-tilte">Lifetime Updates</h5>
                                                    <h6 class="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                                            <div class="icon-bx-wraper  left">
                                                <div class="icon-sm text-primary m-b20"> <a href="#" class="icon-cell text-primary"><i class="ti-ruler-pencil"></i></a> </div>
                                                <div class="icon-content">
                                                    <h5 class="dlab-tilte">Fast Supports</h5>
                                                    <h6 class="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6  m-b30">
                                            <div class="icon-bx-wraper  left">
                                                <div class="icon-sm text-primary m-b20"> <a href="#" class="icon-cell text-primary"><i class="ti-palette"></i></a> </div>
                                                <div class="icon-content">
                                                    <h5 class="dlab-tilte">Interactive Elements</h5>
                                                    <h6 class="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6  m-b10">
                                            <div class="icon-bx-wraper  left">
                                                <div class="icon-sm text-primary m-b20"> <a href="#" class="icon-cell text-primary"><i class="ti-file"></i></a> </div>
                                                <div class="icon-content">
                                                    <h5 class="dlab-tilte">Flexible Layout</h5>
                                                    <h6 class="font-weight-400">Lorem ipsum dolor sit elit nonummy dolor is.</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dlab-divider bg-gray-dark"><i class="icon-dot c-square"></i></div>
                        <div class="row m-t30">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                <div class="counter-style-1">
                                    <div class="">
                                        <i class="icon flaticon-bar-chart text-primary"></i>
                                        <span class="counter">7652</span>
                                    </div>
                                    <span class="counter-text">Completed Projects</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="counter-style-1">
                                    <div class="">
                                        <i class="icon flaticon-avatar text-primary"></i>
                                        <span class="counter">4562</span>
                                    </div>
                                    <span class="counter-text">Happy Clients</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                <div class="counter-style-1">
                                    <div class="">
                                        <i class="icon flaticon-file text-primary"></i>
                                        <span class="counter">3569</span>
                                    </div>
                                    <span class="counter-text">Questions Answered</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                                <div class="counter-style-1">
                                    <div class="">
                                        <i class="icon flaticon-pen text-primary"></i>
                                        <span class="counter">2089</span>
                                    </div>
                                    <span class="counter-text">Ordered Coffee's</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- About Us -->
                <!-- Team And Process -->
                <div class="section-full bg-black-light content-inner">
                    <div class="container">
                        <div class="max-w600 m-auto text-center m-b50 text-white">
                            <h6 class="font-weight-300 m-t0">Why Choose Us?</h6>
                            <h3>Provide you a website which is full of extreme feature.</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.2s">
                                <div class="dlab-box-bg m-b30 box-hover" style="background-image:url(https://agency.dexignlab.com/xhtml/images/our-services/pic1.jpg)">
                                    <div class="icon-bx-wraper center p-lr20 p-tb30">
                                        <div class="text-primary m-b30"> 
                                            <span class="icon-cell icon-sm"><i class="ti-ruler-pencil"></i></span> 
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Creative design</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                        </div>
                                    </div>
                                    <div class="icon-box-btn text-center">
                                        <a href="#" class="site-button btn-block">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.4s">
                                <div class="dlab-box-bg m-b30 box-hover" style="background-image:url(https://agency.dexignlab.com/xhtml/images/our-services/pic2.jpg)">
                                    <div class="icon-bx-wraper center p-lr20 p-tb30">
                                        <div class="text-primary m-b30"> 
                                            <span class="icon-cell icon-sm"><i class="ti-heart"></i></span> 
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Just Easy Way</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                        </div>
                                    </div>
                                    <div class="icon-box-btn text-center">
                                        <a href="#" class="site-button btn-block">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.6s">
                                <div class="dlab-box-bg m-b30 box-hover active" style="background-image:url(https://agency.dexignlab.com/xhtml/images/our-services/pic3.jpg)">
                                    <div class="icon-bx-wraper center p-lr20 p-tb30">
                                        <div class="text-primary m-b30"> 
                                            <span class="icon-cell icon-sm"><i class="ti-brush-alt"></i></span> 
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Awesome function</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                        </div>
                                    </div>
                                    <div class="icon-box-btn text-center">
                                        <a href="#" class="site-button btn-block">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow zoomIn" data-wow-delay="0.8s">
                                <div class="dlab-box-bg m-b30 box-hover" style="background-image:url(https://agency.dexignlab.com/xhtml/images/our-services/pic4.jpg)">
                                    <div class="icon-bx-wraper center p-lr20 p-tb30">
                                        <div class="text-primary m-b30"> 
                                            <span class="icon-cell icon-sm"><i class="ti-mouse-alt"></i></span> 
                                        </div>
                                        <div class="icon-content">
                                            <h5 class="dlab-tilte">Flexible Layout</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.</p>
                                        </div>
                                    </div>
                                    <div class="icon-box-btn text-center">
                                        <a href="#" class="site-button btn-block">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Team And Process END -->
                <!-- Portfolio -->
                <div class="section-full bg-white content-inner-1 portfolio">
                    <div class="container-fluid">
                        <div class="max-w600 m-auto text-center m-b30">
                            <h6 class="m-t0">Our recent works</h6>
                            <h2 class="m-t0">Our clients are special so we make special products</h2>
                        </div>
                        <div class="site-filters clearfix center  m-b40">
                            <ul class="filters" data-toggle="buttons">
                                <li data-filter="" class="btn active">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>All</span></a> 
                                </li>
                                <li data-filter="web" class="btn">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>Web</span></a> 
                                </li>
                                <li data-filter="advertising" class="btn">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>Advertising</span></a> 
                                </li>
                                <li data-filter="branding" class="btn">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>Branding</span></a> 
                                </li>
                                <li data-filter="design" class="btn">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>Design</span></a> 
                                </li>
                                <li data-filter="photography" class="btn">
                                    <input type="radio">
                                    <a href="#" class="site-button-secondry radius-sm"><span>Photography</span></a> 
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix">
                            <ul id="masonry" class="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
                                <li class="advertising branding photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.2s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect "> 
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_2.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Tailoring Interior</h5>
                                                        <p>Branding and Brochure</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="advertising design photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.4s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_6.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Educamp School</h5>
                                                        <p>Branding and Identity</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="web branding card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.6s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect">
                                            <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_7.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Crop Identity</h5>
                                                        <p>Branding and Brochure</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="advertising design photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="0.8s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect dlab-img-effect "> 
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_8.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>violatar Series</h5>
                                                        <p>Web and photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="web photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect"> 
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_9.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Johnny Cash</h5>
                                                        <p>Web and photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="advertising branding card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.2s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect"> 
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_10.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>violatar Series</h5>
                                                        <p>Web and photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                 <li class="web design card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.4s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect">
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_11.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Zimmermann Buch</h5>
                                                        <p>Web and photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="advertising branding photography card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0 wow zoomIn" data-wow-delay="1.6s">
                                    <div class="dlab-box dlab-gallery-box">
                                        <div class="dlab-media dlab-img-overlay1 dlab-img-effect ">
                                        <a href="javascript:void(0);"> <img src="https://agency.dexignlab.com/xhtml/images/portfolio/image_12.jpg"  alt=""> </a>
                                            <div class="overlay-bx">
                                                <div class="overlay-icon align-b text-white"> 
                                                    <div class="text-white text-left port-box">
                                                        <h5>Stadt Gestalten</h5>
                                                        <p>Web and photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Portfolio End -->
                <!-- Map And Form -->
                <div class="section-full bg-white content-inner-2 ">
                    <div class="container">
                        <div class="row equal-wraper3">
                            <div class="col-lg-5 equal-col dis-tbl m-b30 wow zoomInLeft" data-wow-delay="0.4s">
                                <div class="dis-tbl-cell  m-b30">							
                                    <h2 class="m-t0 m-b10">Build your website with extra functionality</h2>
                                    <ul class="list-angle-right">
                                        <li>fully focused on accessibility</li>
                                        <li>Based on modern design concept</li>
                                        <li>impressive and attractive design with graceful features</li>
                                        <li>More creative with smoothness and flexibility </li>
                                        <li>Unlimited power and customization possibilities</li>
                                    </ul>
                                    <a href="#" class="site-button black outline outline-2">Read More <i class="ti-arrow-right m-l10"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-7 equal-col wow zoomInRight" data-wow-delay="0.8s">
                                <img src="https://agency.dexignlab.com/xhtml/images/pc.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Map And Form END -->
                
                <!-- Clients Words -->
                <div class="section-full overlay-primary-middle content-inner bg-img-fix" style="background-image:url(https://agency.dexignlab.com/xhtml/images/background/bg2.jpg)">
                    <div class="container">
                        <div class="max-w600 m-auto text-center m-b30 text-white">
                            <h6 class="m-t0">What people say</h6>
                            <h2 class="m-t0">Clients Words</h2>
                        </div>
                        <div class="section-content m-b30 wow fadeIn" data-wow-delay="0.5s">
                            <div class="testimonial-two-dots owl-carousel owl-theme owl-dots-white-full owl-btn-center-lr owl-btn-3 btn-white">
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic1.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic2.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic3.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>I think it is awesome and I can't thank you enough for working so closely with me. The entire team has been great to work.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic1.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic2.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic3.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>I think it is awesome and I can't thank you enough for working so closely with me. The entire team has been great to work.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic1.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic2.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>Agency was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                                <div class="item p-a5">
                                    <div class="testimonial-9">
                                        <div class="testimonial-pic radius style1"><img src="https://agency.dexignlab.com/xhtml/images/testimonials/pic3.jpg" width="100" height="100" alt=""></div>
                                        <div class="testimonial-text">
                                            <p>I think it is awesome and I can't thank you enough for working so closely with me. The entire team has been great to work.</p>
                                        </div>
                                        <div class="testimonial-detail"> <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Clients Words END -->
                <div class="section-full bg-white content-inner">
                    <div class="container">
                        <div class="max-w600 m-auto text-center m-b30">
                            <h6 class="m-t0">Publish what you think</h6>
                            <h2 class="m-t0">Latest Blogs</h2>
                        </div>
                        <div class="img-carousel owl-carousel owl-btn-center-lr owl-btn-3 wow fadeIn" data-wow-delay="0.5s">
                            <div class="item">
                                <div class="blog-post blog-grid blog-rounded blog-effect1">
                                    <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="https://agency.dexignlab.com/xhtml/images/blog/grid/pic1.jpg" alt=""></a> </div>
                                    <div class="dlab-info p-a20 border-1">
                                        <div class="dlab-post-title ">
                                            <h5 class="post-title font-weight-500"><a href="#">Latest product, full of marvelous features and functionality</a></h5>
                                        </div>
                                        <div class="dlab-post-meta ">
                                            <ul>
                                                <li class="post-date"> <i class="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-text">
                                           <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                        </div>
                                       <div class="dlab-post-readmore"> 
                                            <a href="#" title="READ MORE" rel="bookmark" class="site-button-link black outline">READ MORE <i class="ti-arrow-right"></i></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="blog-post blog-grid blog-rounded blog-effect1">
                                    <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="https://agency.dexignlab.com/xhtml/images/blog/grid/pic2.jpg" alt=""></a> </div>
                                    <div class="dlab-info p-a20 border-1">
                                        <div class="dlab-post-title ">
                                            <h5 class="post-title font-weight-500"><a href="#">Design a perfect website according to your need and desire</a></h5>
                                        </div>
                                        <div class="dlab-post-meta ">
                                            <ul>
                                                <li class="post-date"> <i class="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-text">
                                           <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                        </div>
                                       <div class="dlab-post-readmore"> 
                                            <a href="#" title="READ MORE" rel="bookmark" class="site-button-link black outline">READ MORE <i class="ti-arrow-right"></i></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="blog-post blog-grid blog-rounded blog-effect1">
                                    <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="https://agency.dexignlab.com/xhtml/images/blog/grid/pic3.jpg" alt=""></a> </div>
                                    <div class="dlab-info p-a20 border-1">
                                        <div class="dlab-post-title ">
                                            <h5 class="post-title font-weight-500"><a href="#">Design a creative website with perfection and smart technology</a></h5>
                                        </div>
                                        <div class="dlab-post-meta ">
                                            <ul>
                                                <li class="post-date"> <i class="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-text">
                                           <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                        </div>
                                       <div class="dlab-post-readmore"> 
                                            <a href="#" title="READ MORE" rel="bookmark" class="site-button-link black outline">READ MORE <i class="ti-arrow-right"></i></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="blog-post blog-grid blog-rounded blog-effect1">
                                    <div class="dlab-post-media dlab-img-effect "> <a href="#"><img src="https://agency.dexignlab.com/xhtml/images/blog/grid/pic4.jpg" alt=""></a> </div>
                                    <div class="dlab-info p-a20 border-1">
                                        <div class="dlab-post-title ">
                                            <h5 class="post-title font-weight-500"><a href="#">Best suited website and smart choice for your online business.</a></h5>
                                        </div>
                                        <div class="dlab-post-meta ">
                                            <ul>
                                                <li class="post-date"> <i class="fa fa-comments"></i><strong>10 Aug</strong> <span> 2016</span> </li>
                                                <li class="post-author"><i class="fa fa-user"></i>By <a href="#">Jone</a> </li>
                                            </ul>
                                        </div>
                                        <div class="dlab-post-text">
                                           <p>All the Lorem Ipsum generators on the Internet tend to repeat..</p>
                                        </div>
                                       <div class="dlab-post-readmore"> 
                                            <a href="#" title="READ MORE" rel="bookmark" class="site-button-link black outline">READ MORE <i class="ti-arrow-right"></i></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
    </div>
    </div>
    <!-- Page End -->
        {{--  <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>  --}}
    </body>
</html>
