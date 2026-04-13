{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    function open() {
        console.log("Sidebar is opened");
    }
    function close() {
        console.log("Sidebar is closed");
    }
    // Open the Sidebar
    function openClick() {
        sidebarObj.show();
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick() {
        sidebarObj.toggle();
    }
    // Close the Sidebar
    function closeClick() {
        sidebarObj.hide();
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} style={{ visibility: "hidden" }} close={close} open={open} created={onCreate}>
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title">
                        Click the button to close the Sidebar.
                        </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div>
                    <div className="title">Main content</div>
                    <div className="sub-title"> Click the button to Open the Sidebar.</div>
                    <div className="center-align">
                        <ButtonComponent onClick={openClick} id="open" className="e-btn e-info">Open Sidebar</ButtonComponent>
                    </div>
                    <div className="sub-title"> Click the button to open/close the Sidebar.</div>
                    <div className="center-align">
                        <ButtonComponent onClick={toggleClick} id="toggle" className="e-btn e-info">Toggle Sidebar</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}