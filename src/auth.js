import React from 'react'
import {Route,Redirect} from 'react-router-dom'

//权限验证
function AuthCheck(props){
	console.log(props)
	let { path,component: Component } = props;
	// 首先先判断用户是否登录
	let isLogin = sessionStorage.getItem('mytoken')?true:false;
	return (
	  <Route path={path} render={()=>{
		  // 这个位置可以进行验证
		//   如果登陆了，就正常显示要访问的组件，否则就重定向到登录页
		let com = isLogin?<Component/>:<Redirect to="/"/>
		// 此处可进行具体验证
		return com;
	  }}/>
	);
  }
  export default AuthCheck;