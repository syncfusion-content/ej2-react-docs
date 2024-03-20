{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonItemSize, RibbonKeyTip, RibbonFileMenu } from '@syncfusion/ej2-react-ribbon';

function App() {

    let ribbonObj = React.useRef(null);

    const ribbonCreated = () => {
        ribbonObj.current?.ribbonKeyTipModule.showKeyTips();
      }
     
    const fileOptions = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
    ]
    const pasteOptions = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
    
    return (
        <div>
            <RibbonComponent id='ribbon' ref={ribbonObj} enableKeyTips={true} layoutSwitcherKeyTip='LS' created={ribbonCreated} fileMenu={{ visible: true, menuItems: fileOptions}}>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                          <RibbonGroupDirective header="Clipboard" id="clipboard" groupIconCss="e-icons e-paste">
                              <RibbonCollectionsDirective>
                                  <RibbonCollectionDirective>
                                      <RibbonItemsDirective>
                                          <RibbonItemDirective type="SplitButton" id="pastebtn" allowedSizes={RibbonItemSize.Large}
                                              splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOptions, content: "Paste" }}>
                                          </RibbonItemDirective>
                                      </RibbonItemsDirective>
                                  </RibbonCollectionDirective>
                                  <RibbonCollectionDirective>
                                      <RibbonItemsDirective>
                                          <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                          </RibbonItemDirective>
                                          <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                          </RibbonItemDirective>
                                      </RibbonItemsDirective>
                                  </RibbonCollectionDirective>
                              </RibbonCollectionsDirective>
                          </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonFileMenu, RibbonKeyTip]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}