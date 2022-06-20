// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
    swipe: true,
    visibleBreakpoint: 1024,
  },
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/restaurantes/',
    	url: 'restaurantes.html',
    	name: 'restaurantes',
  		},
		{
		path: '/hamburguesas/',
    	url: 'hamburguesas.html',
    	name: 'hamburguesas',
  		},
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		{
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		},
		{
		path: '/quienes-somos/',
    	url: 'quienes-somos.html',
    	name: 'quienes-somos',
  		},
	],
	dialog: {
		title: 'FUDS DELIVERY',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Welcome to FUDS !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {

		

		//app.dialog.alert('Great!');

		

		var notification = app.notification.create({

		 icon: '<i class="material-icons">check</i>',

		 title: 'Order',

		 titleRightText: '',

		 subtitle: '',

		 text: "Tu orden ha sido recibida, ¡gracias por usar FUDS!",

		 closeTimeout: 3000,

		});

		notification.open();

		

	});
	
});

