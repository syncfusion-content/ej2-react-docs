{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonBackstage , Inject, BackStageMenuModel } from "@syncfusion/ej2-react-ribbon";

function App() {
    const backstageSettings: BackStageMenuModel = {
        visible: true,
        items: [
            { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: homeContentTemplate() },
            { id: 'new', text: 'New', iconCss: 'e-icons e-file-new', content: newContentTemplate() },
            { id: 'open', text: 'Open', iconCss: 'e-icons e-folder-open', content: openContentTemplate() }
        ],
        backButton: {
            text: 'Close',
        }
    }

    function homeContentTemplate () {
        return "<div id='home-wrapper' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'> New document </span></div></div><div id='block-wrapper'><div class='section-title'> Recent </div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td><span style='display: block; font-size: 14px'> Ribbon.docx </span><span style='font-size: 12px'> EJ2 >> Components >> Navigations >> Ribbon >> default </span></td></tr></tbody></table></div></div></div>"
    }
    
    function newContentTemplate () {
        return (
            "<div id='new-content' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'> New document </span></div></div></div> "
        )
    }

    function openContentTemplate () {
        return (
            "<div style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td><span style='display: block; font-size: 14px'> Open in Desktop App </span><span style='font-size: 12px'> Use the full functionality of Ribbon </span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-protect-sheet'></span> </td><td><span style='display: block; font-size: 14px'> Protect Document </span><span style='font-size: 12px'>To prevent accidental changes, this document has been set to open as view-only.</span></td></tr></tbody></table></div></div>"
        )
    }
    return (
        <RibbonComponent id="backstage-ribbon" backStageMenu={backstageSettings}>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Paragraph">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-paste", content: "Paste" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonBackstage]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}