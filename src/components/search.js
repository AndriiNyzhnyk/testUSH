import React, { Component } from 'react';

class Search extends Component {
    render() {
        if(this.props.windowForSearch) {
            return (
                <div className="searchBox">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <p>
                            <label htmlFor="employeeName"><b>Employee name</b></label><br/>
                            <input type="text"
                                   id="employeeName"
                                   value={this.props.employeeName}
                                   onChange={this.props.handlerChangeParamSearch}
                                   autoComplete="off" required />
                        </p>

                        <p>
                            <button onClick={this.props.startSearch.bind(null, this,'mama')}>Search</button>
                            <button onClick={this.props.cancel}>Cancel</button>
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