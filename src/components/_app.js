/*
import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class App extends React.Component {
	state = {
    	isShowingDialog: false,
  	}

	handleClick = ()=> this.setState({isShowingDialog: true})
	handleClose = ()=> this.setState({isShowingDialog: false})

	render() {
		return <div onClick={this.handleClick}>
		{
			<a ClassName="button">
				<span>Press Button</span>

				{this.state.isShowingDialog ?
					<ModalContainer onClose={this.handleClose}>
						<ModalDialog onClose={this.handleClose}>
							<h1>Dialog Content</h1>
							<p>More Content. Anything goes here</p>
						</ModalDialog>
					</ModalContainer>
				: null}
			</a>
		};
	}
}
*/


import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class App extends React.Component {
	constructor() {
		super();
		this.setState({isShowingModal: false})
		console.log('state :', this.state);
	}

	handleClick() {
		console.log('state :', this.state);
		this.state.isShowingModal = true;
	} 

	handleClose() {
		console.log('state :', this.state);
		this.state.isShowingModal = false;
	} 

	render() {
		return <div onClick={this.handleClick}>
		  {
		    this.state.isShowingModal &&
		    <ModalContainer onClose={this.handleClose}>
		      <ModalDialog onClose={this.handleClose}>
		        <h1>Dialog Content</h1>
		        <p>More Content. Anything goes here</p>
		      </ModalDialog>
		    </ModalContainer>
		  }
		  モーダルひょうじ
		</div>;
	}
}
