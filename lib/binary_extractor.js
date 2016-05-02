var Blast = require('protoblast')(false),
    Be,
    Fn = Blast.Collection.Function,
    fs = require('fs');

/**
 * The BinaryExtractor class
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Be = Fn.inherits('Informer', 'Develry', function BinaryExtractor() {

	// The buffer
	this.buffer = null;

	// The current position
	this.index = 0;
});

/**
 * Set the buffer to use
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Buffer}   buffer
 */
Be.setMethod(function setBuffer(buffer) {

	// Set the new buffer to use
	this.buffer = buffer;

	// Reset the index
	this.index = 0;
});

/**
 * Read string prefixed with the length,
 * like in the Creatures games.
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @return   {String}
 */
Be.setMethod(function readLString() {

	var length,
	    string,
	    end;

	// Get the length of the cstring
	length = this.buffer[this.index];

	// Increment the index
	this.index += 1;

	// @TODO: do something when length is 255, or so

	// Calculate the end index
	end = this.index + length;

	// Get the actual string
	string = this.buffer.slice(this.index, end).toString();

	this.index = end;

	return string;
});

/**
 * Read LONG unsigned integer (little endian)
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @return   {Number}
 */
Be.setMethod(function readLong() {

	var number;

	// Parse the unsigned 32-bit long little-endian integer
	number = this.buffer.readUInt32LE(this.index);

	// Increase the index by 4
	this.index = this.index + 4;

	return number;
});

/**
 * Read a number of bytes
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Integer}  size
 *
 * @return   {Buffer}
 */
Be.setMethod(function readBytes(size) {

	var result,
	    end;

	// Calculate the ending position
	end = this.index + size;

	// Extract a new piece of buffer
	result = this.buffer.slice(this.index, end);

	// Set the new index
	this.index = end;

	return result;
});

/**
 * Read a single byte
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @return   {Number}
 */
Be.setMethod(function readByte() {

	var result;

	// Get the byte
	result = this.buffer[this.index];

	// Increment the index
	this.index++;

	return result;
});

module.exports = Be;