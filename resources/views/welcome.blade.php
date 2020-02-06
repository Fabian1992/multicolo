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
	{{--  <script src="{{ asset('admin/js/jquery.min.js') }}"></script>  --}}
    
    <script src="{{ asset('client/js/jquery-1.12.4.min.js') }}"></script>
    
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


    {{--  <!-- Preloader -->
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
    <!-- Preloader End-->  --}}
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

        <!-- Header -->
        <header>
            <nav class="wed_light_nav wed_transp_nav">
                <div class="container">

                    <!-- couple header -->
                    <img class="wed_couple_header wed_kissing_couple animated" src="https://mafer.soysoftware.com/images/3.png" alt="" />
                    <img class="wed_couple_header wed_white_couple animated" src="https://mafer.soysoftware.com/images/3_white_couple.png" alt="" />
                    <!-- couple header end -->

                    <!-- Logo -->
                    <a href="#" class="wed_logo wed_logo_animation">Trajes Multicolor</a>

                    <!-- Text Logo -->
                    <div class="wed_logo_und">Latacunga</div>


                    <div class="wed_top_menu_mobile_link">
                        <i class="ti ti-menu"></i>
                    </div>
                    <!-- Top Menu -->
                    <div class="wed_top_menu_cont">
                        <ul class="wed_top_menu">
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#story">HISTORIA</a></li>

                        </ul>
                    </div>
                    <!-- Top Menu End -->
                </div>
                <!-- container end -->
            </nav>

        </header>
        <!-- Header End -->


        <!-- Slider -->
        <div class="wed_slider wed_image_bck wed_fixed wed_wht_txt" data-stellar-background-ratio="0.2" data-image="https://mafer.soysoftware.com/images/just_couplr.jpg">
            <!-- Over -->
            <div class="wed_over" data-color="rgb(173, 228, 209)" data-opacity="0.8"></div>

            <div class="container">

                <!-- Slider Texts -->
                <div class="wed_slide_txt wed_slide_center_middle text-center" data-0="opacity:1;" data--400-bottom="opacity:0;">
                    <img class="wed_slider_ornament" src="https://mafer.soysoftware.com/images/wedding_ornament.png" alt="">
                    <h2 class="wed_hensa_slider">Trajes Multicolor</h2>
                    <h3>08.ene.2020</h3>
                </div>
                <!-- Slider Texts End -->

            </div>
            <!-- container end -->

            <!-- Slide Down -->
            <a class="wed_scroll_down wed_go" href="#wed_content" data-0="opacity:1; bottom:40px;" data--400-bottom="opacity:0; bottom:80px;">
                <b data-0="height:40px" data--400-bottom="height:55px"></b> Scroll
            </a>
        </div>
        <!-- Slider End -->

        <!-- Content -->
        <section id="wed_content" class="wed_content">

            <!-- BORDER -->
            <div class="wed_white_outter_border wed_mt">

                <!-- story section -->
                <section id="story" class="wed_section_outter wed_couple clearfix wed_image_bck wed_fixed" data-stellar-background-ratio="0.2" data-image="https://mafer.soysoftware.com/images/03_white.png">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-offset-2 col-md-8 text-center">
                                <div class="wed_topstory_titile wed_great_titles">
                                    <h2 class="wed_margtop">
                                        Nuestros trajes
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <!-- Row end -->

                        <!-- Item -->
                        <div class="wed_wrapper">
                            <div class="wed_img_1 skrollable skrollable-after" data-bottom="left:20%" data-center="left:0" data-image="https://mafer.soysoftware.com/images/young_couple/him_2.jpg" style="left: 0px; background-image: url(https://mafer.soysoftware.com/images/young_couple/him_2.jpg);">
                                <h6 class="wed_name_left">Deivid<br><span>Criollo</span></h6>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="wed_wrapper">
                            <div class="wed_img_2 skrollable skrollable-after" data-bottom="right:20%" data-center="right:0" data-image="https://mafer.soysoftware.com/images/young_couple/her_3.jpg" style="right: 0px; background-image: url(https://mafer.soysoftware.com/images/young_couple/her_3.jpg);">
                                <h6 class="wed_name_right">Mafercita<br><span>Barragan</span></h6>
                            </div>
                        </div>
                        <!-- Couple Text -->
                        <div class="married_txt skrollable skrollable-after" data-bottom="opacity:0" data-center="opacity:1" style="opacity: 1;">
                            <h3>Juntos por 100%</h3><br>
                            <br><br>
                            <b>Deivid y Mafercita</b><br>
                            <br>
                            <p>HASTA QUE PAPITO DIOS NOS SEPARE</p>

                        </div>


                    </div>
                    <!-- END of CONTAINER -->

                </section>
                <!-- Section end -->
            </div>
            <!-- BORDER END -->


            <!-- story section -->
            <section id="story" class="wed_section_outter wed_wht_txt">

                <div class="container">
                    <div class="row">

                        <div class="col-sm-12 col-md-offset-2 col-md-8 text-center">
                            <div class="wed_topstory_titile wed_great_titles">
                                <h2 class="wed_without_after">
                                    Nuestra <img class="wed_small_img" src="https://mafer.soysoftware.com/images/1_white.png" alt=""> Historía
                                </h2>
                            </div>
                        </div>
                    </div>
                    <!-- Row end -->

                    <!-- animation -->
                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--10-bottom="@class:active">
                        <!-- item-->
                        <div class="row wed_story_row">

                            <div class="col-sm-12 col-md-5 text-center wed_bd">
                                <div class="wed_second_border"></div>
                                <div class="wed_portfolio_item wed_story_img">
                                    <div class="wed_portfolio_item_cont wed_story_cont">

                                        <!--PHOTO-->
                                        <img class="wed_img_height" src="https://mafer.soysoftware.com/images/young_couple/alongbeach.jpg" alt="">
                                        <!--ICON LINK-->
                                        <span class="wed_port_titles">
                            <span class="wed_port_title">Mafercita </span>
                                        </span>
                                        <!--END of ICON LINK-->

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 hidden-sm hidden-xs text-center">
                                <div class="wed_story_center">
                                    <div class="wed_story_content">
                                        <div class="wed_heart_container">
                                            <img class="wed_heart_1" src="https://mafer.soysoftware.com/images/small_people/heart_3.png" alt="">
                                            <img class="wed_heart_2" src="https://mafer.soysoftware.com/images/small_people/heart_2.png" alt="">
                                        </div>
                                        <div class="wed_story_small_img">
                                            <img src="https://mafer.soysoftware.com/images/small_people/couple_1.png" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-5">
                                <div class="wed_story_txt">
                                    <h3>me enamore desde el primer momento en que te vi</h3>
                                    <div class="wed_month_year">No esperaba conocer a una hermosa chica llamada Mafercita, que lo deslumbra con su belleza y sonrisa, sin dejar atrás su radiante cabello que la hace única y especial,</div>

                                </div>
                            </div>


                            <div class="wed_vertical_line wed_line_top hidden-sm hidden-xs"></div>
                        </div>
                        <!-- END of STORY ROW-1 -->
                    </div>
                    <!-- Animation End -->

                    <!-- animation -->
                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--10-bottom="@class:active">
                        <!-- item-->
                        <div class="row wed_story_row">

                            <div class="col-sm-12 col-md-5 col-md-push-7 text-center wed_bd">
                                <div class="wed_second_border_right"></div>
                                <div class="wed_portfolio_item wed_story_img">
                                    <div class="wed_portfolio_item_cont wed_story_cont">

                                        <!--PHOTO-->
                                        <img src="https://mafer.soysoftware.com/images/young_couple/eating.jpg" alt="" class="wed_img_height">
                                        <!--ICON LINK-->
                                        <span class="wed_port_titles">
                          <span class="wed_port_title">
                            La mejor en su clase
                          </span>
                                        </span>
                                        <!--END of ICON LINK-->
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 hidden-sm hidden-xs text-center">
                                <div class="wed_story_center">
                                    <div class="wed_story_content">
                                        <div class="wed_heart_container_row_2">
                                            <img class="wed_second_heart_1" src="https://mafer.soysoftware.com/images/small_people/heart_3.png" alt="">
                                            <img class="wed_second_heart_2" src="https://mafer.soysoftware.com/images/small_people/heart_1.png" alt="">
                                            <img class="wed_second_heart_3" src="https://mafer.soysoftware.com/images/small_people/heart_2.png" alt="">
                                        </div>
                                        <div class="wed_story_small_img">
                                            <img src="https://mafer.soysoftware.com/images/small_people/couple_2.png" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-5 col-md-pull-7 text-right">
                                <div class="wed_story_txt">
                                    <h3>Entonces te salude por FACEBOOK</h3>
                                    <div class="wed_month_year">
                                        Y desde ahí inicio todo, escribiendo quien eramos, como nos conocemos y para dar un segundo paso iniciar a escribir por whatsapp.
                                        <br><br> Y sin pensarlo de pronto te convertiste en mi interés mas grande de este mundo
                                    </div>

                                </div>
                            </div>
                            <div class="wed_vertical_line hidden-sm hidden-xs"></div>
                        </div>
                        <!-- END of STORY ROW-2 -->
                    </div>
                    <!-- Animation End -->

                    <!-- animation -->
                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--10-bottom="@class:active">
                        <!-- item-->
                        <div class="row wed_story_row">
                            <div class="col-md-5 text-center wed_bd">
                                <div class="wed_second_border"></div>
                                <div class=" wed_portfolio_item event wed_story_img">
                                    <div class="wed_portfolio_item_cont wed_story_cont">

                                        <!--PHOTO-->
                                        <img src="https://mafer.soysoftware.com/images/young_couple/proposure.jpg" alt="" class="wed_img_height">
                                        <!--ICON LINK-->
                                        <span class="wed_port_titles">
                          <span class="wed_port_title">LA MUÑECA MAS LINDA</span>
                                        </span>
                                        <!--END of ICON LINK-->

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 hidden-sm hidden-xs text-center">
                                <div class="wed_story_center">
                                    <div class="wed_story_content">
                                        <div class="wed_heart_container_row_3">
                                            <img class="wed_third_heart_1" src="https://mafer.soysoftware.com/images/small_people/heart_third_step_3.png" alt="">
                                        </div>
                                        <div class="wed_story_small_img">
                                            <img src="https://mafer.soysoftware.com/images/small_people/small_couple_third.png" alt="">
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="wed_story_txt">
                                    <h3>El día que nos conocimos</h3>
                                    <div class="wed_month_year">11 Dic 2019</div>
                                    <h5>Un día super genial, la pasamos de puctas...</h5>

                                </div>
                            </div>
                            <div class="wed_vertical_line hidden-sm hidden-xs"></div>
                        </div>
                        <!-- END of STORY ROW-3 -->
                    </div>
                    <!-- Animation End -->

                    <!-- animation -->
                    <div data-animation="animation_blocks" data-bottom="@class:noactive" data--10-bottom="@class:active">
                        <!-- item-->
                        <div class="row wed_story_row">

                            <div class="col-sm-12 col-md-5 col-md-push-7 text-center wed_bd">
                                <div class="wed_second_border_right"></div>
                                <div class="wed_portfolio_item event wed_story_img">
                                    <div class="wed_portfolio_item_cont wed_story_cont">

                                        <!--PHOTO-->
                                        <img src="https://mafer.soysoftware.com/images/young_couple/running.jpg" alt="" class="wed_img_height">
                                        <!--ICON LINK-->
                                        <span class="wed_port_titles">
                          <span class="wed_port_title">Sonrisa contagiosa y la más hermosa</span>
                                        </span>
                                        <!--END of ICON LINK-->

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 hidden-sm hidden-xs text-center">
                                <div class="wed_story_center">
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
                            </div>

                            <div class="col-sm-12 col-md-5 col-md-pull-7 text-right">
                                <div class="wed_story_txt">
                                    <h3>Y te convertiste en mi tesorito</h3>
                                    <div class="wed_month_year">@2020 ++</div>
                                    <h5>
                                        Vender mi alma al diablo no se si es posible.
                                        <br> Bajar la luna para ti es imposible.
                                        <br> Pero hacer esto es posible con la mera verdad.
                                    </h5>

                                </div>
                            </div>
                            <div class="wed_vertical_line wed_line_bottom hidden-sm hidden-xs"></div>
                        </div>
                        <!-- END of STORY ROW-4 -->
                    </div>
                    <!-- Animation End -->
                </div>
                <!-- END of CONTAINER -->

            </section>
            <!-- Section end -->

            <!-- White border -->
            <div class="wed_white_outter_border">
                <!-- section -->
                <section class="wed_section_outter wed_couple clearfix wed_image_bck wed_fixed" data-stellar-background-ratio="0.2" data-image="https://mafer.soysoftware.com/images/03_white.png">

                    <div class="container">
                        <div class="row wed_auto_height wed_middle_titles">
                            <div class="col-md-12 wed_image_bck wed_fixed text-center">
                                <h2>" Entrégame el tiempo que te sobre, y lo gastaré en hacerte la mujer más feliz del planeta. "</h2>
                            </div>
                            <!-- col end -->
                        </div>
                        <!-- row end -->

                    </div>
                    <!-- container end -->

                </section>
                <!-- section end -->
            </div>
            <!-- White border end-->


            <!-- section -->
            <section class="wed_section_outter">
                <div class="container text-center wed_great_titles wed_wht_txt">

                    <h2>" Eres mi Google, en ti encuentro todo lo que deseo."</h2>

                </div>
                <!-- container end -->
            </section>
            <!-- section end -->

            <!-- White border -->
            <div class="wed_white_outter_border">
                <!-- section -->
                <section class="wed_section_outter wed_couple clearfix wed_image_bck" data-stellar-background-ratio="0.2" data-image="https://mafer.soysoftware.com/images/03_white.png">

                    <div class="container">
                        <div class="row wed_auto_height wed_middle_titles">
                            <div class="col-md-12 wed_image_bck wed_fixed text-center">
                                <h2>
                                    “ Tú sigues siendo lo primero que pienso cuando me piden que pida un deseo. ”
                                </h2>
                            </div>
                            <!-- col end -->

                        </div>
                        <!-- row end -->

                    </div>
                    <!-- container end -->

                </section>
                <!-- section end -->
            </div>
            <!-- White border end -->

            <!-- section -->
            <section id="gallery" class="wed_section_outter wed_image_bck wed_wht_txt">


                <div class="container text-center wed_great_titles wed_white">

                    <h2>
                        “ No es tu sonrisa lo que me vuelve loco, es el hecho de saber que sonríes por mí. ”
                    </h2>

                </div>
                <!-- container end -->

            </section>
            <!-- section end -->

            <!-- White border -->
            <div class="wed_white_outter_border">

                <!-- section -->
                <section class="wed_section_outter wed_couple clearfix wed_image_bck wed_fixed" data-stellar-background-ratio="0.2" data-image="https://mafer.soysoftware.com/images/03_white.png">

                    <div class="container">
                        <div class="row wed_thin_titles">
                            <div class="col-md-12 text-center">
                                <h2>“Si piensas que con esa sonrisa me convencerás, quiero dejar bien claro que estoy completamente de acuerdo contigo.”</h2>
                            </div>
                            <!-- col end -->
                        </div>
                        <!-- row end -->
                    </div>
                    <!-- container end -->

                </section>
                <!-- section end -->
            </div>
            <!-- White border end-->

            <!-- Section -->
            <section class="wed_section_outter">

                <div class="container text-center wed_great_titles wed_wht_txt">
                    <h2>“Siempre te llevo conmigo. No muy cerca pero si muy dentro.”</h2>
                </div>
                <!-- container end -->
            </section>
            <!-- section end -->

            <!-- White border -->
            <div class="wed_white_outter_border">


                <!-- section -->
                <section class="wed_section_outter">

                    <!-- over -->
                    <div class="wed_map_over wed_wht_map text-center">
                        <div class="wed_map_txt wed_icon_box">
                            <img class="wed_small_img" src="https://mafer.soysoftware.com/images/small_people/fly_up_hearts.png" alt="">
                            <div class="wed_icon_box_content">
                                <h4><b>NUESTRA CANCIÓN</b></h4>
                                <h6>Descubre aquí</h6>
                            </div>
                        </div>
                    </div>
                    <!-- over end -->

                    <!-- map -->
                    <div class="wed_map">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6YR4neQ-dtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <!-- map end -->
                </section>
                <!-- section end -->
            </div>
            <!-- Border End -->


            <!-- section -->
            <section id="journal" class="wed_section_outter wed_wht_txt">
                <div class="container text-center wed_great_titles">

                    <h2>DEIVID Y MAFERCITA</h2>

                </div>
                <!-- container end -->
            </section>
            <!-- section end -->

            <!-- White border -->
            <div class="wed_water_border">
                <!-- section -->
                <section id="rsvp" class="wed_section_outter wed_couple clearfix wed_image_bck" data-stellar-background-ratio="0.2" data-image="images/03_white.png">

                    <div class="container text-center wed_great_titles">
                        <div class="row">
                            <div class="col-md-8 col-md-pull-2 col-md-push-2 col-sm-12">
                                <h2 class="wed_form_txt">
                                    @bebesitha
                                </h2>
                                <p>
                                    From: @deivid_criollo
                                </p>

                            </div>
                            <!-- col end -->
                        </div>
                        <!-- row end -->
                    </div>
                    <!-- container end -->
                </section>
                <!--section end -->

                <!-- To Top -->
                <a href="#wed_page" class="wed_top ti ti-angle-up wed_go"></a>
            </div>
            <!-- White border end -->
        </section>
        <!-- content end -->
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
