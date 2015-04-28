/****************************************************
	NOT included in the actual "Try it now" steps 
****************************************************/


/* require GunDB in the server js file, e.g.
	var Gun = require('./gun/gun.js'); 
	*/
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
		var gun = Gun({ file: 'data.json' });
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
	var gun = Gun({ file: 'data.json' }); 

	/* Save an initial object, e.g.
		gun.set({hello: "world"}).key('random/0gk7RVviW');
		OR
		gun.set({hello: "world!"}).key('hello/world/data');
		OR
		gun.set({hello: "world"});
		*/
	gun.set({hello: "world!"});

/* Try it now - step 2 */
	/* Load data file in the main html file */
	/* Display stringified data into the main html file's body section */


/****************************************************
	NOT included in the actual "Try it now" steps 
****************************************************/

/* Setup a basic node.js server  */
var http = require('http');
http.createServer(function(req, res){
  gun.load('my/first/data', function(err, data){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');



