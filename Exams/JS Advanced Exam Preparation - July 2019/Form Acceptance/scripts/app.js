function acceptance() {
	const companyNameInput = document.querySelector('input[name="shippingCompany"]');
	const productNameInput = document.querySelector('input[name="productName"]');
	const quantityInput = document.querySelector('input[name="productQuantity"]');
	const scrapInput = document.querySelector('input[name="productScrape"]');
	const listOfproducts=document.querySelector('#warehouse');

	const addButton = document.querySelector('#acceptance');

	addButton.addEventListener('click', addProduct);

	function addProduct() {
		let companyName = companyNameInput.value;
		let productName = productNameInput.value;
		let quantity = quantityInput.value;
		let scrap = scrapInput.value;

		if (companyName === '' || productName === '' || quantity === '' || scrap === '') {
			clear();
			return;
		}
		quantity=Number(quantity);
		scrap=Number(scrap);

		if (Number.isNaN(quantity)||Number.isNaN(scrap)) {
			clear();
			return;
		}

		let total=quantity-scrap;

		if (total<=0) {
			clear();
			return;
		}

		let newDiv=document.createElement('div');
		let p=document.createElement('p');
		p.textContent=`[${companyName}] ${productName} - ${total} pieces`
		let button=document.createElement('button');
		button.setAttribute('type',button);
		button.textContent='Out of stock';
		button.addEventListener('click',deleteProduct);
		newDiv.appendChild(p);
		newDiv.appendChild(button);

		listOfproducts.appendChild(newDiv);	

		clear();
	}
	
	function deleteProduct(e){
		e.target.parentNode.remove();
	}

	function clear() {
		companyNameInput.value = '';
		productNameInput.value = '';
		quantityInput.value = '';
		scrapInput.value = '';
	}
}