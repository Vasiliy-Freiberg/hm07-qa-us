// eslint-disable-next-line no-undef
const config = require('../../config');

test('Check the response status code', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=My%20new%20kito`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('Check the response body contains name of the new kit', async () => {
	let newKitData;
	let newKitName;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=My%20new%20kito`);
		newKitData = await response.json();
	} catch (error) {
		console.error(error);
	}
    newKitName = "My new kito";
    expect(newKitName).toEqual(newKitData["name"]);
});


test('Check the response body contains ID of the new kit', async () => {
	let newKitData;
	let newKitId
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/search?name=My%20new%20kito`);
		newKitData = await response.json();
	} catch (error) {
		console.error(error);
	}
    newKitId = newKitData['id'];
    expect(newKitId).toBeDefined();
});