import React, {} from "react";
import './App.scss';
import images from "./themes/images";
import NaviBar from "./components/NaviBar";
import StatusButton from "./components/StatusButton";
import FormGroup from "./components/FormGroup";
import PrimaryButton from "./components/PrimaryButton";

function App() {
    return (
        <div className="content-wrapper">
            {/* sidebar */}
            <div className='sidebar'>
            {/*<div className='sidebar collapse'> add this class [collapse] when user click icon expand*/}
                <div className='expand'>
                    <img src={images.icExpand} alt="icExpand"/>
                </div>
                <div className='logo'>
                    <a href="home" className="logo"><img src={images.logo} alt="logo"/></a>
                    {/*<a href="home" className="logo"><img src={images.logoIcon} alt="logo"/></a>*/}
                    {/*change icon [logoIcon] when user click icon expand*/}
                </div>
                {/* navibar */}
                <div className="navibar">
                    <ul>
                        <li><NaviBar icSrc={images.icDashboard} text='Dashboard' className='active'/></li>
                        {/*<li><NaviBar icSrc={images.icDashboard} text='Dashboard' className='active' isHideText/></li>*/}
                        {/*add this propTypes [isHideText] when click icon expand*/}
                        <li><NaviBar icSrc={images.icReports} text='Reports' /></li>
                        <li><NaviBar icSrc={images.icSegmentation} text='Segmentation' /></li>
                        <li><NaviBar icSrc={images.icLifecycle} text='Lifecycle' /></li>
                        <li><NaviBar icSrc={images.icOrders} text='Orders' /></li>
                        <li><NaviBar icSrc={images.icPricing} text='Pricing' /></li>
                        <li><NaviBar icSrc={images.icGoals} text='Goals' /></li>
                        <li><NaviBar icSrc={images.icAdmin} text='Admin' isShowArrow/></li>
                    </ul>
                </div>
            </div>

            {/* main-content */}
            <div className='main-content'>
                <div className='header-status'>
                    <h1>Segmentation</h1>
                    <ul>
                        <li><StatusButton text='All' number='(111)'/></li>
                        <li><StatusButton text='Unclassified' number='(10)' className='active'/></li>
                        <li><StatusButton text='Pending' number='(2)'/></li>
                        <li><StatusButton text='Tentative' number='(0)'/></li>
                        <li><StatusButton text='Approved' number='(5)'/></li>
                        <li><StatusButton text='Rejected' number='(1)'/></li>
                    </ul>
                </div>
                <form className='filter'>
                    <FormGroup label='Manager' isShowSelect/>
                    <FormGroup label='Salesperson' isShowSelect/>
                    <FormGroup label='Segment' isShowSelect/>
                    <FormGroup label='Approval' isShowSelect/>
                    <PrimaryButton text='Apply'/>
                    <PrimaryButton text='Clear' className='second'/>
                </form>
                <div className='table-responsive'>
                    <table>
                        <thead>
                        <tr>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Customer Name</th>
                            <th>Type</th>
                            <th>Rank</th>
                            <th>Quantity</th>
                            <th>Gross Profit</th>
                            <th>Transactions</th>
                            <th>Status</th>
                            <th>Key Account</th>
                            <th>Behavior</th>
                            <th>Segment</th>
                            <th>Approval</th>
                            <th>Comments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John Jackson</td>
                            <td>100001</td>
                            <td>Rocky Mountain Transport</td>
                            <td>Transport</td>
                            <td>Top 15%</td>
                            <td>5,304</td>
                            <td>$186,943</td>
                            <td>432</td>
                            <td>Active</td>
                            <td><FormGroup isShowSelect isHideLabel/></td>
                            <td><FormGroup isShowSelect isHideLabel/></td>
                            <td>Unclassified</td>
                            <td>No</td>
                            <td><a href='#'>Add</a> | <a href='#'>Edit</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='group-button'>
                    <PrimaryButton text='Save'/>
                    <PrimaryButton text='Cancel' className='second'/>
                </div>
            </div>
        </div>
    );
}

export default App;
