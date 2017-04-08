import React, { Component } from 'react';
 import DropDownMenu from 'material-ui/DropDownMenu';
 import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestBlood, isLoggedIn } from '../../actions/exampleAction';
import Avatar from 'material-ui/Avatar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };

  }
  componentDidMount() {
    this.props.requestBlood("AB+");
    console.log(this.props.loginData);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.donors);
  }

  handleBgroup(e, key) {
    e.preventDefault();
    console.log(key)
    // var don = [];
    this.setState({ value: 1 + key });
    var blood = e.target.childNodes[0].nodeValue;
    console.log(blood);
    this.props.requestBlood(blood);

  }



  donateForm(ev) {
    ev.preventDefault();
    browserHistory.replace('/donateform');
  }



  render() {




    return (

      <div>
        <h1>Home Page</h1>
        <br/>
        <button onClick={this.donateForm.bind(this) }>Donate Blood</button> 
        <br/>
        <br />
        <p style={{ fontSize: '20px' }}>Select your Blood Group </p>
         <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} style={{}} ref="blood"  >
          <MenuItem value={1} primaryText="Blood Group" disabled />
          <MenuItem value={2} primaryText="A+" />
          <MenuItem value={3} primaryText="B+" />
          <MenuItem value={4} primaryText="AB+" />
          <MenuItem value={5} primaryText="O+" />
          <MenuItem value={6} primaryText="O-" />
          <MenuItem value={7} primaryText="AB-" />
          <MenuItem value={8} primaryText="B-" />
          <MenuItem value={9} primaryText="A-" />
        </DropDownMenu>

        <br />
        <center> <p style={{ fontSize: '20px', color: 'red' }}>Available Donors: </p> </center>



       <Table  adjustForCheckbox={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Image</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Blood Group</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.donors.map(function (val, i) {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{i + 1}</TableRowColumn>
                  <TableRowColumn> <Avatar src={val.photo} /></TableRowColumn>
                  <TableRowColumn>{val.name}</TableRowColumn>
                  <TableRowColumn>{val.email}</TableRowColumn>
                  <TableRowColumn>{val.blood}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ isLoggedIn, requestBlood }, dispatch);
}
function mapStateToProps({ isLogged, donors, loginData }) {
  return { isLogged, donors };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
