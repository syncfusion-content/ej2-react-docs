{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    let listObj;
    let width = '100%';
    let type = 'Over';
    let data = [
        { text: 'Home', id: 'list-01' },
        { text: 'Offers', id: 'list-02' },
        { text: 'Support', id: 'list-03' },
        { text: 'Logout', id: 'list-04' }
    ];
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
    }
    return (<div className="control-section">
            {/* Initializing the Sidebar component */}
            <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} width={width} style={{ visibility: "hidden" }} created={onCreate} type={type}>
                <div id='closebtn'>
                    <ButtonComponent cssClass='e-normal' iconCss='e-icons e-add-icon' onClick={toggleClick}/>
                </div>
                <div className="title">Menu</div>
                <div className='listdiv'>
                    {/* Initializing the Listview inside the Sidebar component */}
                    <ListViewComponent id="listview" dataSource={data} onClick={closeClick}/>
                </div>
                <div className="center-align">
                    * ListView component is placed inside the Sidebar content area.
                </div>
            </SidebarComponent>
            <div>
                <div className="title">Main content</div>
                <div className="sub-title"> Click the button to open/close the Sidebar.</div>
                <div className="center-align">
                    <ButtonComponent onClick={toggleClick} id="toggle" className="e-btn e-info">Toggle Sidebar</ButtonComponent>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}