import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function LoginPage() {
    const dispatch = useDispatch();  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} name="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}