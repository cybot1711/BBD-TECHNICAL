/** 
 * Configure your endpoints
*/
const accounts = require('./controllers/accounts.json');

module.exports = function () {
	return {
		accounts,
		// getAccount: accNumber => accounts.filter(account => account.account_number === accNumber) 	
	}
};