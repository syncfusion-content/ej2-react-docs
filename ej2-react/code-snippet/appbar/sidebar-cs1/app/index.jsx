import React, { useState, useRef } from "react";
import * as ReactDOM from "react-dom";
import { AppBarComponent, TreeViewComponent, SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const App = () => {
  const [isOpen, setIsOpen] = useState < boolean > (true);
  const sidebarRef = useRef < SidebarComponent > (null);
  const data = [
    {
      nodeId: '01', nodeText: 'Installation',
    },
    {
      nodeId: '02', nodeText: 'Deployment',
    },
    {
      nodeId: '03', nodeText: 'Quick Start',
    },
    {
      nodeId: '04', nodeText: 'Components',
      nodeChild: [
        { nodeId: '04-01', nodeText: 'Calendar' },
        { nodeId: '04-02', nodeText: 'DatePicker' },
        { nodeId: '04-03', nodeText: 'DateTimePicker' },
        { nodeId: '04-04', nodeText: 'DateRangePicker' },
        { nodeId: '04-05', nodeText: 'TimePicker' },
        { nodeId: '04-06', nodeText: 'SideBar' }
      ]
    }
  ];
  const width = '220px';
  const target = '.main-sidebar-content';
  const mediaQuery = '(min-width: 600px)';
  const fields = { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="control-container" id="responsive-wrapper">
      <div id="reswrapper">
        <div>
          <AppBarComponent>
            <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-menu" onClick={toggleSidebar}></ButtonComponent>
            <div className="e-folder">
              <div className="e-folder-name">Navigation Pane</div>
            </div>
          </AppBarComponent>
        </div>
        <SidebarComponent id="sideTree" className="sidebar-treeview" ref={sidebarRef} width={width} target={target} mediaQuery={mediaQuery} isOpen={isOpen}>
          <div className='res-main-menu'>
            <div className="table-content">
              <TextBoxComponent id="resSearch" placeholder="Search..."></TextBoxComponent>
              <p className="main-menu-header">TABLE OF CONTENTS</p>
            </div>
            <div>
              <TreeViewComponent id='mainTree' cssClass="main-treeview" fields={fields} expandOn='Click' />
            </div>
          </div>
        </SidebarComponent>
        <div className="main-sidebar-content" id="main-text">
          <div className="sidebar-content">
            <div className="sidebar-heading"> Responsive Sidebar with Treeview</div>
            <p className="paragraph-content">
              This is a graphical aid for visualising and categorising the site, in the style of an expandable and collapsable treeview component.
              It auto-expands to display the node(s), if any, corresponding to the currently viewed title, highlighting that node(s)
              and its ancestors. Load-on-demand when expanding nodes is available where supported (most graphical browsers),
              falling back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so that
              unnecessary re-downloads of content are avoided where possible. The complete expanded/collapsed state of
              the treeview persists across page views in most situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);