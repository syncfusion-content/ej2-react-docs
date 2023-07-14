{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize, RibbonTooltipModel } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";

function App() {

  const cutOptions: RibbonTooltipModel = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else." };
  const copyOptions: RibbonTooltipModel = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere." };
  const pasteOptions: RibbonTooltipModel = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed." };
  const painterOptions: RibbonTooltipModel = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document." };
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
