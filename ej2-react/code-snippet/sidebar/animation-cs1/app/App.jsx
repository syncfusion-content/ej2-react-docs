{% raw %}
import * as React from 'react';
import './index.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    let sidebarObj;
    let btnObj;
    let showBackdrop = true;
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    // Zoom Sidebar
    function zoom() {
        sidebarObj.show();
        sidebarObj.element.classList.add("w3-animate-zoom");
    }
    // Open Door
    function open_door() {
        sidebarObj.show();
        const sidebar = document.getElementsByClassName("e-sidebar-overlay")[0];
        sidebar.classList.add("move");
    }
    // Bottom to Top
    function bottom_top() {
        sidebarObj.show();
        sidebarObj.element.classList.add("w3-animate-bottom");
    }
    // Rotate
    function rotate() {
        sidebarObj.show();
        sidebarObj.element.classList.add("rotate");
    }
    // Rotate 3D Effect
    function rotate_3d() {
        sidebarObj.show();
        sidebarObj.element.classList.add("rotate_3d");
    }
    // Reverse Slide Out
    function reverse() {
        sidebarObj.show();
        sidebarObj.element.classList.add("reverse_slide_out");
    }
    // Close Sidebar Element
    function close() {
        sidebarObj.element.classList.remove("sidebar");
        sidebarObj.element.classList.remove("rotate");
        sidebarObj.element.classList.remove("w3-animate-zoom");
        sidebarObj.element.classList.remove("w3-animate-bottom");
        sidebarObj.element.classList.remove("rotate_3d");
        sidebarObj.element.classList.remove("reverse_slide_out");
        sidebarObj.hide();
    }
    return (
    // Declaration of Sidebar Element
    <div className="control-section">
            <SidebarComponent id="sidebar-element" className="sidebar" ref={Sidebar => sidebarObj = Sidebar} showBackdrop={showBackdrop} style={{ visibility: "hidden" }} created={onCreate} width="280px">
                <div className="title"> Sidebar content</div>
                    <div className="sub-title">
                        * Sidebar is rendered with animation effect
                    </div>
                    <div className="center-align">
                        {/* Close Button Declaration*/}
                        <ButtonComponent onClick={close} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
            </SidebarComponent>
            {/*End of Sidebar Element Declaration*/}
            {/* Main Content Declaration*/}
            <div className="content">
                <div className="title">Sidebar Transitions</div>
                <div className="sub-title"> * Click the below button to render the Sidebar with animation effect.</div>
                <div className="center-align">
                    {/*Button Declaaration */}
                    <ButtonComponent onClick={zoom} id="zoom" className="e-btn e-info">Zoom Sidebar</ButtonComponent>
                    <ButtonComponent onClick={open_door} id="open_door" className="e-btn e-info">Open Door</ButtonComponent>
                    <ButtonComponent onClick={bottom_top} id="bottom_top" className="e-btn e-info">Bottom to Top </ButtonComponent>
                </div>
                <div className="center-align">
                    <ButtonComponent onClick={rotate} id="rotate" className="e-btn e-info">Rotate</ButtonComponent>
                    <ButtonComponent onClick={rotate_3d} id="rotate_3d" className="e-btn e-info">Rotate 3D</ButtonComponent>
                    <ButtonComponent onClick={reverse} id="reverse" className="e-btn e-info">Reverse Slide Out </ButtonComponent>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}