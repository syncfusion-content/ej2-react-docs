{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-splitbuttons";
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
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Font">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-bold", content: "Bold" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-italic", content: "Italic" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-underline", content: "Underline" }}>
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
