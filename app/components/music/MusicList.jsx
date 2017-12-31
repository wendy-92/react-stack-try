import React from 'react';


class MusicList extends React.PureComponent{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log('****');
        this.props.getMusicList();
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
