// file: package.js
Npm.depends({
    'serialport': '1.2.5'
});

Package.on_use(function(api) {
	api.export('SerialPort');
    api.add_files('serialport.js', 'server');
});
