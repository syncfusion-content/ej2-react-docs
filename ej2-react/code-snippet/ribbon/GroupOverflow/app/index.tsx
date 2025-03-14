{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize, RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-splitbuttons";

function App() {

    const pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
    const findOptions = [{ text: "Find", iconCss: "e-icons e-search" }, { text: "Advanced find", iconCss: "e-icons e-search" }, { text: "Go to", iconCss: "e-icons e-arrow-right" }];
    const selectOptions = [{ text: "Select All" }, { text: "Select Objects" }];
    const fontSize: string[] = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"];
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];

    return (
        <RibbonComponent id="ribbon" activeLayout="Simplified">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard" groupIconCss="e-icons e-paste">
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
                                        <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Medium} buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" allowedSizes={RibbonItemSize.Medium} buttonSettings={{ iconCss: "e-icons e-format-painter", content: "Format Painter" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Font" groupIconCss="e-icons e-bold" enableGroupOverflow={true}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 2 }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontSize, index: 4 }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" allowedSizes={RibbonItemSize.Small} colorPickerSettings={{ value: '#123456' }}>
                                        </RibbonItemDirective>
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
                        <RibbonGroupDirective header="Editor" groupIconCss="e-icons e-edit">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-search", items: findOptions, content: "Find" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-replace", content: "Replace" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
