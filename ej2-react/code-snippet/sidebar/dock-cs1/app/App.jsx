import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let dockBar;
    // Toggle(Open/Close) the Sidebar
    function toggleClick() {
        dockBar.toggle();
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="dockSidebar" ref={Sidebar => dockBar = Sidebar} enableDock={true} dockSize="72px" width="220px">
                    <div className="dock">
                        <ul>
                            <li className="sidebar-item" id="toggle" onClick={toggleClick}>
                                <span className="e-icons expand"/>
                                <span className="e-text" title="menu">Menu</span>
                            </li>
                            <li className="sidebar-item">
                                <span className="e-icons home"/>
                                <span className="e-text" title="home">Home</span>
                            </li>
                            <li className="sidebar-item">
                                <span className="e-icons profile"/>
                                <span className="e-text" title="profile">Profile</span>
                            </li>
                            <li className="sidebar-item">
                                <span className="e-icons info"/>
                                <span className="e-text" title="info">Info</span>
                            </li>
                            <li className="sidebar-item">
                                <span className="e-icons settings"/>
                                <span className="e-text" title="settings">Settings</span>
                            </li>
                        </ul>
                    </div>
                </SidebarComponent>
                <div id="main-content container-fluid col-md-12 ">
                    <div className="title">Main content</div>
                    <div className="sub-title"> Click the expand icon to open and collapse icons to close the Sidebar</div>
                </div>
            </div>
        </div>);
}
export default App;
