{% raw %}
import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    let btnObj;
    let type = "Push";
    let target = '.content';
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    // Toggle button click event handler
    function btnClick() {
        if (btnObj.content === 'Open') {
            btnObj.content = 'Close';
            sidebarObj.show();
        }
        else {
            btnObj.content = 'Open';
            sidebarObj.hide();
        }
    }
    //change the toggle button state
    function changestate() {
        if (sidebarObj.type == "Auto") {
            btnObj.content = 'Close';
            sidebarObj.show();
        }
        else {
            btnObj.content = 'Open';
            sidebarObj.hide();
        }
    }
    // function to handle the CheckBox change event
    function onChange(args) {
        if (args.event.target.id === "over") {
            sidebarObj.type = "Over";
        }
        else if (args.event.target.id === "push") {
            sidebarObj.type = "Push";
        }
        else if (args.event.target.id === "slide") {
            sidebarObj.type = "Slide";
        }
        else {
            sidebarObj.type = "Auto";
        }
        changestate();
        sidebarObj.dataBind();
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
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" target={target} type={type} created={onCreate} style={{ visibility: "hidden" }} ref={sidebar => sidebarObj = sidebar}>
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title"> Click the button to close the Sidebar. </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div id="head">
                    <ButtonComponent id="toggle" ref={(scope) => { btnObj = scope; }} iconCss='e-icons burg-icon' isToggle={true} onClick={btnClick} className="e-btn e-info" content='Open'/>
                </div>
                <div id="maincontent" className="content">
                    <div>
                        <div className="title">Main content</div>
                        <div className="sub-title"> Click the button to open/close the Sidebar.</div>
                        <div className="radiobutton">
                            <div className='row'>
                                <RadioButtonComponent id="over" label='Over' name='type' change={onChange}/>
                            </div>
                            <div className='row'>
                                <RadioButtonComponent id="push" checked={true} label='Push' name='type' change={onChange}/>
                            </div>
                            <div className='row'>
                                <RadioButtonComponent id="slide" label='Slide' name='type' change={onChange}/>
                            </div>
                            <div className='row'>
                                <RadioButtonComponent id="auto" label='Auto' name='type' change={onChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}