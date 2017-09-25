import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component{

	constructor(){
		
		super()

		this.state = {
			gifs: []
			//searchStr: ''
		}

		// this.componentDidMount = this.componentDidMount.bind(this)
		this.submitHandlerFromContainer = this.submitHandlerFromContainer.bind(this)
	}


	componentDidMount(searchStr){
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=dc6zaTOxFJmzC`)
			.then(resp => resp.json())
			.then(json => {
				this.setState({
					gifs: json.data.slice(0, 9)
					//searchStr: this.event.target.value

				})
			})
	}

	submitHandlerFromContainer(searchStr){
		this.componentDidMount(searchStr)
	}

	render(){
		return(
			<div>
				<GifSearch onSubmit={this.submitHandlerFromContainer}/>
				<GifList gifList={this.state.gifs}/>
			</div>
			)
	}

}