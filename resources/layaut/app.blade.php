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
	<link href="{{ asset('admin/font/roboto.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/font/icomoon/styles.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/font/fontawesome-free-5.9.0-web/css/all.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/bootstrap_limitless.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/layout.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/components.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('admin/css/colors.min.css') }}" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="{{ asset('admin/js/jquery.min.js') }}"></script>
	
	<script src="{{ asset('admin/js/bootstrap.bundle.min.js') }}"></script>
	<script src="{{ asset('admin/js/blockui.min.js') }}"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="{{ asset('admin/js/uniform.min.js') }}"></script>
	
	<script src="{{ asset('admin/plus/media/jquery.fancybox.js')}}"></script>
	<link href="{{ asset('admin/plus/media/jquery.fancybox.css') }}" rel="stylesheet" type="text/css">
	<script src="{{ asset('admin/js/app.js') }}"></script>
	<!-- /theme JS files -->
	
	{{--  Lobibox.min  --}}
	<link rel="stylesheet" href="{{ asset('admin/plus/Lobibox/css/lobibox.min.css') }}">
	<script src="{{ asset('admin/plus/Lobibox/js/lobibox.js') }}"></script>
	{{--  swalert  --}}
	{{--  sw alert  --}}
	<link rel="stylesheet" href="{{ asset('admin/plus/bootstrap-sweetalert/sweetalert.css') }}">
	<script src="{{ asset('admin/plus/bootstrap-sweetalert/sweetalert.min.js') }}"></script>


	@stack('linksCabeza')
	<script>
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

		function notificar(tipo,mensaje){
            Lobibox.notify(tipo, {
                title:"{{ config('app.name','CACTU') }}",
                msg: mensaje
            });
		}
		
	</script>

</head>

<body>

	{{--  Cabecera  --}}
	<div class="navbar navbar-expand-md navbar-dark bg-blue-800">
		<div class="navbar-brand">
			<a href="{{ route('home') }}" class="d-inline-block">
				<img src="{{ asset('admin/img/logo_light.png') }}" alt="">
			</a>
		</div>

		<div class="d-md-none">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
				<i class="icon-tree5"></i>
            </button>



            {{--  si esta autenticado se muestra menu desplegable  --}}
            @auth
                <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
                    <i class="icon-paragraph-justify3"></i>
                </button>
            @endauth
		</div>


        {{--  sis esta autentica se muestra menus de usuario caso contrario menus registro y login  --}}
        @auth
            @include('layouts.cabecera')
        @else
        <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="navbar-nav-link" id="menuLogin" href="{{ route('login') }}">{{ __('Login') }}</a>
				</li>
				<li class="nav-item">
					<a class="navbar-nav-link" target="_blanck" href="https://www.facebook.com/CACTUec/">
						<i class="fab fa-facebook-f"></i>
					</a>
				</li>
            </ul>
        </div>
        @endauth

        
	</div>
	{{--  /Cabecera  --}}


	<!-- Page content -->
	<div class="page-content">

        {{--  si esta autenticado se muestra menu de navegacion  --}}
        @auth
            {{--  Navegacion  --}}
		    @include('layouts.menu')
            {{--  /Navegacion  --}}
        @endauth


		{{--  Contenido  --}}
		<div class="content-wrapper">

			{{--  Links  --}}
			<div class="page-header page-header-light">
				
				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
					<div class="d-flex">
						<div class="breadcrumb">
							@yield('breadcrumbs')
						</div>
						

						{{--  si existe barra laterla se muestra  --}}
						@hasSection('barraLateral')
							<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
						@endif
					</div>

					<div class="header-elements d-none">
						@yield('barraLateral')
					</div>
				</div>
			</div>
			{{--  /Links  --}}


			{{--  Contenido  --}}
			<div class="content">
				@foreach (['success', 'warning', 'info', 'error','default'] as $msg)
					@if(Session::has($msg))
					<script>
						Lobibox.notify("{{ $msg }}", {
							title:"{{ config('app.name','CACTU') }}",
							msg: "{{ Session::get($msg) }}"
						});
					</script>
					@endif
				@endforeach
				

				@if ($errors->any())
				
					
						<div class="alert alert-primary alert-styled-left alert-dismissible">
							<button type="button" class="close" data-dismiss="alert">
								<i class="fas fa-times"></i>
							</button>
							
							@foreach ($errors->all() as $error)
								
								<span class="font-weight-semibold">
										<li>{{ $error }}</li>
									</span>
							@endforeach
							
						</div>
						
					
				
				@endif
				
                @yield('content')

			</div>
			{{--  /Contenido  --}}


			{{--  Pie de pagina  --}}
			@include('layouts.pie')
			{{--  /Pie de pagina  --}}

		</div>
		{{--  /Contenido  --}}

	</div>
    <!-- /page content -->
    <script>
		
		$('[data-toggle="tooltip"]').tooltip()
		$('table').on('draw.dt', function() {
			$('[data-toggle="tooltip"]').tooltip();
		})


		
	</script>
	
	@stack('linksPie')
	


</body>
</html>