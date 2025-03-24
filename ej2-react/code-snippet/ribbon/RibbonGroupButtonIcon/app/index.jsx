{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonItem = {
    items: [
        { iconCss: 'e-icons e-align-left' },
        { iconCss: 'e-icons e-align-center' }, 
        { iconCss: 'e-icons e-align-right' }, 
        { iconCss: 'e-icons e-justify' }
    ]
  }

  return (
      <RibbonComponent id="ribbon">
          <RibbonTabsDirective>
              <RibbonTabDirective header="Home" >
                  <RibbonGroupsDirective>
                      <RibbonGroupDirective header="Paragraph"> 
                          <RibbonCollectionsDirective>
                              <RibbonCollectionDirective>
                                  <RibbonItemsDirective>
                                      <RibbonItemDirective type="GroupButton" allowedSizes={RibbonItemSize.Small} groupButtonSettings={ groupButtonItem }>
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