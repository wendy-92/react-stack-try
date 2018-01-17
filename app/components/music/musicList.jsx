import React from 'react';
import {
    incrementAsync
} from './redux';


class MusicList extends React.PureComponent{
    constructor(props){
        super(props);
        
    }

    componentWillMount() {
        console.log(incrementAsync, this.props);
        this.props.incrementAsync();
    }
   
    
    render(){
        const { data = [] } = this.props;
        return(
            <div>
                
            </div>

        )
    }
}

export default MusicList;
