import axios from 'axios';
import '../../../mock/login';
import * as constants from './actionTypes';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login', {
      // 参数 accout password
    }).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else {
				console.log('登陆失败')
			}
		})
	}
}