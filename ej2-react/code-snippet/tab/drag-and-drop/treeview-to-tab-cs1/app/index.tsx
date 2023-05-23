import { useRef } from 'react';
import * as ReactDOM from 'react-dom/client';
import { TabComponent, TabItemDirective, TabItemsDirective, TabItemModel, TreeViewComponent, DragAndDropEventArgs } from '@syncfusion/ej2-react-navigations';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

const ReactApp = () => {
  const tabObj = useRef<TabComponent>(null);
  const treeObj = useRef<TreeViewComponent>(null);
  let headerText: any = [{ text: "India" }, { text: "Australia" }, { text: "USA" }, { text: "France" }];
  let allowDragAndDrop: boolean = true;
  let data: { [key: string]: Object }[] = [
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
  let field: Object = { dataSource: data, id: 'id', text: 'text' };

  const onNodeDragStop = (args: DragAndDropEventArgs) => {
    let dropElement: Element = args.target.closest('#draggableTab .e-toolbar-item') as Element;
    if (dropElement != null) {
      let tabElement: HTMLElement = tabObj.current.element;
      let dropItemIndex: number = [].slice.call(tabElement.querySelectorAll('.e-toolbar-item')).indexOf(dropElement as never);
      let newTabItem: TabItemModel[] = [{
        header: { 'text': args.draggedNodeData.text.toString() },
        content: args.draggedNodeData.text.toString() + ' Content'
      }];
      tabObj.current.addTab(newTabItem, dropItemIndex);
      treeObj.current.removeNodes([args.draggedNode]);
      args.cancel = true;
    } else {
      let dropNode: Element = args.target.closest('#draggableTreeview .e-list-item ') as Element;
      if (!isNullOrUndefined(dropNode) && args.dropIndicator === 'e-drop-in') {
        args.cancel = true;
      }
    }
  }

  const onNodeDrag = (args: DragAndDropEventArgs) => {
    if (!isNullOrUndefined(args.target.closest('.tab-content') as HTMLElement)) {
      args.dropIndicator = 'e-no-drop';
    } else if (!isNullOrUndefined(args.target.closest('#draggableTab .e-tab-header') as HTMLElement)) {
      args.dropIndicator = 'e-drop-in';
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
      <TabComponent ref={tabObj} id='draggableTab' heightAdjustMode='Auto' dragArea="#container">
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={indiaContent} />
          <TabItemDirective header={headerText[1]} content={ausContent} />
          <TabItemDirective header={headerText[2]} content={usaContent} />
          <TabItemDirective header={headerText[3]} content={franceContent} />
        </TabItemsDirective>
      </TabComponent>
      <br></br>
      <TreeViewComponent id="draggableTreeview" ref={treeObj} dragArea="#container" cssClass="treeview-external-drop-tab" fields={field} nodeDragStop={onNodeDragStop} nodeDragging={onNodeDrag} allowDragAndDrop={allowDragAndDrop} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);