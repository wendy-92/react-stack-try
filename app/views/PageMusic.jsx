import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MusicListActions } from '../components/music/redux';
import MusicList from '../components/music/musicList';


class PageMusic extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
    }

    render(){
        const { data = [] } = this.props;
        return(
            <div>
               <MusicList
                  {...this.props.MusicList}
                  {...this.props.MusicListActions}
               />
            </div>

        )
    }
}

export default connect(state => ({
    MusicList: state.music.MusicList
}), dispatch => ({
    MusicListActions: bindActionCreators(MusicListActions, dispatch)
}))(PageMusic);
