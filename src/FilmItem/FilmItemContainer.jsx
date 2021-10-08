import React from "react";
import { connect } from "react-redux";
import FilmItem from "./FilmItem";
import { getFilmInfo,clearFilmInfo } from './../redux/film-reducer';
import { withRouter } from "react-router";

class FilmItemContainer extends React.Component {
    componentDidMount() {
        this.props.getFilmInfo(this.props.match.params.filmId);
    }
    componentWillUnmount() {
        this.props.clearFilmInfo();
    }
    render() {
        return <FilmItem filmInfo={this.props.filmInfo} />
    }
}

const mapStateToProps = (state) => ({
    filmInfo: state.filmPage.filmInfo,
})
let withUrlContainer = withRouter(FilmItemContainer);
export default connect(mapStateToProps, { getFilmInfo, clearFilmInfo })(withUrlContainer);