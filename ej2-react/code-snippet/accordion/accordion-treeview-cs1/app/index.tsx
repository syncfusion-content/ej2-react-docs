


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ExpandEventArgs, TreeView } from '@syncfusion/ej2-navigations';
import { DocDB, DownloadDB, PicDB } from 'datasource.ts';

function ReactApp() {
  let acrdnInstance: AccordionComponent;
  return (
    <AccordionComponent ref={acrdn => acrdnInstance = acrdn} expandMode='Single' expanding={expanding}>
      <AccordionItemsDirective>
        <AccordionItemDirective header='Documents' content='<div id="treeDoc"></div>' />
        <AccordionItemDirective header='Downloads' content='<div id="treeDownload"></div>' />
        <AccordionItemDirective header='Pictures' content='<div id="treePic"></div>' />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
  function expanding(e: ExpandEventArgs) {
    if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 0 && e.element.querySelector('#treeDoc').childElementCount === 0) {
      let treeObj: TreeView = new TreeView({
        fields: { dataSource: DocDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
      });
      treeObj.appendTo('#treeDoc');
    }
    if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 1 && e.element.querySelector('#treeDownload').childElementCount === 0) {
      let treeObj: TreeView = new TreeView({
        fields: { dataSource: DownloadDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
      });
      treeObj.appendTo('#treeDownload');
    }
    if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 2 && e.element.querySelector('#treePic').childElementCount === 0) {
      let treeObj: TreeView = new TreeView({
        fields: { dataSource: PicDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
      });
      treeObj.appendTo('#treePic');
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);



