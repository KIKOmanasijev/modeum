import React, { Component, Fragment } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import Swal from 'sweetalert2';

class Register extends Component {
  state = {
    modal: false,
    fullName: '',
    username: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuth } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuth) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { fullName, username, password } = this.state;

    const newUser = {
      fullName,
      username,
      password
    };

    if (username.length < 5){
      Swal.fire({
        icon: "warning",
        title: "Username should be greater than 5 characters",   
        showConfirmButton: false,
        timer: 1500
      })
    }

    else if (password.length < 8){
      Swal.fire({
        icon: "warning",
        title: "Password should contain more than 8 characters",   
        showConfirmButton: false,
        timer: 1500
      })
    }

    else if (fullName.length < 2) {
      Swal.fire({
        icon: "warning",
        title: "Full name should contain more than 2 characters",   
        showConfirmButton: false,
        timer: 1500
      })
    }

    else {
      this.props.register(newUser);
    }
    
  };

  render() {
    return (
      <Fragment>
        <NavLink className="mr-2" onClick={this.toggle} href='#'>
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='fullName'
                  id='fullName'
                  placeholder='Full Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='username'>Username</Label>
                <Input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Register);