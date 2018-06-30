import axios from 'axios'

const baseURL = "http://127.0.0.1:8080/"
var header = function(){
	return {headers: {'x-access-token': localStorage.getItem("token")}}
}

let api = {
	signup: function(data){
		let url = baseURL + "api/register"
		return axios.post(url,data)
	},
	login: function(data){
		let url = baseURL + "api/login"
		return axios.post(url,data)
	}
}