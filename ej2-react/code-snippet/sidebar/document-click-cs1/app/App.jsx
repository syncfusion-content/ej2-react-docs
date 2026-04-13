{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    let type = "Push";
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick() {
        sidebarObj.show();
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} closeOnDocumentClick={true} type={type} created={onCreate} isOpen={true} style={{ visibility: "hidden" }}>
                    <div className="title"> Sidebar content</div>
                </SidebarComponent>
                <div>
                    <div className="title">Main content</div>
                    <div className="sub-title"> Click the button to open the Sidebar.</div>
                    <div className="center-align">
                        <ButtonComponent onClick={toggleClick} id="toggle" className="e-btn e-info">Open Sidebar</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}