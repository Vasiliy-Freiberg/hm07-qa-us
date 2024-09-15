const config = require('../../config');

const requestBody = {
    "cardId": 2,
    "name": "My new kito"
}

test('Check the response status code', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`,{
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(201);
});


test('Check the response body contains "producstList" equals Null', async () => {
	let newKitData;
	let productsListValue;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits`,{
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		newKitData = await response.json();
	} catch (error) {
		console.error(error);
	}
    productsListValue = newKitData['productsList'];
    expect(productsListValue).toBeNull();
});