import React, { Fragment } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentAdd from '../../components/note-add/note-add.component';
import { selectCurrentTodo } from '../../redux/todo/todo.selectors';
import DetailsHeader from '../../components/details-header/details-header.component';
import NotesList from '../../components/notes-list/notes-list.component';
import { ReactComponent as BackButton } from '../../assets/back-button.svg';

import './todo-details.style.scss';

const TodoDetailsPage = ({ current, history }) => {
  console.log(current);
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
      <NotesList />
      <CommentAdd />
    </Fragment> 
  )
}

const mapStateToProps = createStructuredSelector({
  current: selectCurrentTodo
})

export default withRouter(connect(mapStateToProps)(TodoDetailsPage));