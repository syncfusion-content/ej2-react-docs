{% raw %}
import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
function App() {
    let sidebarobj: SidebarComponent;
    let width: string = '260px';
    function toggleClick():void {
        sidebarobj.toggle();
    }
    function onCreate(): void {
        sidebarobj.element.style.visibility = '';
    }
    return (
        // Sidebar Element Declaration
        <div className="control-section">
            <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarobj = Sidebar as SidebarComponent}  style={{visibility:"hidden"}} width={width} created={onCreate}>
                <div className="sidebar-header header-cover" style={{backgroundColor:'#0378d5'}}>
                    <div className="image-container">
                        <div className="sidebar-image">
                        </div>
                    </div>
                    <div style={{padding:'0 0 5px 0'}}>
                        <a className="sidebar-brand" href="#settings-dropdown">
                            john.doe@gmail.com
                        </a>
                        <span className="sf-icon-down icon"></span>
                    </div>
                </div>
                <ul className="nav sidebar-nav">
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-file"></i>
                            <span className="e-text"> Inbox</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-starred"></i>
                            <span className="e-text"> Starred</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-recent"></i>
                            <span className="e-text">Snoozed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-important"></i>
                            <span className="e-text">Important</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-offline"></i>
                            <span className="e-text"> Sent</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="sf-icon-sidebar sf-icon-backup"></i>
                            <span className="e-text"> Draft</span>
                        </a>
                    </li>
                </ul>
            </SidebarComponent>
            {/* End of Sidebar Declaration */}
            {/* Main Content Declaration */}
            <div>
                <div className="content">
                    <div id="left">
                        <span id="hamburger" onClick={toggleClick}className="e-icons menu default"></span>
                    </div>
                    <div id="center">
                        <span>Inbox</span>
                    </div>
                    <div id="right">
                        <span className="sf-icon-search"></span>
                    </div>
                </div>
                <div>
                    <div className="e-control e-listview e-list-template e-touch">
                        <ul className="e-list-parent e-ul ">
                            <li className="e-list-group-item e-level-1" role="group" data-uid="group-list-item-Today"
                                >
                                <div className="e-text-content" role="presentation"><span  style={{width: '100%', marginLeft: '2%', marginTop: '-2%'}}>Today</span></div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">Albert Lives</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Opening for Sales Manager</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hello Uta Morgan,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Ila Russo</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Business dinner invitation
                                    </span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hello Jelani Moreno,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Garth Owen</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Application for Job Title</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hello Ila Russo,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">Ursula Patterson</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Hello Kerry Best,</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Programmer Position Application</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Nichole Rivas</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Annual Conference</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hi Igor Mccoy,</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Nichole Rivas</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Annual Conference</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hi Igor Mccoy,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Nichole Rivas</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Annual Conference</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hi Igor Mccoy,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Nichole Rivas</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Annual Conference</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hi Igor Mccoy,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">
                                            Nichole Rivas</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Annual Conference</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Hi Igor Mccoy,</span></span>
                                </div>
                            </li>
                            <li className="e-list-item">
                                <div className="e-list-wrapper e-list-avatar e-list-multi-line">
                                    <span className="e-avatar e-icon sf-icon-profile"></span>
                                    <div>
                                        <span className="e-list-item-header e-name">Ursula Patterson</span>
                                    </div>
                                    <span className="received e-list-content e-second-heading">Hello Kerry Best,</span>
                                    <span className="e-list-item-header sf-icon-star">
                                        <span className="e-list-text">Programmer Position Application</span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;
{% endraw %}