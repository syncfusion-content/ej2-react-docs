
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonContextualTab, RibbonContextualTabsDirective, RibbonContextualTabDirective, Inject } from "@syncfusion/ej2-react-ribbon";
import { useRef } from 'react';

function App() {
    let ribbonObj = useRef(null);
    const showContextualTab = () => {
        ribbonObj.current.showTab('ArrangeView', true);
    }
    const hideContextualTab = () => {
        ribbonObj.current.hideTab('ArrangeView', true);
    }
    return (
        <div>
            <button className="e-btn" id="show-contextual" onClick={showContextualTab}> Show tab </button>
            <button className="e-btn" id="hide-contextual" onClick={hideContextualTab}> Hide tab </button>
            <RibbonComponent id='ribbon' ref={ribbonObj}>
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
                    <RibbonContextualTabDirective>
                        <RibbonTabsDirective>
                            <RibbonTabDirective id="ArrangeView" header="Arrange & View">
                                <RibbonGroupsDirective>
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
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
