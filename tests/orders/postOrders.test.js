const config = require('../../config');

const requestBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 2
        }
    ]
}

test('Check the response status code', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`,{
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
    expect(actualStatus).toBe(200);
});


test('Check the response body contains "deliveryTime" equals the current time', async () => {
	let newOrderData;
	let deliveryTime;
    try {
		response = await fetch(`${config.API_URL}/api/v1/orders`,{
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		newOrderData = await response.json();
	} catch (error) {
		console.error(error);
	}
    deliveryTime = newOrderData["deliveryTime"];
    expect(deliveryTime).toMatch("20~25");
});