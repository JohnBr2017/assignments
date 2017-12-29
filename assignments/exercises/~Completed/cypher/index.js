function cipher(str, shift) {
	let output = "";
	shift = shift % 26;
	for (let i = 0; i < str.length; i++) {
		output += String.fromCharCode((str.charCodeAt(i) + shift) % 122 + 97);
	}
	return output;
}
console.log(cipher("xyz", 10))

var caesarShift = function (str, amount) {
	if (amount < 0)
		return caesarShift(str, amount + 26);
	var output = '';
	for (var i = 0; i < str.length; i++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += c;
	}
	return output;
};
console.log(caesarShift("xyz", 10))
