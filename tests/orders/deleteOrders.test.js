// eslint-disable-next-line no-undef
const config = require('../../config');

test('Check the response status code', async () => {
	let actualStatus;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/orders/6`, {
				method: 'DELETE',
			});
	actualStatus = response.status;
		} catch (error) {
			console.error(error);
		}
	expect(actualStatus).toBe(200);
	});


	test('Check the response body contains true value of the order delete', async () => {
		let response ;    
		try {
				response = await fetch(`${config.API_URL}/api/v1/orders/6`, {
					method: 'DELETE',
				});
			} catch (error) {
				console.error(error);
			}
			const deleteOrderResult = await response.json();
			const deleteOrderStatus = deleteOrderResult['ok'];
			expect(deleteOrderStatus).toBeTruthy();
		});