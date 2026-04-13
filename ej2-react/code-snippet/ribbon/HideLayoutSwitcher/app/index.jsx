
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { useRef } from 'react';

function App() {
    let ribbonObj = useRef(null);
    const pasteOptions = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
    const tableOptions = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    const onChange = (args) => {        
        ribbonObj.current.hideLayoutSwitcher= !args.checked;
    };
    return (
        <div className="container">
            <CheckBoxComponent label="Show/Hide Layout Switcher" checked={true} change={onChange.bind(this)}></CheckBoxComponent>
            <RibbonComponent id="ribbon" ref={ribbonObj} hideLayoutSwitcher={false}>
                <RibbonTabsDirective>
                    <RibbonTabDirective header="Home">
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Clipboard">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="SplitButton"
                                                splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOptions, content: "Paste" }}>
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
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
                    <RibbonTabDirective header="Insert">
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Tables">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table" }}>
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
