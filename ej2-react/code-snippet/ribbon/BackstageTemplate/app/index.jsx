{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective , RibbonBackstage, Inject  } from "@syncfusion/ej2-react-ribbon";

function App() {
    let ribbonEle = null;
    useEffect(()=> {
        ribbonEle = document.getElementById('ribbon');
        const backstageButton = document.querySelector('.e-ribbon-backstage') ;
        if (backstageButton) {
            backstageButton.addEventListener('click', displayPopup);
        }
    },[])

    const backstageSettings = {
        visible: true,
        template: homeContentTemplate()
    }

    function displayPopup() {
        let backstagePopup = ribbonEle.querySelector('#ribbon_backstagepopup');
        if (backstagePopup) {
          backstagePopup.style.display = 'block';
        }
      }

    function contentClick (id) {
        let content = ribbonEle.querySelector('.content-open');
        if(content) { content.classList.replace('content-open', 'content-close'); }
        ribbonEle.querySelector('#' + id +'-wrapper').classList.add('content-open');
    }

    function closeContent () {
        ribbonEle.querySelector('#ribbon_backstagepopup').style.display = 'none'
    }

    function homeContentTemplate () {
        return "<div id='temp-content' style='width: 550px; height: 350px; display: flex'><div id='items-wrapper' style='width: 130px; height:100%; background: #779de8;'><ul><li id='close' onclick='closeContent()'><span class='e-icons e-close'></span>Close</li><li id='new' onclick='contentClick('new')'><span class='e-icons e-file-new'></span>New</li><li id='open' onclick='contentClick('open')'><span class='e-icons e-folder-open'></span>Open</li><li id='save' onclick='contentClick('save')'><span class='e-icons e-save'></span>Save</li></ul></div><div id='content-wrapper'><div id='new-wrapper' class='content-open' style='padding: 20px;'><div id='new-section' class='new-wrapper'><div class='section-title'> New </div><div class='category_container'><div class='doc_category_image'></div><span class='doc_category_text'> New document </span></div></div></div><div id='save-wrapper' class='content-close' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-save'></span> </td><td><span style='display: block; font-size: 14px'> Save as </span><span style='font-size: 12px'> Save as copy online </span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-rename'></span> </td><td><span style='display: block; font-size: 14px'> Rename </span><span style='font-size: 12px'>Rename this file. </span></td></tr></tbody></table></div></div><div id='open-wrapper' class='content-close' style='padding: 20px;'><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td><span style='display: block; font-size: 14px'> Ribbon.docx </span><span style='font-size: 12px'> EJ2 >> Components >> Navigations >> Ribbon >> default </span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td><span style='display: block; font-size: 14px'> Classic_layout.docx </span><span style='font-size: 12px'>  EJ2 >> Components >> Navigations >> Ribbon >> layouts </span></td></tr></tbody></table></div><div class='section-content' style='padding: 12px 0px; cursor: pointer'><table><tbody><tr><td> <span class='doc_icon e-icons e-open-link'></span> </td><td><span style='display: block; font-size: 14px'> Simplified_layout.docx </span><span style='font-size: 12px'> EJ2 >> Components >> Navigations >> Ribbon >> layouts </span></td></tr></tbody></table></div></div></div></div>"
    }
    

    return (
        <RibbonComponent id="ribbon" backStageMenu={backstageSettings}>
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
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}