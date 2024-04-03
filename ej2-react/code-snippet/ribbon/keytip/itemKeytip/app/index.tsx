{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, RibbonItemSize, RibbonGroupButtonSelection, RibbonColorPicker, RibbonKeyTip } from '@syncfusion/ej2-react-ribbon';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';

function App() {
    let ribbonObj = React.useRef<RibbonComponent>(null);

    const ribbonCreated = () => {
      ribbonObj.current.ribbonKeyTipModule.showKeyTips('H');
    };
    const gallerySettings: RibbonGallerySettingsModel = (
      {
        itemCount: 3,
        groups: [{
          itemWidth: '100',
          header: 'Styles',
          items: [{
            content: 'Normal'
          }, {
            content: 'No Spacing'
          }, {
            content: 'Heading 1'
          }, {
            content: 'Heading 2'
          }, {
            content: 'Heading 3'
          }, {
            content: 'Heading 4'
          }, {
            content: 'Heading 5'
          }]
        }]
      }
  );
  
  const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "Draw Table" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
  const pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }];
  const fontSize: string[] = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"];
  const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
  
  return (
      <div>
          <RibbonComponent id='ribbon' ref={ribbonObj} enableKeyTips={true} created={ribbonCreated}>
              <RibbonTabsDirective>
                  <RibbonTabDirective header='Home' keyTip='H'>
                      <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard" id="clipboard" keyTip='CD' groupIconCss="e-icons e-paste" showLauncherIcon={true}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" keyTip='PA' id="pastebtn" allowedSizes={RibbonItemSize.Large}
                                            splitButtonSettings={{ iconCss: "e-icons e-paste", items: pasteOptions, content: "Paste" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" keyTip='CU' buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" keyTip='CO' buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" keyTip='CS' buttonSettings={{ iconCss: "e-icons e-format-painter", content: "Format Painter" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Font" keyTip='FB' overflowHeader="More Font Options" groupIconCss="e-icons e-bold" isCollapsible={false} enableGroupOverflow={true} orientation="Row" cssClass='font-group'>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" keyTip='O1' comboBoxSettings={{ dataSource: fontStyle, index: 3, label: 'Font Style', width: '115px', popupWidth: '150px', allowFiltering: true }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="ComboBox" keyTip='O2' comboBoxSettings={{ dataSource: fontSize, index: 3, label: 'Font Size', width: '65px', popupWidth: '85px', allowFiltering: true }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="GroupButton" keyTip='GB' allowedSizes={RibbonItemSize.Small} groupButtonSettings={{selection: RibbonGroupButtonSelection.Single, items: [{iconCss: 'e-icons e-bold', keyTip: '1', content: 'Bold', selected: true}, {iconCss: 'e-icons e-italic', keyTip: '2', content: 'Italic'}, {iconCss: 'e-icons e-underline', keyTip: '3', content: 'Underline'}, {iconCss: 'e-icons e-strikethrough', keyTip: '4', content: 'Strikethrough'},{iconCss: 'e-icons e-change-case', keyTip: '5', content: 'Change Case'}]}}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="ColorPicker" keyTip='CP' allowedSizes={RibbonItemSize.Small} colorPickerSettings={{value: '#123456'}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Gallery">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Gallery" keyTip='GY' gallerySettings={gallerySettings} >
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Tables" isCollapsible={false}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" keyTip='T' allowedSizes={RibbonItemSize.Large} dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                        <RibbonGroupDirective header="Show" isCollapsible={true}>
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="CheckBox" keyTip='R1' checkBoxSettings={{ label: "Ruler", checked: false }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="CheckBox" keyTip='R2' checkBoxSettings={{ label: "Gridlines", checked: false }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="CheckBox" keyTip='R3' checkBoxSettings={{ label: "Navigation Pane", checked: true }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                      </RibbonGroupsDirective>
                  </RibbonTabDirective>
              </RibbonTabsDirective>
              <Inject services={[RibbonGallery, RibbonColorPicker, RibbonKeyTip]} />
          </RibbonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}