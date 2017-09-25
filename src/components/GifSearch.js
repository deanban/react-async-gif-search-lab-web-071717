import React from 'react'

export default class GifSearch extends React.Component{

	constructor(){
		super()

		this.state = {
			searchStr: ''
		}

		this.changeHandler = this.changeHandler.bind(this)
		this.submitHandler = this.submitHandler.bind(this)

	}

	changeHandler(event){
		console.log(event.target.value)
		this.setState({
			searchStr: event.target.value
		})
	}

	submitHandler(event){
		event.preventDefault()
		// console.log(this.state.searchStr)
		this.props.onSubmit(this.state.searchStr)
	}



	render(){
		return(
			<div id="wrap">
				<form action="" autoComplete="on" onSubmit={this.submitHandler}>
				  	<input id="search" name="search" type="text" value={this.state.searchStr} onChange={this.changeHandler} placeholder="What're we looking for ?"/>
				  	<input id="search_submit" type="submit"/>
				</form>
			</div>
			)
	}



}