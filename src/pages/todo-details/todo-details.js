import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentAdd from '../../components/comment-add/comment-add.component';
import DetailsHeader from '../../components/details-header/details-header.component';
import { ReactComponent as BackButton } from '../../assets/back-button.svg';

import './todo-details.style.scss';

const TodoDetailsPage = ({ current, history }) => {
  if (current === null) {
    return (
      <Fragment>
        <BackButton onClick={() => history.goBack()} className="back-btn" />
        <h3 className="warning-msg">You can't access to this page without selecting one task.</h3>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <BackButton onClick={() => history.goBack()} className="back-btn" />
      <DetailsHeader />
      <CommentAdd />
    </Fragment> 
  )
}

const mapStateToProps = state => ({
  current: state.todo.current
})

export default withRouter(connect(mapStateToProps)(TodoDetailsPage));