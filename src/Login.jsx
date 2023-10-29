import React  from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Button, Checkbox, Form, Input } from 'antd';
import { auth } from './firebase';
import { useContext } from 'react';
import App, { AppContext } from './App';

const UserDisplayName = (email) => {
    // Email address

// Extracting name before '@' symbol and domain name
var name = email.split('@')[0];
var domain = email.split('@')[1].split('.')[0];

// Concatenating name with domain using underscore
var formattedEmail = name + '_' + domain;

// Printing the formatted email address
return formattedEmail

}

const SignUp = (values, e) => {
    

    
    createUserWithEmailAndPassword(auth, values.EMAIL, values.password)
      .then((useCredential) => {
        // Update user's display name
        return updateProfile(useCredential.user, {
          displayName: UserDisplayName(values.username),
        })
          .then(() => {
              console.log("User registered successfully!");
              
            }).then(
                <App />
            )
            .catch((error) => {
                console.error("Error updating user profile: ", error);
            });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
        });
    };
    



    
    
const Login = () => {

      const { userLogin, setUserLogin } = useContext(AppContext);
    const OnFinish = (values, e) => {
          console.log('Success:', userLogin);
        
          signInWithEmailAndPassword(auth, values.EMAIL, values.password)
            .then((userCredential) => {
              setUserLogin(userCredential.user);
              // Set a key-value pair in localStorage
              

              console.log("User signed in successfully!", userCredential.user);
            })
            .catch((error) => {
              console.error("Error signing in: ", error.code, error.message);
              // Handle specific error cases if needed
            });
        };
        
        
        
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };

        // useEffect()

        return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={OnFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="EMAIL"
        name="EMAIL"
        rules={[
          {
            required: true,
            message: 'Please input your EMAIL!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login
