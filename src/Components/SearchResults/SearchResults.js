import React, { Component } from "react";
import "./SearchResults.css";
import DetailCard from "../DetailCard/DetailCard";


class SearchResults extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
            <h1>So picky</h1>
            <DetailCard />
            </div>
        )
    }
}

export default SearchResults;