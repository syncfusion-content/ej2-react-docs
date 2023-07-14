{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    return (
        <div>
            <RibbonComponent id="ribbon">
                <RibbonTabsDirective>
                    <RibbonTabDirective header="Home">
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Clipboard">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-image", content: "Pictures", target: "#pictureList" }}>
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
            </RibbonComponent>
            <ListViewComponent id='pictureList' dataSource={['This device', 'Stock Images', 'Online Images']} showHeader={true} headerTitle="Insert Picture From"></ListViewComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
