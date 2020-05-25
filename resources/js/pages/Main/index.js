import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import cx from "classnames";
import { setMobileNavVisibility } from "../../reducers/Layout";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../../components/SideBar";
import ThemeOptions from "../../components/ThemeOptions";
import MobileMenu from "../../components/MobileMenu";
/**
 * Pages
 */
import Dashboard from "../Dashboard";
import Components from "../Components";
import UserProfile from "../UserProfile";
import MapsPage from "../MapsPage";
import Forms from "../Forms";
import Charts from "../Charts";
import Calendar from "../Calendar";
import Tables from "../Tables";
import Login from "../Login";
import withSplash from "../../helpers/with-splash";

import InsuranceList from '../Insurances/InsuranceList';
import InsuranceCreate from '../Insurances/InsuranceCreate';
import InsuranceEdit from '../Insurances/Edit';
import AccountCoverage from '../Insurances/AccountCoveraje';
import AccountEdit from '../Insurances/AccountEdit';
import CreateCoverage from '../Insurances/CoverageCreate';
import ServiceCreate from '../Services/CreateForm';
import ServiceList from '../Services/List';
import ServiceEdit from '../Services/Edit';
import ServiceDetail from '../Services/Detail';
import ServiceDelete from '../Services/Delete';
import UsersCreate from '../Users/CreateForm';
import UsersList from '../Users/List';
import UsersEdit from '../Users/Edit';
// import UsersDetail from '../Users/Detail';
import Tracking from '../Tracking';
import Reports from '../Reports';

const Main = ({
    location,
    mobileNavVisibility,
    hideMobileMenu,
    history,
    isLogged
}) => {
    history.listen(() => {
        if (mobileNavVisibility === true) {
            hideMobileMenu();
        }
    });
    return (
        <div
            className={cx({
                "nav-open": mobileNavVisibility === true
            })}
        >
            
                {!isLogged ? (
                    <div className="wrapper">
                        <Route path="/login" component={Login} />
                    </div>
                ) : location.pathname == "/login" ? (
                    <Redirect to="/"></Redirect>
                ) : null}

                {isLogged ? (
                    <div className="wrapper">
                        <div
                            className="close-layer"
                            onClick={hideMobileMenu}
                        ></div>
                        <SideBar />
                        <div className="main-panel">
                            <Header />
                              <Route exact path="/" component={Tracking} />
                              <Route path="/components" component={Components} />
                              <Route path="/profile" component={UserProfile} />
                              <Route path="/forms" component={Forms} />
                              <Route path="/tables" component={Tables} />
                              <Route path="/maps" component={MapsPage} />
                              <Route path="/charts" component={Charts} />
                              <Route path="/calendar" component={Calendar} />
                              <Route path="/service/create" exact component={ServiceCreate} />
                              <Route path="/service/list" exact component={ServiceList} />
                              <Route path="/service/edit/:id" component={ServiceEdit} />
                              <Route path="/service/detail/:id" exact component={ServiceDetail} />
                              <Route path="/service/delete/:id" exact component={ServiceDelete} />
                              <Route path="/users/create" exact component={UsersCreate} />
                              <Route path="/users/list" exact component={UsersList} />
                               <Route path="/users/edit/:id" component={UsersEdit} />
                              {/*<Route path="/users/detail/:id" exact component={usersDetail} /> */}
                              <Route exact path='/insurance/insurances' component={InsuranceList} />
                              <Route exact path='/insurance/edit/:id' component={InsuranceEdit} />
                              <Route exact path='/insurance/coverages' component={AccountCoverage} />
                              <Route exact path='/insurance/coverages/edit/:id' component={AccountEdit} />
                              <Route exact path='/insurance/createcoverage' component={CreateCoverage} />
                              <Route exact path='/insurance/create' component={InsuranceCreate} />
                              <Route exact path='/reports' component={Reports} />
                        </div>
                    </div>
                ) : location.pathname != "/login" ? (
                    <Redirect to="/login"></Redirect>
                ) : null}
            
        </div>
    );
};

const mapStateToProp = state => ({
    mobileNavVisibility: state.Layout.mobileNavVisibility,
    isLogged: state.Login.isLogged
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withSplash(withRouter(
    connect(
        mapStateToProp,
        mapDispatchToProps
    )(Main)
));