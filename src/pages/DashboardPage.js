// import React from "react";
// import adminLayout from "../hoc/adminLayout"

// class DashboardPage extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {}
//     }

//     render(){
//         return <>
//             <div className="row">
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="card text-white bg-primary o-hidden h-100">
//             <div className="card-body">
//               <div className="card-body-icon">
//                 <i className="fa fa-fw fa-comments"></i>
//               </div>
//               <div className="mr-5">26 New Messages!</div>
//             </div>
//             <a className="card-footer text-white clearfix small z-1" href="#">
//               <span className="float-left">View Details</span>
//               <span className="float-right">
//                 <i className="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="card text-white bg-warning o-hidden h-100">
//             <div className="card-body">
//               <div className="card-body-icon">
//                 <i className="fa fa-fw fa-list"></i>
//               </div>
//               <div className="mr-5">11 New Tasks!</div>
//             </div>
//             <a className="card-footer text-white clearfix small z-1" href="#">
//               <span className="float-left">View Details</span>
//               <span className="float-right">
//                 <i className="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="card text-white bg-success o-hidden h-100">
//             <div className="card-body">
//               <div className="card-body-icon">
//                 <i className="fa fa-fw fa-shopping-cart"></i>
//               </div>
//               <div className="mr-5">123 New Orders!</div>
//             </div>
//             <a className="card-footer text-white clearfix small z-1" href="#">
//               <span className="float-left">View Details</span>
//               <span className="float-right">
//                 <i className="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="card text-white bg-danger o-hidden h-100">
//             <div className="card-body">
//               <div className="card-body-icon">
//                 <i className="fa fa-fw fa-support"></i>
//               </div>
//               <div className="mr-5">13 New Tickets!</div>
//             </div>
//             <a className="card-footer text-white clearfix small z-1" href="#">
//               <span className="float-left">View Details</span>
//               <span className="float-right">
//                 <i className="fa fa-angle-right"></i>
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//         </>
//     }
// }

// export default adminLayout(DashboardPage);

import React from "react";
import adminLayout from "../hoc/adminLayout";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalUsers: 500,
            totalPosts: 1500,
            activeUsersLast24H: 50,
            postsPublishedLast24H: 30
        };
    }

    render() {
        const { totalUsers, totalPosts, activeUsersLast24H, postsPublishedLast24H } = this.state;

        return (
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-users"></i>
                            </div>
                            <div className="mr-5">Total Users: {totalUsers}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-file-text"></i>
                            </div>
                            <div className="mr-5">Total Posts: {totalPosts}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                                <i className="fa fa-fw fa-users"></i>
                            </div>
                            <div className="mr-5">Active Users in Last 24H: {activeUsersLast24H}</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                            <i class="fa fa-fw fa-file-text"></i>
                            </div>
                            <div className="mr-5">Posts Published in Last 24H: {postsPublishedLast24H}</div>
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
        );
    }
}

export default adminLayout(DashboardPage);
