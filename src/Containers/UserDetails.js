import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(
                <div>
                <h2>select users..</h2>
                </div>
            );
        }
        return(
           <div>
             <ul>
                <li><label> Name:</label>{this.props.user.name}</li>
                <li><label> CompanyCode:</label>{this.props.user.companyCode}</li>
                <li><label> SubSeriesId:</label>{this.props.user.subSeriesId}</li>
                <li><label> SubSeriesName:</label>{this.props.user.subSeriesName}</li>
                <li><label> SeriesName:</label>{this.props.user.seriesName}</li>
                <li><label> SeriesId:</label>{this.props.user.seriesId}</li>
                <li><label> Id:</label>{this.props.user.id}</li>
            </ul> 
           </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect (mapStateToProps)(UserDetail) ;