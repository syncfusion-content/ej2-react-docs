{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let leftSidebarObj;
    let rightSidebarObj;
    let type = 'Push';
    function onCreate() {
        leftSidebarObj.element.style.visibility = '';
        rightSidebarObj.element.style.visibility = '';
    }
    // Toggle(Open/Close) the Sidebar1
    function leftToggle() {
        leftSidebarObj.toggle();
    }
    // Toggle(Open/Close) the Sidebar2
    function rightToggle() {
        rightSidebarObj.toggle();
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default" ref={Sidebar => leftSidebarObj = Sidebar} width="200px" type={type} created={onCreate} style={{ visibility: "hidden" }}>
                    <div className="title"> Left Sidebar content</div>
                </SidebarComponent>
                {/* Initializing the another Sidebar component */}
                <SidebarComponent id="default1" ref={Sidebar => rightSidebarObj = Sidebar} width="200px" type={type} position="Right" created={onCreate} style={{ visibility: "hidden" }}>
                    <div className="title"> Right Sidebar content</div>
                </SidebarComponent>
                <div className="e-main-content">
                    <p>Place your main content here.....</p>
                    <ButtonComponent onClick={leftToggle} id="toggle-btn" className="e-btn e-info">Toggle Sidebar1</ButtonComponent>
                    <br /><br />
                    <ButtonComponent onClick={rightToggle} id="toggle-btn1" className="e-btn e-info">Toggle Sidebar2</ButtonComponent>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}