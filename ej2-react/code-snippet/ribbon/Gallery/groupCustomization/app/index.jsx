{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery } from '@syncfusion/ej2-react-ribbon';
function App() {

    const pasteOptions = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
    const gallerySettings = (
        {
            groups: [{
                header: 'Styles',
                cssClass: "custom-group",
                items: [
                    {
                        content: 'Normal'
                    }, {
                        content: 'No Spacing'
                    }, {
                        content: 'Heading 1'
                    }, {
                        content: 'Heading 2'
                    }
                ]
            }]
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Clipboard" groupIconCss="e-icons e-paste">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOptions, content: "Paste" }}>
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
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
