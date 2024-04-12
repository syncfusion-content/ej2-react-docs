{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    function template(props) {
        const cssClass = "ribbonTemplate " + props.activeSize;
        return (<span className={cssClass}><span className="e-icons e-video"></span><span className="text">Video</span></span>)
    }
    function customTemplate(props) {
        const customcssClass = "custom-template " + props.activeSize;
        return (<div className={customcssClass}><label htmlFor="fname">First name:</label><input type="text" id="fname" name="fname"/><br/><br/><label htmlFor="lname">Last name:</label><input type="text" id="lname" name="lname"/></div>)
    }
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                    <RibbonGroupDirective header="Templates" isCollapsible={false}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Template" itemTemplate={customTemplate}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Multimedia">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Template" itemTemplate={template}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
