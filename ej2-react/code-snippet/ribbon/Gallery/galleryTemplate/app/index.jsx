{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonGallery, Inject } from '@syncfusion/ej2-react-ribbon';

function App() {

  function galleryTemplate(items){
    return <div className={`gallery-template ${items.cssClass}`}>
        <table className="table">
            <tbody>
                <tr className="row_one">
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                </tr>
                <tr className="row_two">
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                </tr>
                <tr className="row_three">
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                    <td className="tableContent">—</td>
                </tr>
            </tbody>
        </table>
      </div>;
  }

  const gallerySettingsValue = ({
    template: galleryTemplate,
    popupTemplate: galleryTemplate,
    itemCount: 7,
    groups: [{
      header: 'Plain Tables',
      items: [
        {
          cssClass: "plainTables_item_1"
        },
        {
          cssClass: "plainTables_item_2"
        },
        {
          cssClass: "plainTables_item_3"
        },
        {
          cssClass: "plainTables_item_4"
        },
        {
          cssClass: "plainTables_item_5"
        },
        {
          cssClass: "plainTables_item_6"
        },
        {
          cssClass: "plainTables_item_7"
        }
      ]
    }, {
      header: 'List Tables',
      items: [
        {
          cssClass: "listTables_item_1"
        },
        {
          cssClass: "listTables_item_2"
        },
        {
          cssClass: "listTables_item_3"
        },
        {
          cssClass: "listTables_item_4"
        },
        {
          cssClass: "listTables_item_5"
        },
        {
          cssClass: "listTables_item_6"
        },
        {
          cssClass: "listTables_item_7"
        }
      ]
    }]
  });
  return (
    <RibbonComponent id='ribbon'>
      <RibbonTabsDirective>
        <RibbonTabDirective header='Home'>
          <RibbonGroupsDirective>
            <RibbonGroupDirective header='Clipboard' groupIconCss='e-icons e-paste'>
              <RibbonCollectionsDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type='SplitButton' splitButtonSettings={{ iconCss: 'e-icons e-paste',items: [{ text: 'Keep Source Format' }, { text: 'Merge Format' }, { text: 'Keep Text Only' }], content: 'Paste' }}>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Cut', iconCss: 'e-icons e-cut' }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Copy', iconCss: 'e-icons e-copy' }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Format Painter', iconCss: 'e-icons e-format-painter' }}>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
              </RibbonCollectionsDirective>
            </RibbonGroupDirective>
            <RibbonGroupDirective header='Table Styles'>
              <RibbonCollectionsDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type='Gallery' gallerySettings={ gallerySettingsValue }>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
              </RibbonCollectionsDirective>
            </RibbonGroupDirective>
            <RibbonGroupDirective header='Insert'>
              <RibbonCollectionsDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Above', iconCss: 'e-icons e-insert-above' }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Below', iconCss: 'e-icons e-insert-below' }}>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
                <RibbonCollectionDirective>
                  <RibbonItemsDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Left', iconCss: 'e-icons e-insert-left' }}>
                    </RibbonItemDirective>
                    <RibbonItemDirective type='Button' buttonSettings={{ content: 'Right', iconCss: 'e-icons e-insert-right' }}>
                    </RibbonItemDirective>
                  </RibbonItemsDirective>
                </RibbonCollectionDirective>
              </RibbonCollectionsDirective>
            </RibbonGroupDirective>
          </RibbonGroupsDirective>
        </RibbonTabDirective>
      </RibbonTabsDirective>
      <Inject services={[ RibbonGallery ]} />
    </RibbonComponent>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}