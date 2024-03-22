import React  from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Button, Checkbox, Form, Input } from 'antd';
import { auth, db } from './firebase';
import { useContext } from 'react';
import App, { AppContext } from './App';
import { ref, set } from 'firebase/database';

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
        }
        )
          .then(() => {
              console.log("User registered successfully!");
              
            }).then(
              console.log('fldkgk')
            )
            // .then(
            //     <App />
            // )
            .catch((error) => {
                console.error("Error updating user profile: ", error);
            });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
        });

        // set(ref(db), {
          

        // }).then(alert('submitted')).catch(err => alert(err))
    };
    



    
    
const Login = () => {

      const { userLogin, setUserLogin } = useContext(AppContext);
      const OnFinish = (values, e) => {
        console.log('Success:', userLogin);
        
        signInWithEmailAndPassword(auth, values.EMAIL, values.password)
          .then((userCredential) => {
            setUserLogin(userCredential.user);
            localStorage.setItem('UserLogin', JSON.stringify(userCredential.user));
            const email = userCredential.user.email.replace('.', '_');
      
            // Use set() to add data to the database
            // return set(ref(db, email), {
            //   bls: 1,
            //   VFS: 1,
            //   CANADA: 1,
            //   TLS: 1
            // })
            // .then(() => {
            //   // Code to execute when the data is successfully submitted
            //   console.log("User signed in successfully!");
            // })
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
          <div className="Form">

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
      </Form.Item>
        <Checkbox>Remember me | </Checkbox>
        <a target='_blank' href='https://wa.me/+213699326406/?text=Im%20interested%20in%20creating%20an%20account%20in%20the%20User%20Managemnt%20System'>| Create Accounts ?</a>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
        <Button id='submitButton' shape="round" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
  );
}

export default Login
