import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  setLogin() {
    var token = localStorage.getItem('token');
    var userData = localStorage.getItem('userData');
    var userProfile = localStorage.getItem('userProfile');
    this.props.setSession(token,userData,userProfile);

  }

  render() {
    const Modal_testing = props => {
      const { buttonLabel, className } = props;

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

      return (
        <div>
          <Button color="danger" onClick={toggle}>
            Login/Register
          </Button>

          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Register Your Account</ModalHeader>

            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    };

    return (
      <React.Fragment>
   

        {!this.props.parentState.token ? (
          <>
            {this.props.parentState.toggleLogin ? (
              <Login setToken={this.props.setSession} />
              ) : (
                <Register setToken={this.props.setSession}/>
                )}
            <button onClick={this.props.setLogin}>login/register</button>
          </>
        ) : (
          <Logout
          setToken={this.props.setSession}
          token={this.props.parentState.token}
          />
          )}
    
      </React.Fragment>
    );
  }
}

export default LoginModal;
