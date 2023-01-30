{% raw %}
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarobj;
    let mediaQueryState = { mediaQuery: window.matchMedia('(max-width: 400px)') };
    function onCreate() {
        sidebarobj.element.style.visibility = '';
    }
    return (<div className="control-section">
            <div id="wrapper">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    {/* Initializing the Sidebar component */}
                    <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarobj = Sidebar} mediaQuery={mediaQueryState.mediaQuery} style={{ visibility: "hidden" }} created={onCreate} width="248px">
                        <div className="title"> Sidebar content</div>
                    </SidebarComponent>
                    <div>
                        <div className="title">Main content</div>
                        <div className="sub-title"> * Sidebar will expanded in mobile mode automatically</div>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}