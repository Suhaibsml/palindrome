let str=prompt('Enter a string to check palindrome');
function isPalindrome(str) {
	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	if (rev == str) {
		//console.log("It is a palindrome");
        return 'Palindrome'
	} else {
		//console.log("It is not a palindrome");
        return 'not a palindrome'
	}
}
console.log(isPalindrome(str));

