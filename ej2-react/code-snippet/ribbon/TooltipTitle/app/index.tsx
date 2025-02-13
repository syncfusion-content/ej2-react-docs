{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize, RibbonTooltipModel } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-splitbuttons";

function App() {

  const cutOptions: RibbonTooltipModel = { title: "Cut" };
  const copyOptions: RibbonTooltipModel = { title: "Copy" };
  const pasteOptions: RibbonTooltipModel = { title: "Paste" };
  const painterOptions: RibbonTooltipModel = { title: "Format Painter" };
  const pasteOption: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];

  return (
    <RibbonComponent id="ribbon">
      <RibbonTabsDirective>
        <RibbonTabDirective header="Home">
          <RibbonGroupsDirective>
            <RibbonGroupDirective header="Clipboard">
              <RibbonCollectionsDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type="SplitButton" allowedSizes={RibbonItemSize.Large} ribbonTooltipSettings={pasteOptions}
                      splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOption, content: "Paste" }}>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Large} ribbonTooltipSettings={cutOptions} buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Medium} ribbonTooltipSettings={copyOptions} buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Medium} ribbonTooltipSettings={painterOptions} buttonSettings={{ iconCss: "e-icons e-format-painter", content: "Format Painter" }}>
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
