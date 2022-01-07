import React from 'react'

class AddAlpacaPhoto extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            alpacaName: props.alpacaName,
            photo: null
        };
    }

    render(){
        return(
            <h2>Alpaca: {this.state.alpacaName}</h2>
        );
    }
}

export default AddAlpacaPhoto;