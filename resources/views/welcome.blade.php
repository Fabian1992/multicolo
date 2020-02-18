<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multicolor</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
    <link href="{{ asset('admin/font/roboto.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/font/icomoon/styles.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/font/fontawesome-free-5.9.0-web/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('client/css/wedding_library.css') }}" rel="stylesheet" type="text/css">

    {{-- <link href="{{ asset('client/css/wedding_style.css') }}" rel="stylesheet" type="text/css"> --}}

    <link href="{{ asset('client/css/min.css') }}" rel="stylesheet" type="text/css">
    <!-- STYLESHEETS -->
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/plugins.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/style.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('client2/css/templete.css')}}">
	<link class="skin" rel="stylesheet" type="text/css" href="{{asset('client2/css/skin/skin-1.css')}}">
	{{--  <link rel="stylesheet" type="text/css" href="{{asset('client2/plugins/switcher/switcher.css')}}">  --}}
    <link rel="stylesheet" href="{{ asset('nuevos/open-iconic-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/animate.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    {{-- <link href="{{ asset('client/css/wedding_style.css') }}" rel="stylesheet" type="text/css"> --}}
    <link rel="stylesheet" href="{{ asset('nuevos/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('nuevos/magnific-popup.css') }}">
    {{--  <link rel="stylesheet" href="{{ asset('nuevos/css/style.css') }}">  --}}
	 <!-- JavaScript  files ========================================= -->
    <script src="{{asset('nuevos/jquery.min.js')}}"></script><!-- JQUERY.MIN JS -->
    <script src="{{asset('nuevos/jquery-migrate-3.0.1.min.js')}}"></script>
    <script src="{{asset('client2/plugins/bootstrap/js/bootstrap.min.js')}}"></script><!-- BOOTSTRAP.MIN JS -->
    
    <script src="{{ asset('admin/js/blockui.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_library.js') }}"></script>
    <script src="{{ asset('client/js/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('client/js/jquery.mb.YTPlayer.min.js') }}"></script>
    <script src="{{ asset('client/js/wedding_min_script.js') }}"></script>
    <script src="{{asset('client2/plugins/bootstrap/js/popper.min.js')}}"></script><!-- BOOTSTRAP.MIN JS -->
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
    {{--  <script src="{{asset('client2/plugins/switcher/switcher.js')}}"></script><!-- SWITCHER JS  -->  --}}
   <script src="{{asset('nuevos/owl.carousel.min.js')}}"></script> 
   {{--  <script src="{{asset('nuevos/main.js')}}"></script>   --}}

<script>
    $(document).ready(function(){

 
		$('.owl-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            margin:0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:true,
            dots: false,
            video:true,
            videoHeight: 300, 
            videoWidth: 200,
            autoplay:true,
            autoplayHoverPause: true,
            items: 1,
            navText : ['<i class="catch fas fa-angle-left"></i>','<i class="catch fas fa-angle-right"></i>'],
            responsive:{
              0:{
                items:1
              },
              600:{
                items:1
              },
              1000:{
                items:1
              }
            }
            });

})
	
