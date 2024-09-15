// eslint-disable-next-line no-undef
const config = require('../../config');

const requestBody = {
    "name": "My new kito",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        }
    ]
}

test('Check the response status code', async () => {
let actualStatus;
try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
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




test('Check the response body contains true value of the kit edit', async () => {
let editKitResult;
let editStatus;
try {
		response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		editKitResult = await response.json();
	} catch (error) {
		console.error(error);
	}
    editStatus = editKitResult['ok'];
    expect(editStatus).toBeTruthy();
});