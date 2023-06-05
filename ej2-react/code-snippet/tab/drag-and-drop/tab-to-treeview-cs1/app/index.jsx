import { useRef, useEffect } from 'react';
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective, TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
const ReactApp = () => {
  const tabObj = useRef(null);
  const treeObj = useRef(null);
  let headerText = [{ text: "India" }, { text: "Australia" }, { text: "USA" }, { text: "France" }];
  let allowDragAndDrop = true;
  let data = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];
  let field = { dataSource: data, id: 'id', text: 'text' };
  let i = 0;

  useEffect(() => {
    const tabElement = tabObj.current.element;
    if (!isNullOrUndefined(tabElement)) {
      tabElement.querySelector('.e-tab-header').classList.add('e-droppable');
      tabElement.querySelector('.e-content').classList.add('tab-content');
    }
  }, []);

  const tabDragStop = (args) => {
    const dragTabIndex = Array.prototype.indexOf.call(tabObj.current.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
    const dragItem = tabObj.current.items[dragTabIndex];
    const dropNode = args.target.closest('#draggableTreeview .e-list-item');
    if (dropNode != null && !args.target.closest('#draggableTab .e-toolbar-item')) {
      args.cancel = true;
      const dropContainer = document.querySelector('.treeview-external-drop-tab').querySelectorAll('.e-list-item');
      const dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);
      const newNode = [{ id: 'list' + i, text: dragItem.header?.text ?? '' }];
      tabObj.current.removeTab(dragTabIndex);
      treeObj.current.addNodes(newNode, 'Treeview', dropIndex);
    }
  }

  const indiaContent = () => {
    return <div>
      India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
    </div>;
  }
  const ausContent = () => {
    return <div>
      Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.
    </div>;
  }
  const usaContent = () => {
    return <div>
      The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.
    </div>;
  }
  const franceContent = () => {
    return <div>
      France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.
    </div>;
  }

  return (
    <div>
      <TabComponent ref={tabObj} heightAdjustMode='Auto' allowDragAndDrop={allowDragAndDrop} dragArea="#container" dragged={tabDragStop}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={indiaContent} />
          <TabItemDirective header={headerText[1]} content={ausContent} />
          <TabItemDirective header={headerText[2]} content={usaContent} />
          <TabItemDirective header={headerText[3]} content={franceContent} />
        </TabItemsDirective>
      </TabComponent>
      <br></br>
      <TreeViewComponent id="draggableTreeview" ref={treeObj} cssClass="treeview-external-drop-tab" fields={field} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);