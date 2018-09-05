import createBrowserHistory from 'history/lib/createBrowserHistory'
import login from './login'

export default {
	history: createBrowserHistory(),
	login,
}