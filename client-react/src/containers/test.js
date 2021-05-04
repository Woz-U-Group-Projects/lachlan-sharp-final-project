import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Test extends Component {

    render() {
        return (
            <div>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Test);