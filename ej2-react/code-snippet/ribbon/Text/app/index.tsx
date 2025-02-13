{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-navigations';

function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" }]
    return (
        <RibbonComponent id="ribbon" fileMenu={{ visible: true,text: 'App', menuItems: fileOptions}}>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
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
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));


{% endraw %}
