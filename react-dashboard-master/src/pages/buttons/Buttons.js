
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Row,
  Col,
  Alert,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Badge,
  ListGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Table
} from 'reactstrap';

import Widget from '../../components/Widget';


const divStyle = {
  height: '900px',
  border: '5px red'
};

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          
        />
      </div>
    );
  }
}

class Buttons extends React.Component {

  constructor(props) {
    super(props);

    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
    this.toggleFour = this.toggleFour.bind(this);

    this.onRadioBtnClickOne = this.onRadioBtnClickOne.bind(this);
    this.onRadioBtnClickTwo = this.onRadioBtnClickTwo.bind(this);
    this.onCheckboxBtnClickOne = this.onCheckboxBtnClickOne.bind(this);
    this.onCheckboxBtnClickTwo = this.onCheckboxBtnClickTwo.bind(this);

    this.state = {
      dropdownOpenOne: false,
      dropdownOpenTwo: false,
      dropdownOpenThree: false,
      dropdownOpenFour: false,
      cSelectedOne: [2],
      cSelectedTwo: [1, 3],
      rSelectedTwo: 2,
      rSelectedOne: null,
    };
  }

  onRadioBtnClickOne(rSelectedOne) {
    this.setState({ rSelectedOne });
  }

  onRadioBtnClickTwo(rSelectedTwo) {
    this.setState({ rSelectedTwo });
  }

  onCheckboxBtnClickOne(selected) {
    const index = this.state.cSelectedOne.indexOf(selected);
    if (index < 0) {
      this.state.cSelectedOne.push(selected);
    } else {
      this.state.cSelectedOne.splice(index, 1);
    }
    this.setState({ cSelectedOne: [...this.state.cSelectedOne] });
  }

  onCheckboxBtnClickTwo(selected) {
    const index = this.state.cSelectedTwo.indexOf(selected);
    if (index < 0) {
      this.state.cSelectedTwo.push(selected);
    } else {
      this.state.cSelectedTwo.splice(index, 1);
    }
    this.setState({ cSelectedTwo: [...this.state.cSelectedTwo] });
  }

  toggleOne() {
    this.setState({
      dropdownOpenOne: !this.state.dropdownOpenOne,
    });
  }

  toggleTwo() {
    this.setState({
      dropdownOpenTwo: !this.state.dropdownOpenTwo,
    });
  }

  toggleThree() {
    this.setState({
      dropdownOpenThree: !this.state.dropdownOpenThree,
    });
  }

  toggleFour() {
    this.setState({
      dropdownOpenFour: !this.state.dropdownOpenFour,
    });
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">YOU ARE HERE</li>
          <li className="active breadcrumb-item">Calendar</li>
        </ol>

        <h1 className="page-title">Calendar </h1>
                  <MyApp ></MyApp>

<Row>
                  <Col >
            <Widget style="width: auto; height: 200px;" title="Events">

              <Alert  variant="warning">No Calendar Connected</Alert>

            
            </Widget>  {/* CALENDAR GOES HERE MUST TALK WITH KELLER WILLIAMS TO SET UP */}
          </Col>
</Row>
      </div>
    );
  }

}

export default Buttons;
