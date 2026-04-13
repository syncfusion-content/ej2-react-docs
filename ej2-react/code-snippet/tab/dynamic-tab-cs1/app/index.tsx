


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective, SelectEventArgs } from '@syncfusion/ej2-react-navigations';
import { Tooltip } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let tabInstance: TabComponent | any;

  const tabCreated = (): void => {
    const tooltip: Tooltip = new Tooltip({
      content: 'Add Tab'
    });
    tooltip.appendTo('.e-ileft.e-icon');

    (document.getElementById('btn-add') as any).onclick = (e: Event) => {
      const title: string = (document.getElementById('tab-title') as any).value;
      const content: string = (document.getElementById('tab-content') as any).value;
      const ele = document.createElement("pre");
      ele.innerHTML = content.replace(/\n/g, "<br>\n");
      // tslint:disable-next-line: ban-types
      const item: Object = { header: { text: title }, content: ele.outerHTML };
      const totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
      (document.getElementById('tabelement') as any).ej2_instances[0].addTab([item], totalItems - 1);
    };
  }

  const tabSelected = (args: SelectEventArgs): any => {
    if (args.selectedIndex === document.querySelectorAll('#element .e-toolbar-item').length - 1) {
      (document.getElementById('tab-title') as any).value = '';
      (document.getElementById('tab-content') as any).value = '';
    }
  }

  let headertext: any;
  headertext = [{ text: "Twitter" }, { 'iconCss': 'e-add-icon' }];

  return (
    <TabComponent id='tabelement' ref={tab => tabInstance = tab} created={tabCreated} selected={tabSelected}>
      <TabItemsDirective>
        <TabItemDirective header={headertext[0]} content={'#tab1_content'} />
        <TabItemDirective header={headertext[1]} content={'#form-container'} />
      </TabItemsDirective>
    </TabComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);



