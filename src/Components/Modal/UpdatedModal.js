import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import "./UpdatedModal.css";


export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.updateState = this.updateState.bind(this);
  }

  setLogin() {
    var token = localStorage.getItem("token");
    var userData = localStorage.getItem("userData");
    var userProfile = localStorage.getItem("userProfile");
    this.props.setSession(token, userData, userProfile);
  }

  updateState() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <React.Fragment>
        {!this.props.parentState.token ? (
        <>
          <Button id="loginButton" onClick={this.updateState} className="text-light">

              Login/Register

          </Button>
          <Modal isOpen={this.state.isOpen} toggle={this.updateState}>
          <ModalHeader color="secondary" id="header" toggle={this.updateState}>
            Welcome!
          </ModalHeader>
          <ModalBody className="" id="body">
            
            {!this.props.parentState.token ? (
              <>
                {this.props.parentState.toggleLogin ? (
                  <Login setToken={this.props.setSession} />
                ) : (
                  <Register setToken={this.props.setSession} />
                )}
                <button onClick={this.props.setLogin}>login/register</button>
              </>
            ) : (
              <Logout
                setToken={this.props.setSession}
                token={this.props.parentState.token}
              />
            )}

            
          </ModalBody>
          {/* <ModalFooter id="footer"> */}
            <Button color="secondary" onClick={this.updateState}>
              Cancel
            </Button>
          {/* </ModalFooter> */}
        </Modal>
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
