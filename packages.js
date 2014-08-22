Package.describe({
summary:"User Authentication Module with Admin Theme"
});

Package.on_use(function(api){
	var both= ["client","server"];

	//package dependency on client
	api.use([
		'deps',
		'iron-router',
	    'service-configuration',
	    'accounts-base',
	    'underscore',
	    'templating',
	    'handlebars',
	    'session',
	    'sha',
	    'preloader']
	    ,"client");

    api.use([
    	'deps',
    	'service-configuration',
    	'accounts-password',
    	'accounts-base',
    	'underscore',]
    	,"server");

    api.add_files([
    	"helpers.js"
    	"views/login/login.html",
    	"views/login/login.js"
    	],"client");

    api.add_files(['userauth.js'], 'server');

  // CLIENT and SERVER
  api.imply('accounts-base', ['client', 'server']);
  api.imply('accounts-password', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);
  api.use(['accounts-t9n'], ['client', 'server']);
  api.add_files(['shared/router.js'], ['client', 'server']);

  //package API export
  api.export('UserAuth', ['client', 'server']);

}//end of Package.on_use


	);

