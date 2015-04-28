/****************************************************
	NOT included in the actual "Try it now" steps 
****************************************************/
/* Server Option: Setup an express.js server */
/* Install express package, e.g.
	sudo npm install express --save
	*/
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 80;

var express = require('express');
var app = express();


/* require GunDB in the server js file, e.g.
	var Gun = require('./gun/gun.js'); 
	*/
//                                     ↓↓↓ Running `sudo npm install gun --save`
//                                         took care of the individual errors below,
//                                         BUT now all I can get is:
//                                         TypeError: Object #<Gun> has no method 'attach'	
//	var Gun = require('gun');          <-- This is what is shown in all the examples
//                                         but always gives me
//                                         Error: Cannot find module 'gun'
//	var Gun = require('./gun');        <-- Error: Cannot find module 'formidable'
//	var Gun = require('./gun/gun.js'); <-- Was working, until I switched to Express
//                                         and added gun.attach(app); now sends
//                                         TypeError: Object #<Gun> has no method 'attach'
	var Gun = require('./gun/gun.js');


/****************************************************
	Included in the actual "Try it now" steps 
****************************************************/

/* Try it now - step 1 */

	/* Connect to an existing data source in the server js file, e.g.
		var gun = Gun('https://gunjs.herokuapp.com/gun');
		OR
		var gun = Gun(location.origin + '/gun'); <-- DIDN'T WORK FOR ME 
		                                         <-- ReferenceError: location is not defined
		OR 
		var gun = Gun({ file: 'data.json' }).key('hello/world/data');
		OR
		var gun = Gun({
			file: 'data.json',
			s3: { // Optional!
				key: '', // AWS Access Key
				secret: '', // AWS Secret Token
				bucket: '' // The bucket you want to save into
			}
		});
		*/
	var gun = Gun({ file: 'data.json' }).key('hello/world/data'); 

	/* Save an initial object, e.g.
		gun.set({hello: "world"}).key('random/0gk7RVviW');
		OR
		gun.set({hello: "world!"}).key('hello/world/data');
		OR
		gun.set({hello: "world"});  <-- WRONG - NEEDS A KEY
		*/
	gun.set({hello: "world!"}).key('hello/world/data');

/* Try it now - step 2 */
	/* Load data in the main html file */
	/* Display stringified data into the main html file's body section */


/****************************************************
	NOT included in the actual "Try it now" steps 
****************************************************/

/* Server Option: Setup a basic node.js server  
	var http = require('http');
	http.createServer(function(req, res){
	  gun.load('my/first/data', function(err, data){
	    res.writeHead(200, {'Content-Type': 'application/json'});
	    res.end(JSON.stringify(data));
	  });
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');
	*/

/* Server Option: Setup an express.js server */
/* Install express package, e.g.
	sudo npm install express --save
	*/

gun.attach(app);
app.use(express.static(__dirname)).listen(port);

console.log('Server started on port ' + port + ' with /gun');



