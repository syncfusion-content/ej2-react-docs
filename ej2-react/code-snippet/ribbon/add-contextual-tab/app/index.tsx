{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize, RibbonContextualTab, RibbonContextualTabsDirective, RibbonContextualTabDirective, Inject } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
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
                <RibbonContextualTabDirective visible={true} >
                    <RibbonTabsDirective>
                        <RibbonTabDirective header='Shape Format' id="ShapeFormat">
                            <RibbonGroupsDirective>
                                <RibbonGroupDirective header="Text decoration" showLauncherIcon={true}>
                                    <RibbonCollectionsDirective>
                                        <RibbonCollectionDirective>
                                            <RibbonItemsDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-text-header", content: "Text Header" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-text-wrap", content: "Text Wrap" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-text-annotation", content: "Text Annotation" }}>
                                                </RibbonItemDirective>
                                            </RibbonItemsDirective>
                                        </RibbonCollectionDirective>
                                    </RibbonCollectionsDirective>
                                </RibbonGroupDirective>
                                <RibbonGroupDirective header="Accessibility">
                                    <RibbonCollectionsDirective>
                                        <RibbonCollectionDirective>
                                            <RibbonItemsDirective>
                                                <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Large} buttonSettings={{ iconCss: "e-icons e-text-alternative", content: "Alt Text" }}>
                                                </RibbonItemDirective>
                                            </RibbonItemsDirective>
                                        </RibbonCollectionDirective>
                                    </RibbonCollectionsDirective>
                                </RibbonGroupDirective>
                                <RibbonGroupDirective header="Arrange" showLauncherIcon={true}>
                                    <RibbonCollectionsDirective>
                                        <RibbonCollectionDirective>
                                            <RibbonItemsDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-bring-forward", content: "Bring Forward" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-send-backward", content: "Send Backward" }}>
                                                </RibbonItemDirective>
                                                <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" }}>
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

{% endraw %}
