
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonContextualTab, RibbonContextualTabsDirective, RibbonContextualTabDirective, Inject } from "@syncfusion/ej2-react-ribbon";

function App() {
    return (
        <RibbonComponent id='ribbon'>
            <RibbonTabsDirective>
                <RibbonTabDirective header='Home'>
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard" id="clipboardGroup" groupIconCss="e-icons e-paste" showLauncherIcon={true}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-format-painter", content: "Format Painter" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <RibbonContextualTabsDirective>
                <RibbonContextualTabDirective visible={true} isSelected={true}>
                    <RibbonTabsDirective>
                        <RibbonTabDirective header='Styles'>
                            <RibbonGroupsDirective>
                                <RibbonGroupDirective header="Style" showLauncherIcon={true}>
                                    <RibbonCollectionsDirective>
                                        <RibbonCollectionDirective>
                                            <RibbonItemsDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-style", content: "Style" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-font-name", content: "Text Box" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-paint-bucket", content: "Paint" }}>
                                                </RibbonItemDirective>
                                            </RibbonItemsDirective>
                                        </RibbonCollectionDirective>
                                    </RibbonCollectionsDirective>
                                </RibbonGroupDirective>
                            </RibbonGroupsDirective>
                        </RibbonTabDirective>
                </RibbonTabsDirective>
                </RibbonContextualTabDirective>
            </RibbonContextualTabsDirective>
            <Inject services={[RibbonContextualTab]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
