//登录
import React from 'react'
import {
	Form,
	Icon,
	Button,Divider
} from 'semantic-ui-react'
import './login.css'


class Login extends React.Component {
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
							placeholder='请输入用户名...' 
						/>
						<Form.Input 
							fluid
							icon='user' 
							required 
							size='big' 
							iconPosition='left' 
							name='username'
							placeholder='请输入密码...' 
						/>
						<Button className="login-button" fluid color="green">登录</Button>
						<Button className="login-button" fluid color="green">取消</Button>
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

export default Login;