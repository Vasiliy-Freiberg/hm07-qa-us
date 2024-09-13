// eslint-disable-next-line no-undef
const config = require('../../config');

test('Check the response status code', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/6`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('Check the response body contains order details', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/orders/6`);
	} catch (error) {
		console.error(error);
	}
    const newOrderData = await response.json();
    const productListDetails = [{"id": 1, "quantity": 2}];
    expect(newOrderData).toMatchObject(productListDetails);
});