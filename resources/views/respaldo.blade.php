<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multicolor</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/css/wedding_library.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('client/css/wedding_style.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('client/css/min.css') }}" rel="stylesheet" type="text/css">
    <!-- STYLESHEETS -->
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/plugins.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/style.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/templete.css')}}">
	<link class="skin" rel="stylesheet" type="text/css" href="{{asset('client2/css/skin/skin-1.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/plugins/switcher/switcher.css')}}">
    
	
	<!-- REVOLUTION SLIDER CSS -->
	<link rel="stylesheet" type="text/css" href="{{asset('client2/plugins/revolution/revolution/css/settings.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/plugins/revolution/revolution/css/navigation.css')}}">
    <!-- JavaScript  files ========================================= -->
    <script src="{{asset('client2/js/jquery.min.js')}}"></script><!-- JQUERY.MIN JS -->
    
    <script src="{{ asset('admin/js/blockui.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_library.js') }}"></script>
    <script src="{{ asset('client/js/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('client/js/jquery.mb.YTPlayer.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_script.js') }}"></script>
    <script src="{{asset('client2/plugins/bootstrap/js/popper.min.js')}}"></script><!-- BOOTSTRAP.MIN JS -->
    <script src="{{asset('client2/plugins/bootstrap/js/bootstrap.min.js')}}"></script><!-- BOOTSTRAP.MIN JS -->
    <script src="{{asset('client2/plugins/wow/wow.js')}}"></script><!-- BOOTSTRAP.MIN JS -->
    <script src="{{asset('client2/plugins/bootstrap-select/bootstrap-select.min.js')}}"></script><!-- FORM JS -->
    <script src="{{asset('client2/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js')}}"></script><!-- FORM JS -->
    <script src="{{asset('client2/plugins/magnific-popup/magnific-popup.js')}}"></script><!-- MAGNIFIC-POPUP JS -->
    <script src="{{asset('client2/plugins/counter/waypoints-min.js')}}"></script><!-- WAYPOINTS JS -->
    <script src="{{asset('client2/plugins/counter/counterup.min.js')}}"></script><!-- COUNTERUP JS -->
    <script src="{{asset('client2/plugins/imagesloaded/imagesloaded.js')}}"></script><!-- MASONRY  -->
    <script src="{{asset('client2/plugins/masonry/masonry-3.1.4.js')}}"></script><!-- MASONRY  -->
    <script src="{{asset('client2/plugins/masonry/masonry.filter.js')}}"></script><!-- MASONRY  -->
    <script src="{{asset('client2/plugins/owl-carousel/owl.carousel.js')}}"></script><!-- OWL  SLIDER  -->
    <script src="{{asset('client2/plugins/rangeslider/rangeslider.js')}}" ></script><!-- Rangeslider -->
    <script src="{{asset('client2/js/dz.carousel.js')}}"></script><!-- SORTCODE FUCTIONS  -->
    <script src="{{asset('client2/plugins/loading/anime.js')}}"></script><!-- LOADING JS -->
    <script src="{{asset('client2/plugins/loading/anime-app.js')}}"></script><!-- LOADING JS -->
    <script src="{{asset('client2/js/custom.js')}}"></script><!-- CUSTOM FUCTIONS  -->

    <script src="{{asset('client2/plugins/loading/anime.js')}}"></script><!-- Tilt Jquery -->
    <script src="{{asset('client2/plugins/loading/anime-app3.js')}}"></script><!-- Tilt Jquery -->
    <script src="{{asset('client2/js/dz.ajax.js')}}"></script><!-- CONTACT JS  -->
    <script src="{{asset('client2/plugins/switcher/switcher.js')}}"></script><!-- SWITCHER JS  -->
    <!-- REVOLUTION JS FILES -->
    <script src="{{asset('client2/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js')}}"></script>
    <!-- Slider revolution 5.0 Extensions  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.actions.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.carousel.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.kenburn.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.layeranimation.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.migration.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.navigation.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.parallax.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.slideanims.min.js')}}"></script>
    <script src="{{asset('client2/plugins/revolution/revolution/js/extensions/revolution.extension.video.min.js')}}"></script>
    <script  src="{{asset('client2/js/rev.slider.js')}}"></script>
    
    <script>
    $(document).ready(function() {
        'use strict';
        dz_rev_slider_1();
    });	/*ready*/
    </script>
</head>
<body id="bg">
    <div id="loading-area"><div class="la-anim-10"></div></div>
    <!-- Preloader -->
    {{--  <div class="wed_page_loader">
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
    </div>  --}}
    <!-- Preloader End--> 
    <div class="wed_flowers">
  
        <div class="wed_fl_1 wed_fl skrollable skrollable-between fadeInUp" data-0="top:260px" data-500="top:1000px" data-1200="top:1500px" data-3000="top:3000px" data-4500="top:4000px" data-6500="top:6000px" data-8000="top:8000px" style="top: 260px;">
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
                          
                                <li><a href="#">Our Service <i class="fa fa-chevron-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="service.html" class="dez-page">Services</a></li>
                                        <li><a href="services-details.html" class="dez-page">Services Details</a></li>
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
                                    <video class="video-intro" autoplay loop muted>
                                        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4">
                                      </video>
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
                                    <img src="https://agency.dexignlab.com/xhtml/images/main-slider/dummy.png"  alt=""  data-lazyload="{{asset('images/main-slider/slide5.jpg')}}" data-bgposition="center center" data-kenburns="on" data-duration="4000" data-ease="Power3.easeInOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="4" class="rev-slidebg" data-no-retina>
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
                        <h4 class="m-b50 ">The Agency corporates vision is to continue to grow and challenge convention through our spirit, scientific advancements, forward-thinking leadership, and collaborative approach.</h4>
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

        </div>
    </div>
</div>
    
</body>
</html>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multicolor</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="{{ asset('nuevos/css/open-iconic-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/ionicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/bootstrap-datepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/jquery.timepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/icomoon.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/css/style.css') }}">
	 <!-- JavaScript  files ========================================= -->
    <script src="{{asset('nuevos/jquery.min.js')}}"></script><!-- JQUERY.MIN JS -->
   
    <script src="{{asset('nuevos/jquery-migrate-3.0.1.min.js')}}"></script>
    <script src="{{asset('nuevos/popper.min.js')}}"></script>
    <script src="{{asset('nuevos/bootstrap.min.js')}}"></script>
    <script src="{{asset('nuevos/jquery.easing.1.3.js')}}"></script>
    <script src="{{asset('nuevos/jquery.waypoints.min.js')}}"></script>
    <script src="{{asset('nuevos/jquery.stellar.min.js')}}"></script>
    <script src="{{asset('nuevos/owl.carousel.min.js')}}"></script>
    <script src="{{asset('nuevos/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{asset('nuevos/aos.js')}}"></script>
    <script src="{{asset('nuevos/jquery.animateNumber.min.js')}}"></script>
    <script src="{{asset('nuevos/bootstrap-datepicker.js')}}"></script>
    <script src="{{asset('nuevos/jquery.timepicker.min.js')}}"></script>
    <script src="{{asset('nuevos/scrollax.min.js')}}"></script>
    <script src="{{asset('nuevos/main.js')}}"></script>
</head>