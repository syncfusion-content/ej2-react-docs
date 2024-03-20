{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonItemSize, RibbonKeyTip, RibbonFileMenu } from '@syncfusion/ej2-react-ribbon';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

function App() {
  
    let ribbonObj = React.useRef<RibbonComponent>(null);

    const ribbonCreated = () => {
        ribbonObj.current?.ribbonKeyTipModule.showKeyTips();
      }
     
    const fileOptions: MenuItemModel[] = [
    { text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }
    ]
    const pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
    
    return (
        <div>
            <RibbonComponent id='ribbon' ref={ribbonObj} enableKeyTips={true} created={ribbonCreated} fileMenu={{ visible: true, keyTip: 'F', menuItems: fileOptions}}>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                          <RibbonGroupDirective header="Clipboard" id="clipboard" groupIconCss="e-icons e-paste" showLauncherIcon={true}>
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