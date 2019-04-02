//lets start

let fs = require('fs');
let args = {
	'-h': commandHelper,
	'-r': readFile
};

function commandHelper(){
	console.log(args);
}

function readFile(file){
	if(file && file.length){
		console.log('Reading:', file);
		console.time('read'); // start recording time

		let stream = fs.createReadStream(file);
		stream.on('end', ()=>{
			console.log('\n');
			console.timeEnd('read'); // end timer
		});
		stream.pipe(process.stdout);
	} else {
		console.error('Please provide file with -r option');
		process.exit(1);
	}
	
}

let flag = process.argv[2];
let fileName = process.argv[3];

if(!flag){
	console.log('Usage timer.js [-h/-r] [filename] \n\n');
	process.exit(1);
}

switch(flag){
	case '-h':
		commandHelper();
		break;

	case '-r':
		readFile(fileName);
		break;
}
//end

