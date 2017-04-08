import React from 'react';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
 import MenuItem from 'material-ui/MenuItem';
// import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitForm, isLoggedIn } from '../../actions/exampleAction';


export class DonateForm extends React.Component{
 constructor(props) {
    super(props);

    this.state = {
        value: 1,
        blood: '',
  
    };
  }



    submit(e){
        e.preventDefault();
        
        const newDonor = {
         name : this.props.loginData.displayName,
         email :this.props.loginData.email,
         weight : this.refs.weight.value,
         address : this.refs.address.value,
         
         blood : this.state.blood,
         photo: this.props.loginData.photoURL
         
         
        }
        console.log(newDonor, this.state.blood);
        
        this.props.submitForm(newDonor, this.state.blood);
    }

   handleBgroup(e,key){ 
    e.preventDefault();
    this.setState({value: key+1,
    blood: e.target.childNodes[0].nodeValue});
    console.log(this.state.blood);
}

    render(){

//         const style = {
//   height: 340,
//   width: 320,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

        return(

      <div>
        
            <h1>Donor Form</h1>
        <form onSubmit={this.submit.bind(this)}>

          <br />
           <h4>Fill the form with confirmation</h4>

           <br />
          <input placeholder="Your weight" type="number"  ref="weight" required="required"/>          
          <br />
          <input placeholder="Your address"type="commentbox"  ref="address" required="required"/>
          <br  />
          <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood"  style={{width: 200}} required="required">
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

        <br /><br />
          <button type="submit">Submit</button>

        </form>
      </div>
     
        )
    }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({isLoggedIn, submitForm}, dispatch);
}
function mapStateToProps({isLogged,loginData}){
  return {isLogged,loginData};
}
export default connect(mapStateToProps, mapDispatchToProps)(DonateForm);