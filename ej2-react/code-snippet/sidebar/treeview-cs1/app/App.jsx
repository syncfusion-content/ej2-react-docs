{% raw %}
import * as React from 'react';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    let sidebarobj;
    let treeviewobj;
    let data = [
        {
            nodeId: '01', nodeText: 'Installation', iconCss: 'icon-microchip icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
        },
        {
            nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
        },
        {
            nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
        },
        {
            nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
        },
        {
            nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
        },
        {
            nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
        },
        {
            nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
        }
    ];
    let width = '290px';
    let target = '.main-content';
    let mediaQuery = '(min-width: 600px)';
    let dockSize = "42px";
    let fields = { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    function onCreate() {
        sidebarobj.element.style.visibility = '';
    }
    function onClose() {
        treeviewobj.collapseAll();
    }
    function toggleClick() {
        if (sidebarobj.isOpen) {
            sidebarobj.hide();
            treeviewobj.collapseAll();
        }
        else {
            sidebarobj.show();
            treeviewobj.expandAll();
        }
    }
    let sidbarToggle = null;
    return (
    // Sidebar Element Declaration
    <div className="control-section">
            <div id="wrapper">
                <title>Essential JS 2 for React - Sidebar {'>'} Sidebar with ListView </title>
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div className='main-header' id='header-section'>
                        <ul className='header-list'>
                            <li className='float-left header-style icon-menu' id='hamburger' onClick={toggleClick} ref={sidebar => sidbarToggle = sidebar}></li>
                            <li className='float-left header-style nav-pane'><b>Navigation Pane</b></li>
                            <li className='header-style float-right support border-left'><b>Support</b></li>
                        </ul>
                    </div>
                    <SidebarComponent id="sidebar-treeview" ref={Sidebar => sidebarobj = Sidebar} width={width} target={target} mediaQuery={mediaQuery} style={{ visibility: "hidden" }} created={onCreate} close={onClose} dockSize={dockSize} enableDock={true}>
                        <div className='main-menu'>
                            <div>
                                <TreeViewComponent id='main-treeview' ref={Treeview => treeviewobj = Treeview} fields={fields} expandOn='Click'/>
                            </div>
                        </div>
                    </SidebarComponent>
                    <div className="main-content" id="main-text">
                        <div className='sidebar-content'>
                                <h2 className='sidebar-heading'> Responsive Sidebar With Treeview</h2>
                                <p className='paragraph-content'> This is a graphical aid for visualising and categorising the site,
                                in the style of an expandable and collapsable treeview component. It auto-expands to display the node(s),
                                if any, corresponding to the currently viewed title, highlighting that node(s) and its ancestors.
                                Load-on-demand when expanding nodes is available where supported (most graphical browsers), falling
                                back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so
                                that unnecessary re-downloads of content are avoided where possible. The complete expanded/collapsed
                                state of the treeview persists across page views in most situations.</p>
                                <p className='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id est laborum.</p>
                                <div className='line'></div>
                                <h2 className='sidebar-heading'>Lorem Ipsum Dolor</h2>
                                <p className='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className='line'></div>
                                <h2 className='sidebar-heading'> Lorem Ipsum Dolor</h2>
                                <p className='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className='line'></div>
                                <h2 className='sidebar-heading'> Lorem Ipsum Dolor</h2>
                                <p className='paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default App;
{% endraw %}