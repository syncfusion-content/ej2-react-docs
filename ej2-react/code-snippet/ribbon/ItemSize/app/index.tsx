{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" allowedSizes={RibbonItemSize.Large}
                                            splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOptions, content: "Paste" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Medium} buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Small} buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
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
