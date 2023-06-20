import React, { Component } from 'react'
import { Button, Form, Input } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import { reqLogin } from '../../api';

import './login.less';
import logo from './images/logo.png'

 export default class Login extends Component {
  onFinish = (values) => {
    const {username, password} = values
    reqLogin(username, password).then(response =>{
      console.log(response.data);
    }).catch(err => console.error(err));
  }
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  render() {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo" />
          <h1>React项目:后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登陆</h2>
          <Form
            name="basic"
            className='basic'
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {required: true,message: '请输入你的用户名!',},
                {min:4,message: '用户名至少4位',},
                {max:12,message: '用户名最多12位',},
                {pattern:/^[a-zA-z0-9_]+$/,message:'用户名必须是英文、数字或下划线组成'}
              ]}
              
            >
              <Input placeholder='用户名'  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>}/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {required: true,message: '请输入你的密码!'},
                {min:4,message: '密码至少4位',},
                {max:12,message: '密码最多12位',},
                {pattern:/^[a-zA-z0-9_]+$/,message:'密码必须是英文、数字或下划线组成'}
              ]}
            >
              <Input.Password placeholder='密码' prefix={<LockOutlined  style={{ color: 'rgba(0,0,0,.25)' }}/>}/>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" className='login-primary'>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

