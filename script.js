// complete the given function

function palindrome(str){
 let first =0;
	let last =str.length-1;
	while(first<=last){
		if(str[first].toLowerCase()!=str[last].toLowerCase()){
			return false;
		}
		first++;
		last--;
	}
	return true;
}
module.exports = palindrome
