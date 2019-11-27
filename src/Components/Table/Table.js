import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class InfoTable extends React.Component {
  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Should you use it?</Th>
            <Th>Yes/No</Th>
            <Th>Why you should?</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Do you know what you bag?</Td>
            <Td>No</Td>
            <Td>All registered users can track current bagged disc's.</Td>
          </Tr>
          <Tr>
            <Td>Ever wonder what disc you are missing?</Td>
            <Td>Yes</Td>
            <Td>Allows users to see what disc could transform their game.</Td>
          </Tr>
          <Tr>
            <Td>
              Do you know what each brand has that match current bagged molds?
            </Td>
            <Td>No</Td>
            <Td>Build A Bag will allow you to view other like molds.</Td>
          </Tr>
          <Tr>
            <Td>Have mulitple bags?</Td>
            <Td>Yes</Td>
            <Td>Users will be able to store multiple bags!</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
}

export default InfoTable;
