import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

const LoginModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Login/Register
      </Button>
      <Router>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Register Your Account</ModalHeader>
          <React.Fragment>
            <Switch>
              <Route path="/login">
               {props.token === "" ? (
          <Login setToken={props.setToken} />
        ) : (
          <Logout
            setToken={props.setToken}
            token={props.token}
          />
        )}
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </React.Fragment>
          <ModalFooter>
            
            <Link to="/login">Back to Login</Link>
            <Link to="/register">Click to Register</Link>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Router>
    </div>
  );
};

export default LoginModal;
