// eslint-disable-next-line no-undef
const config = require('../../config');

test('Check the response status code', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('Check the response body contains name of the warehouses', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	} catch (error) {
		console.error(error);
	}
    const warehousesList = await response.json();
    const warehousesName = "Everything You Need";
    expect(warehousesName).toEqual(warehousesList[0]["name"]);
});