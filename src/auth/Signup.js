import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setToken('test')
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input 
                            id="username" 
                            type="text" 
                            name="username" 
                            placeholder="enter username" 
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            id="su_password" 
                            type="password" 
                            name="password" 
                            placeholder="enter password" 
                            onChange={this.handleChange}
                            required
                        />
                    </FormGroup>
                    <Button type="submit"> Submit </Button> 
                </Form>
            </div>
        )
    }
}

export default Signup;