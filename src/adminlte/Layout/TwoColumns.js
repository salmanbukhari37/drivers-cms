import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dropdown from '../Nav/Dropdown';
import MiniSearch from '../Navbar/MiniSearch';
import Nav from '../Nav';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Wrapper from './Wrapper';

const TwoColumns = ({ children }) => (
    <Wrapper>
        <ToastContainer autoClose={ 2000 } />
        <Navbar light>
            {/* SEARCH FORM */}
            <MiniSearch />
            {/* Right navbar links */}
            <Nav className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <Dropdown icon badge count="5">
                <Dropdown.Item />
                <Dropdown.Divider />
                <Dropdown.Item />
                <Dropdown.Divider />
            </Dropdown>
            </Nav>
        </Navbar>
        {/* Sidebar */}
        <Sidebar>
            <Sidebar.UserInfo />
            <Sidebar.Search />
            <Sidebar.Nav>
            <Sidebar.TreeMenu icon="fas fa-tachometer-alt" title="Dashboard">
                <Sidebar.MenuItem icon="far fa-circle">
                    <Link to="/sales-text">Sales Text</Link>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem icon="far fa-tachometer-alt">
                    <Link to="/user/dashboard">Dashboard</Link>
                </Sidebar.MenuItem>
            </Sidebar.TreeMenu>
            <Sidebar.MenuItem icon="nav-icon fas fa-th" badge>
                Sample Link
            </Sidebar.MenuItem>
            <Sidebar.TreeMenu icon="fas fa-tachometer-alt" title="Sales Text">
                <Sidebar.MenuItem>Active Menu</Sidebar.MenuItem>
                <Sidebar.MenuItem>InActive Menu</Sidebar.MenuItem>
            </Sidebar.TreeMenu>
            </Sidebar.Nav>
        </Sidebar>
        {/* Content goes here */}
        { children }
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
            <div className="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
            </div>
        </aside>
        {/* /.control-sidebar */}
        {/* Main Footer */}
        <footer className="main-footer">
            {/* To the right */}
            <div className="float-right d-none d-sm-inline">
            Anything you want
            </div>
            {/* Default to the left */}
            <strong>Copyright © 2014-2021 <a href="https://adminlte.io">Renegade Furniture Group</a>.</strong> All rights reserved.
        </footer>
    </Wrapper>
);

export default TwoColumns;