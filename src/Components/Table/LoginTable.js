import React from 'react';
import { Table } from 'reactstrap';
import Login from "../Login/Login";
// import Logout from "../Logout/Logout";
// import UserCard from "../UserCard/UserCard";
import LoginModal from "../Modal/Modal";
import Register from "../Register/Register";




const LoginTable = (props) => {
  return (
    
    <Table bordered>
      <thead>
        <tr>
       
          <th>Existing Users</th>
          <th>New Users</th>
         
        </tr>
      </thead>
      <tbody>
      <React.Fragment>
        <tr>
         <td>
           
         </td>
         <td>

         <LoginModal />
         </td>
        </tr>
        </React.Fragment>
    </tbody>
    </Table>
  );
}

export default LoginTable;