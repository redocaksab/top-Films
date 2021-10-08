import React from "react";
import { connect } from 'react-redux';
import Top20Page from "./Top20Page";
import { getTop } from './../redux/top-reducer';

class Top20PageContainer extends React.Component {
    componentDidMount() {
        this.props.getTop();
    }
    render() {
        return <Top20Page top={this.props.top} />
    }
}

const mapStateToProps = (state) => ({
    top: state.top20Page.top,
})

export default connect(mapStateToProps, { getTop })(Top20PageContainer);