</script>
</head>
<body id="bg">
    <div id="loading-area"><div class="la-anim-10"></div></div>
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
                            <a href="index.html" class="dez-page"><img src="{{asset('nuevos/images/logo_blanco.png')}}" alt=""></a>
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
                         
                            
                            </ul>		
                        </div>
                    </div>
                </div>
            </div>
            <!-- main header END -->
        </header>
        <!-- header END -->
        <div class="wed_flowers">
  
            {{-- <div class="wed_fl_1 wed_fl skrollable skrollable-between fadeInUp" data-0="top:260px" data-500="top:1000px" data-1200="top:1500px" data-3000="top:3000px" data-4500="top:4000px" data-6500="top:6000px" data-8000="top:8000px" style="top: 260px;">
                <img src="{{ asset('client/images/petals/blue_flower/1.png') }}" alt="">
            </div> --}}
            <div class="wed_fl_2 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:800px" data-1200="top:1200px" data-3000="top:2600px" data-4500="top:4900px" data-6500="top:6900px" data-8000="top:8900px" style="top: 210px;">
                <img src="{{ asset('client/images/petals/blue_flower/16.png') }}" alt="">
            </div>
            <div class="wed_fl_3 wed_fl skrollable skrollable-between" data-0="top:210px" data-500="top:1000px" data-1200="top:1400px" data-3000="top:3600px" data-4500="top:4500px" data-6500="top:7000px" data-8000="top:6700px" style="top: 210px;">
                <img src="{{ asset('client/images/petals/blue_flower/1_blur.png') }}" alt="">
            </div>
            <div class="wed_fl_4 wed_fl skrollable skrollable-between" data-0="top:650px" data-500="top:600px" data-1200="top:600px" data-3000="top:3900px" data-4500="top:4900px" data-6500="top:6600px" data-8000="top:8600px" style="top: 650px;">
                <img src="{{ asset('client/images/petals/blue_flower/1.png') }}" alt="">
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
            {{-- <div class="wed_fl_11 wed_fl skrollable skrollable-between" data-0="top:260px" data-500="top:1000px" data-1200="top:1500px" data-3000="top:3000px" data-4500="top:4000px" data-6500="top:6000px" data-8000="top:8000px" style="top: 260px;">
                <img src="{{ asset('client/images/petals/blue_flower/11.png') }}" alt="">
            </div> --}}
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
            
    
        </div>
        <!-- Content -->
        <div class="page-content">
            <!-- Slider -->           
            <section class="home-slider rev_slider fullscreenbanner owl-carousel js-fullheight curv-bx">
                <div class="slider-item js-fullheight item-video curv-bx" data-merge="1" >
                    
                    <video class="video-intro" autoplay loop muted>
                        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4">
                        </video>
                    <div class="overlay"></div>
                    <div class="container ">
                    <div class="row slider-text carousel-caption align-items-center fadeIn" data-scrollax-parent="true">
            
                        <div class="col-md-12 col-sm-12 text-center ftco-animate ">
                            <span class="subheading ">Trajes Multicolor</span>
                        <h1 class="mb-4 ">Venta y Alquiler</h1>
                        </div>
            
                    </div>
                    </div>
                </div>
                      
                <div class="slider-item js-fullheight " style="background-image: url({{asset('nuevos/images/bg_1.jpg')}});">
                    <div class="overlay"></div>
                    <div class="container">
                    <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            
                        <div class="col-md-12 col-sm-12 text-center ftco-animate">
                            <span class="subheading">Feliciano</span>
                        <h1 class="mb-4">Nutritious &amp; Tasty</h1>
                        </div>
            
                    </div>
                    </div>
                </div>
                      
                <div class="slider-item js-fullheight" style="background-image: url({{asset('nuevos/images/bg_3.jpg')}});">
                    <div class="overlay"></div>
                    <div class="container">
                    <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            
                        <div class="col-md-12 col-sm-12 text-center ftco-animate">
                            <span class="subheading">Feliciano</span>
                        <h1 class="mb-4">Delicious Specialties</h1>
                        </div>
            
                    </div>
                    </div>
                </div>
            </section>  
             
            <!-- Slider END -->
            {{-- <section class="ftco-section ftco-no-pt ftco-no-pb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="featured">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="featured-menus ftco-animate">
                                            <div class="menu-img img" style="background-image: url({{ asset('client/images/petals/blue_flower/1_blur.png') }});"></div>
                                            <div class="text text-center">
                                                <h3>Grilled Beef with potatoes</h3>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="featured-menus ftco-animate">
                                            <div class="menu-img img" style="background-image: url({{asset('nuevos/images/breakfast-2.jpg')}});"></div>
                                            <div class="text text-center">
                                                <h3>Grilled Beef with potatoes</h3>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="featured-menus ftco-animate">
                                            <div class="menu-img img" style="background-image: url({{asset('nuevos/images/breakfast-3.jpg')}});"></div>
                                            <div class="text text-center">
                                                <h3>Grilled Beef with potatoes</h3>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="featured-menus ftco-animate">
                                            <div class="menu-img img" style="background-image: url({{ asset('client/images/petals/blue_flower/1_blur.png') }});"></div>
                                            <div class="text text-center">
                                                <h3>Grilled Beef with potatoes</h3>
                                                <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> --}}
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

        </div>	
         <!-- Footer -->
        <footer class="site-footer text-uppercase">
            <div class="footer-top bg-primary">
                <div class="container wow fadeIn" data-wow-delay="0.5s">
                    <div class="row">
                        <div class="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                            <div class="widget widget_services border-0">
                                <h5 class="m-b30 text-white">Company</h5>
                                <ul>
                                    <li><a href="about-1.html">About Us </a></li>
                                    <li><a href="index.html">Home </a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="about-1.html">About Us</a></li>
                                    <li><a href="service.html">Our Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                            <div class="widget widget_services border-0">
                                <h5 class="m-b30 text-white">Useful Link</h5>
                                <ul>
                                    <li><a href="index.html">Create Account</a></li>
                                    <li><a href="index.html">Company Philosophy </a></li>
                                    <li><a href="contact.html">Corporate Culture</a></li>
                                    <li><a href="about-1.html">Portfolio</a></li>
                                    <li><a href="project-details.html">Project Details</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                            <div class="widget widget_getintuch">
                                <h5 class="m-b30 text-white ">Contact us</h5>
                                <ul>
                                    <li><i class="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                    <li><i class="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                    <li><i class="ti-email"></i><strong>email</strong>info@example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                            <div class="widget">
                                <h5 class="m-b30 text-white">Subscribe To Our Newsletter</h5>
                                <p class="text-capitalize m-b20">If you have any questions, you can contact with us so that we can give you a satisfying answer. Subscribe to our newsletter to get our latest products.</p>
                                <div class="subscribe-form m-b20">
                                    <form class="dzSubscribe" action="script/mailchamp.php" method="post">
                                        <div class="dzSubscribeMsg"></div>
                                        <div class="input-group">
                                            <input name="dzEmail" required="required"  class="form-control" placeholder="Your Email Id" type="email">
                                            <span class="input-group-btn">
                                                <button name="submit" value="Submit" type="submit" class="site-button">Subscribe</button>
                                            </span> 
                                        </div>
                                    </form>
                                </div>
                                <ul class="list-inline m-a0">
                                    <li><a href="#" class="site-button facebook circle "><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="site-button google-plus circle "><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" class="site-button linkedin circle "><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#" class="site-button instagram circle "><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#" class="site-button twitter circle "><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer bottom part -->
            <div class="footer-bottom bg-primary">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 text-left "> <span>Copyright © 2018 DexignZone</span> </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 text-right "> 
                            <div class="widget-link "> 
                                <ul>
                                    <li><a href="#"> Help Desk</a></li> 
                                    <li><a href="#"> Privacy Policy</a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer END-->
        
        <!-- scroll top button -->
        <button class="scroltop fa fa-chevron-up" ></button>
        
    </div>
    
    </body>
</html>