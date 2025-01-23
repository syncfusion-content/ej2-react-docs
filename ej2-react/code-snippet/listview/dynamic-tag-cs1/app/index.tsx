{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { Browser, EventHandler } from "@syncfusion/ej2-base";

function App() {
  //Define an array of JSON data
  let data: any[] = [
    { Id: "Brooke", Name: "Brooke" },
    { Id: "Claire", Name: "Claire" },
    { Id: "Erik", Name: "Erik" },
    { Id: "Grace", Name: "Grace" },
    { Id: "Jacob", Name: "Jacob" }
  ];

  let fields: object = { text: "Name" };
  let position: any = null;
  let animation: object = { effect: "None" };
  let dialogInstance: DialogComponent | null = null;
  let listviewInstance: ListViewComponent | null = null;
  let brookeTag: object[] = [
    { id: "list11", Name: "Discover Music" },
    { id: "list12", Name: "Sales and Events" },
    { id: "list13", Name: "Categories" },
    { id: "list14", Name: "MP3 Albums" },
    { id: "list15", Name: "More in Music" }
  ];

  let claireTag: object[] = [
    { id: "list21", Name: "Songs" },
    { id: "list22", Name: "Bestselling Albums" },
    { id: "list23", Name: "New Releases" },
    { id: "list24", Name: "Bestselling Songs" }
  ];

  let erikTag: object[] = [
    { id: "list31", Name: "Artwork" },
    { id: "list32", Name: "Abstract" },
    { id: "list33", Name: "Acrylic Mediums" },
    { id: "list34", Name: "Creative Acrylic" },
    { id: "list35", Name: "Canvas Art" }
  ];

  let graceTag: object[] = [
    { id: "list41", Name: "Rock" },
    { id: "list42", Name: "Gospel" },
    { id: "list43", Name: "Latin Music" },
    { id: "list44", Name: "Jazz" }
  ];

  let jacobTag: object[] = [
    { id: "list51", Name: "100 Albums" },
    { id: "list52", Name: "Hip-Hop and R&B Sale" },
    { id: "list53", Name: "CD Deals" }
  ];

  let datasource: any = {
    Brooke: brookeTag,
    Claire: claireTag,
    Erik: erikTag,
    Grace: graceTag,
    Jacob: jacobTag
  };
  let dialogListInstance: any;

  function renderDialog(id: any) {
    if (document.getElementsByClassName("e-popup-open").length !== 0) {
      if (dialogInstance) dialogInstance.hide();
    }
    if (dialogInstance) {
      let listElem: any = dialogInstance.element.querySelector("#list");
      dialogListInstance =
        listElem && listElem.ej2_instances && listElem.ej2_instances[0]
          ? listElem.ej2_instances[0]
          : undefined;
      if (dialogListInstance) {
        EventHandler.remove(dialogListInstance, "select", addTag);
        dialogListInstance.dataSource = datasource[id];
        dialogListInstance.fields = fields;
        EventHandler.add(dialogListInstance, "select", addTag, this);
        dialogListInstance.appendTo(listElem);
        dialogListInstance.dataBind();
        dialogInstance.position = {
          X:
            (listviewInstance as any).element.querySelector(".e-add-icon").getBoundingClientRect()
              .left + 50,
          Y:
            (listviewInstance as any).element.querySelector(".e-add-icon").getBoundingClientRect()
              .top - 5
        };
        dialogInstance.show();
      }
    }
  }

  function addTag(e: any) {
    let listTag = document.createElement("span");
    listTag.className = "advanced-option";
    let labelElem = document.createElement("span");
    labelElem.className = "label";
    let deleteElem = document.createElement("span");
    deleteElem.className = "delete";
    deleteElem.onclick = removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag = document.createElement("span");
    tag.className = "advanced-option-list";
    tag.appendChild(listTag);
    (listviewInstance as any).element.querySelector(".e-active").appendChild(tag);
  }
  function removeTag() {
    (this as any).parentNode.parentNode.remove();
  }

  function handleClick(e: any) {
    renderDialog(e.currentTarget.id);
  }

  function listtemplate(data: any): JSX.Element {
    return (
      <div>
        <span className="templatetext">{data.Name}</span>
        <span className="designationstyle">
          <ButtonComponent
            id={data.Id}
            className="e-but e-small e-round"
            iconCss={"e-icons e-add-icon"}
            onClick={handleClick.bind(this)}
          />
        </span>
      </div>
    );
  }

  function dialogContent(): JSX.Element {
    return <ListViewComponent id="list" showHeader={true} headerTitle="Favorite" width={"200px"} />;
  }
  return (
    <div id="sample">
      <ListViewComponent
        id="template-list"
        dataSource={data}
        fields={fields}
        template={listtemplate.bind(this) as any}
        ref={scope => {
          listviewInstance = scope;
        }}
      />
      <DialogComponent
        id="dialog"
        animationSettings={animation as any}
        content={dialogContent as any}
        visible={false}
        ref={dialog => (dialogInstance = dialog)}
        width={"200px"}
        showCloseIcon={true}
        position={position}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



{% endraw %}