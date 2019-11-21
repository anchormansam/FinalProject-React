import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  setLogin(token) {
    this.props.setTokenState(token);
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
              <Login setToken={this.props.setTokenState} />
              ) : (
                <Register setToken={this.props.setTokenState}/>
                )}
            <button onClick={this.props.setLogin}>login/register</button>
          </>
        ) : (
          <Logout
          setToken={this.props.setTokenState}
          token={this.props.parentState.token}
          />
          )}
    
      </React.Fragment>
    );
  }
}

export default LoginModal;
