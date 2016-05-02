var Extractor = require('./index.js'),
    fs = require('fs');

var file = new Extractor();
file.setBuffer(fs.readFileSync('./cr_0KVG'));

var result = {
	moniker             : file.readBytes(4),
	name                : file.readLString(),
	mother              : file.readBytes(4),
	mother_name         : file.readLString(),
	father              : file.readBytes(4),
	father_name         : file.readLString(),
	birthday            : file.readLString(),
	birthplace          : file.readLString(),
	owner_name          : file.readLString(),
	owner_url           : file.readLString(),
	owner_notes         : file.readLString(),
	owner_email         : file.readLString(),
	state               : file.readLong(),
	gender              : file.readLong(),
	age                 : file.readLong(),
	epitapth            : file.readLString(),
	grave_picture       : file.readLong(),
	time_of_death       : file.readLong(),
	time_of_birth       : file.readLong(),
	time_of_adolescence : file.readLong(),
	is_death_registered : file.readLong(),
	genus               : file.readLong(),
	long_stage          : file.readLong(),
	chemicals_at_death  : file.readBytes(256)
};

console.log('Result:', result);