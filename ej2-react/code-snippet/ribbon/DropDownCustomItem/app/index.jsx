{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const tableOptions = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <div>
            <RibbonComponent id="ribbon">
                <RibbonTabsDirective>
                    <RibbonTabDirective header="Insert">
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Tables">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", beforeItemRender: function (args) { 
                                                    if (args.item.text === 'Insert Table') {
                                                        args.element.classList.add("e-custom-class");
                                                    }
                                                } }}>
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
