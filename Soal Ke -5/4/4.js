function reverseWords(sentence){
	let words = sentence.split(" ").reverse(); 
	let string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; 
	return string;
}

console.log(reverseWords("plugin cinta saya"));

function reverseString1(str) {
	var currentString = str;
	var newString = '';
   for (let i = str.length - 1; i >= 0; i--) {
	 newString = newString + currentString[i];
	}
	
	return newString;
   }
   console.log(reverseString1('plugin cinta saya'));