import React from 'react'
import Gif from './Gif'

export default class GifList extends React.Component{

	//const allGifs = this.props.gifList.map(gif => {<Gif{...gif}/>})

	render(){
		// console.log(this.props.gifList)
		return(
			<ul>
				{this.props.gifList.map((gif,index) =>{ 

					return <Gif key={index} gif={gif} />} )}
			</ul>
			)
	}
}