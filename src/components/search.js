import React, { Component } from 'react';

class Search extends Component {

    render() {

        if(this.props.windowForSearch) {
            return (
                <div className="searchBox">
                    <form  onSubmit={this.props.startSearch}>
                        <p>
                            <label htmlFor="login"><b>Employee name</b></label><br/>
                            <input type="text"
                                   value={this.props.employeeName}
                                   onChange={this.props.handlerChangeParamSearch}
                                   autoComplete="off" required />
                        </p>

                        <p>
                            <button>Search</button>
                            <button>Cancel</button>
                        </p>


                    </form>
                </div>

            );
        } else {
            return (
                    <p>
                        <button onClick={this.props.showWindow}>Search</button>
                    </p>
                );
        }



    }
}

export default Search;