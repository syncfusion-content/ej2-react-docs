{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    let btnObj;
    let target = '.content';
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick() {
        sidebarObj.toggle();
    }
    // Close the Sidebar
    function closeClick() {
        sidebarObj.hide();
        btnObj.content = 'Open';
    }
    // Toggle button click event handler
    function btnClick() {
        if (btnObj.element.classList.contains('e-active')) {
            btnObj.content = 'Close';
            sidebarObj.show();
        }
        else {
            btnObj.content = 'Open';
            sidebarObj.hide();
        }
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" type="Push" target={target} style={{ visibility: "hidden" }} created={onCreate} ref={sidebar => sidebarObj = sidebar}>
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title">
                        Click the button to close the Sidebar.
                        </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div id="head">
                    <ButtonComponent id="toggle" ref={(scope) => { btnObj = scope; }} iconCss='e-icons burg-icon' isToggle={true} onClick={btnClick} className="e-btn e-info">Open</ButtonComponent>
                </div>
                <div id="maincontent" className="content">
                    <div>
                        <div className="title">Main content</div>
                        <div className="center-align">
                            Content goes here.
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}