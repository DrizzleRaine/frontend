import XHR from '../lib/request'

export default {
	/**
	 * Perform a call to the server and determine if we're still 
	 * logged in. Because we are using cookie-based sessions, we can't
	 * determine when our session would expire client-side. So we just
	 * check.
	 **/
	getStatus() {
		return Promise.resolve(Math.random() > 0.8 ? { username: 'xori' } : null)
		// return XHR('GET', `${uri}/login`, {
	  //     method: 'GET',
	  //     headers: {
	  //       'Content-Type': 'application/json'
	  //     },
	  //     credentials: 'include'
	  //   }).then(res => {
	  //     if(res.status < 400) return res.json()
	  //     else return null
	  //   })
	},

	/**
	 * Submit the login to the server 
	 **/
	loginAs({username, password}) {
		return new Promise((res, rej) => {
			let success = Math.random() > 0.2
			
		})
	}
}