// eslint-disable-next-line no-undef
const config = require('../../config');

test('Check the response status code', async () => {
let actualStatus;
try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/4/complete`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
            'Authorization': 'Bearer jknnFApafP4awfAIFfafam2fma'
			},
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
expect(actualStatus).toBe(200);
});




test('Check the response body contains true value of the order complete', async () => {
let makeOrderResult;
let orderStatus;
try {
		response = await fetch(`${config.API_URL}/api/v1/orders/4/complete`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json',
            'Authorization': 'Bearer jknnFApafP4awfAIFfafam2fma'
			},
		});
		makeOrderResult = await response.json();
	} catch (error) {
		console.error(error);
	}
    orderStatus = makeOrderResult['ok'];
    expect(orderStatus).toBeTruthy();
});