import React from 'react';
import { Table } from 'reactstrap';

import cx from 'classnames';

import styles from './Clients.module.scss';

import mock from './mock';

const Clients = () => {
  return (
    <div>
      Tha clients page

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Realtor</th>
            <th>Street Address</th>
            <th>Family Members and Birthdays</th>
          </tr>
        </thead>
        <tbody>
          {mock && mock.clients && mock.clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone_number}</td>
              <td>{client.realator_name}</td>
              <td>{client.street_address}</td>
              <td>{client.family_members.map((member, index) => (
                <span key={index}>
                  <span>
                    <span>{member.name}:</span> <span>{member.birthday}</span>
                  </span>
                  <br />
                </span>
              ))}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Clients;