{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective , RibbonGroupButtonSelection, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonItem = {
    selection: RibbonGroupButtonSelection.Multiple, 
    items: [
        { iconCss: 'e-icons e-bold', content: 'Bold', selected: true}, 
        {iconCss: 'e-icons e-italic', content: 'Italic'}, 
        {iconCss: 'e-icons e-underline', content: 'Underline'}, 
        {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough'}, 
        {iconCss: 'e-icons e-change-case', content: 'Change Case'}
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