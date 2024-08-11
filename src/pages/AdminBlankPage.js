// import React from "react";
// import adminLayout from "../hoc/adminLayout"

// class AdminBlankPage extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {}
//     }

//     render(){
//         return <>
//             <p>Content here..</p>
//         </>
//     }
// }

// export default adminLayout(AdminBlankPage);


import React from "react";
import adminLayout from "../hoc/adminLayout";

class AdminBlankPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { id: 1, username: 'jdoe', name: 'John Doe', email: 'jdoe@example.com' },
                { id: 2, username: 'asmith', name: 'Alice Smith', email: 'asmith@example.com' },
                { id: 3, username: 'bwhite', name: 'Bob White', email: 'bwhite@example.com' },
                { id: 4, username: 'cjones', name: 'Charlie Jones', email: 'cjones@example.com' },
                // Add more dummy users if needed
            ],
            currentPage: 1,
            usersPerPage: 2,
        };
    }

    // Handle page change
    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    render() {
        const { users, currentPage, usersPerPage } = this.state;

        // Calculate indices for slicing user data
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        // Pagination numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="my-4">User Listing Page</h1>
                        </div>
                    </div>

                    {/* KPI Boxes */}
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-primary o-hidden h-100">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <div className="mr-5">Total Users: 500</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right">
                                        <i className="fa fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card text-white bg-warning o-hidden h-100">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-clock"></i>
                                    </div>
                                    <div className="mr-5">Users Active in Last 24 Hours: 50</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right">
                                        <i className="fa fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* User Table */}
                    <div className="table-container">
                        <h5 className="pb-2 mb-0">Users List</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <div className="dropdown table-action-dropdown">
                                                <button
                                                    className="btn btn-secondary btn-sm dropdown-toggle"
                                                    type="button"
                                                    id={`dropdownMenuButtonSM-${user.id}`}
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButtonSM-${user.id}`}>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-danger" href="#">
                                                            <i className="fa fa-ban" aria-hidden="true"></i>&nbsp;Ban
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <nav className="table-bottom-center-pagination" aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Previous"
                                        onClick={() => this.handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                {pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => this.handlePageChange(number)}
                                        >
                                            {number}
                                        </a>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                        onClick={() => this.handlePageChange(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default adminLayout(AdminBlankPage);
