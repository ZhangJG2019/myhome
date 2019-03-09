//登录
import axios from 'axios'
import React from 'react'
import { withRouter } from 'react-router-dom'
import {
	Form,
	Icon,
	Button,Divider
} from 'semantic-ui-react'
import './login.css'

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}
	handleUsername=(e)=>{
		this.setState({
			username:e.target.value
		})
	}
	handlePassword=(e)=>{
		this.setState({
			password:e.target.value
		})
	}
	submit= async ()=>{
		// 获取表单数据
		//调用后端接口进行身份验证 http://47.96.21.88:8086/users/login
		let url = 'http://47.96.21.88:8086/users/login';
		let ret = await axios.post(url,{
			//验证通过后，后端会获取token信息
			uname:this.state.username,
			pwd:this.state.password
		});
		//客户端接收到token然后存储到sessionStorage中
		sessionStorage.setItem('mytoken',ret.data.data.token)
		// 获取history对象
		let { history } = this.props
		//跳转到主页面
		history.push('/home')
	}
	cancle=()=>{
	}
	render() {
		return (
			<div className="login-container">
				<div className="login-logo">
					<Icon name='home' size='huge' />
				</div>
				<div className="login-form">
					<Form>
						<Form.Input 
							fluid
							icon='user' 
							required 
							size='big' 
							iconPosition='left' 
							name='username'
							value={this.state.username}
							onChange={this.handleUsername}
							placeholder='请输入用户名...' 
						/>
						<Form.Input 
							fluid
							icon='user' 
							required 
							size='big' 
							iconPosition='left' 
							name='password'
							value={this.state.password}
							onChange={this.handlePassword}
							placeholder='请输入密码...' 
						/>
						<Button className="login-button" fluid color="green" onClick={this.submit}>登录</Button>
						<Button className="login-button" fluid color="green" onClick={this.cancle}>取消</Button>
						<Divider horizontal>---</Divider>
					</Form>
				</div>
				<div className="login-third">
					<Icon name='qq' size='big' />
					<Icon name='chat' size='big' />
				</div>
			</div>
		)
	}
}

export default withRouter(Login);