import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from '../TaskList/TaskList';

export const PureHomeScreen = ({error}) => {

    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"/>
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>

        )
    }

    else {
        return (
            <div className="page lists-show">
                <TaskList/>
            </div>
        )
    }
}

PureHomeScreen.propTypes = {
    error: PropTypes.string,
};

PureHomeScreen.defaultProps = {
    error:null,
};

export default connect(({error}) => ({error}))(PureHomeScreen);
