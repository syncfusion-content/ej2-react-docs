{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonGroupButtonSelection, RibbonItemSize, RibbonGroupButtonSettingsModel } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonItem: RibbonGroupButtonSettingsModel = {
    selection: RibbonGroupButtonSelection.Single,
    items: [
        { iconCss: 'e-icons e-align-left', selected: true, content: 'Align Left' },
        { iconCss: 'e-icons e-align-center',content: 'Align Center' }, 
        { iconCss: 'e-icons e-align-right',content: 'Align Right' }, 
        { iconCss: 'e-icons e-justify',content: 'Justify' }
    ]
  }

  return (
      <RibbonComponent id="ribbon" activeLayout='Simplified'>
          <RibbonTabsDirective>
              <RibbonTabDirective header="Home" >
                  <RibbonGroupsDirective>
                      <RibbonGroupDirective header="Paragraph"> 
                          <RibbonCollectionsDirective>
                              <RibbonCollectionDirective>
                                  <RibbonItemsDirective>
                                      <RibbonItemDirective type="GroupButton" allowedSizes={RibbonItemSize.Medium} groupButtonSettings={ groupButtonItem }>
                                      </RibbonItemDirective>
                                  </RibbonItemsDirective>
                              </RibbonCollectionDirective>
                          </RibbonCollectionsDirective>
                      </RibbonGroupDirective>
                  </RibbonGroupsDirective>
              </RibbonTabDirective>
          </RibbonTabsDirective>
      </RibbonComponent>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}