function solve() {
	let input = document.querySelector('#input').value;
	let output = document.querySelector('#resultOutput');

	output.textContent = decode(input);

	function decode(data) {
		let sum = sumDigits(data);
		let digit = sumDigits(sum.toString());
	
		while (digit > 9) {
			digit = sumDigits(digit.toString());
		}
	
		function sumDigits(num) {
			return num.split('')
				.map(x => Number(x))
				.reduce((sum, e) => sum + e, 0);
		}
	
		data = data.slice(digit, data.length - digit);
	
		let regex = /\d{1,8}/g;
		let matched = data.match(regex);
		let result = [];
		matched.forEach(bin => {
			result.push(String.fromCharCode(parseInt(bin, 2)));
		});
		
		return result.filter(x => x.match(/[A-Za-z ]/)).join('');
	}
}



