import React from 'react'

export default class Gif extends React.Component{

	render(){

		return(
			<iframe src={this.props.gif.embed_url} />
			)
	
	}
}