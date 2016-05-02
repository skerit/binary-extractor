# Binary-Extractor

Extract data from a buffer.
For now written for "Creatures 2" binary files.

## Installation

    $ npm install binary-extractor

## Example

When you know the format of the file, you can consume data like so:

```js
var file = new BinaryExtractor();

// Read in the creatures history file example
file.setBuffer(fs.readFileSync('./cr_0KVG'));

var result = {
	// Read bytes, return buffer
	moniker             : file.readBytes(4),

	// Read string prefixed with length
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

```

Outputting this result object will give you:

```
{ moniker: <Buffer 30 4b 56 47>,
  name: 'Quinto',
  mother: <Buffer 38 41 44 52>,
  mother_name: 'Ophelia',
  father: <Buffer 36 47 52 41>,
  father_name: 'Pacey',
  birthday: '13:19 Apr 28 2016',
  birthplace: 'The birthplace',
  owner_name: '',
  owner_url: '',
  owner_notes: '',
  owner_email: '',
  state: 2,
  gender: 1,
  age: 0,
  epitapth: '',
  grave_picture: 4294967295,
  time_of_death: 0,
  time_of_birth: 1461842346,
  time_of_adolescence: 0,
  is_death_registered: 0,
  genus: 1,
  long_stage: 0,
  chemicals_at_death: <Buffer 00 00 00 00 00 00 00 ... >
}

```