import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {

    render() {
        return (
            <div className="pagination">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'page-link'}
                    pageCount={this.props.countPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.props.handlePageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    pageClasssName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        );
    }
}

export default Pagination;