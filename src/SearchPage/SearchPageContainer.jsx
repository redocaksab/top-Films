import React from "react";
import { connect } from "react-redux";
import SearchPage from "./SearchPage";
import { getFilms, clearState } from './../redux/search-reducer';

class SearchPageContainer extends React.Component {
    componentWillUnmount() {
        this.props.clearState();
    }

    render() {
        return <SearchPage
            films={this.props.films}
            getFilms={this.props.getFilms}
        />
    }
}
const mapStateToPtops = (state) => ({
    films: state.searchPage.films,
});

export default connect(mapStateToPtops, { getFilms, clearState })(SearchPageContainer);