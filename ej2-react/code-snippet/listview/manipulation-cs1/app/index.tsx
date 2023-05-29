{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { closest, enableRipple, MouseEventArgs } from '@syncfusion/ej2-base';
import { DataManager, Query } from "@syncfusion/ej2-data";
import { DialogComponent } from '@syncfusion/ej2-react-popups';

function App() {
  let ascClass: string = "e-sort-icon-ascending";
  let desClass: string = "e-sort-icon-descending";
  //Define an array of JSON data
  let fruitsdata: { [key: string]: Object }[] = [
    { text: "Date", id: "1", imgUrl: "./dates.jpg" },
    { text: "Fig", id: "2", imgUrl: "./fig.jpg" },
    { text: "Apple", id: "3", imgUrl: "./apple.png" },
    { text: "Apricot", id: "4", imgUrl: "./apricot.jpg" },
    { text: "Grape", id: "5", imgUrl: "./grape.jpg" },
    { text: "Strawberry", id: "6", imgUrl: "./strawberry.jpg" },
    { text: "Pineapple", id: "7", imgUrl: "./pineapple.jpg" },
    { text: "Melon", id: "8", imgUrl: "./melon.jpg" },
    { text: "Lemon", id: "9", imgUrl: "./lemon.jpg" },
    { text: "Cherry", id: "10", imgUrl: "./cherry.jpg" }
  ];

  let add: HTMLElement | null = null;
  let search: HTMLInputElement | null = null;
  let sort: HTMLElement | null = null;
  let imgURL: HTMLInputElement | null = null;
  let name: HTMLInputElement | null = null;
  let dialogInstance: DialogComponent | null = null;
  let listviewInstance: ListViewComponent | null = null;
  let buttonObj = [
    {
      click: dlgButtonClick.bind(this),
      buttonModel: { content: "Add", isPrimary: true }
    }
  ];

  function addItem() {
    if (name) name.value = "";
    if (imgURL) imgURL.value = "";
    if (dialogInstance) dialogInstance.show();
  }

  //Here we are removing list item
  function onDeleteBtnClick(e: any) {
    e.stopPropagation();
    let li: Element = closest(e.currentTarget, ".e-list-item");
    let data = (listviewInstance as any).findItem(li);
    (listviewInstance as any).removeItem(data);
    new DataManager(fruitsdata).remove("id", { id: data["id"] });
  }

  //Here we are adding list item
  function dlgButtonClick() {
    if (listviewInstance && dialogInstance) {
      let name: string = (name as any).value;
      let url: string = (imgURL as any).value;
      let id: number = Math.random() * 10000;
      listviewInstance.addItem([{ text: name, id: id, imgUrl: url }]);
      fruitsdata.push({ text: name, id: id, imgUrl: url });
      dialogInstance.hide();
    }
  }

  //Here we are sorting list item
  function sortItems() {
    if (listviewInstance && sort) {
      let ele = sort.firstElementChild as HTMLElement;
      let des = ele.classList.contains(desClass) ? true : false;
      if (des) {
        ele.classList.remove(desClass);
        ele.classList.add(ascClass);
        listviewInstance.sortOrder = "Ascending";
      } else {
        ele.classList.remove(ascClass);
        ele.classList.add(desClass);
        listviewInstance.sortOrder = "Descending";
      }
      listviewInstance.dataBind();
    }
  }

  //Here, the list items are filtered using the DataManager instance.
  function onKeyUp() {
    if (listviewInstance) {
      let value: string = (search as any).value;
      let data: Object[] = new DataManager(fruitsdata).executeLocal(
        new Query().where("text", "startswith", value, true)
      );
      if (!value) {
        listviewInstance.dataSource = fruitsdata.slice();
      } else {
        listviewInstance.dataSource = data as { [key: string]: Object }[];
        listviewInstance.dataBind();
      }
    }
  }

  function content(data: any): JSX.Element {
    return (
      <div id="listDialog">
        <div className="input_name">
          <label htmlFor="name">Fruit Name: </label>
          <input
            id="name"
            ref={scope => {
              name = scope;
            }}
            className="e-input"
            type="text"
            placeholder="Enter fruit name"
          />
        </div>
        <div>
          <label htmlFor="imgurl">Fruit Image: </label>
          <input
            id="imgurl"
            ref={scope => {
              imgURL = scope;
            }}
            className="e-input"
            type="text"
            placeholder="Enter image url"
          />
        </div>
      </div>
    );
  }

  function listtemplate(data: any): JSX.Element {
    return (
      <div className="fruits">
        <div className="first">
          <img id="listImage" src={data.imgUrl} alt="fruit" />
          <button
            className="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn"
            data-ripple="true"
          >
            <span
              className="e-btn-icon e-icons delete-icon"
              onClick={onDeleteBtnClick.bind(this)}
            />
          </button>
        </div>
        <div className="fruitName">{data.text}</div>
      </div>
    );
  }
  return (
    <div id="container">
      <div className="headerContainer">
        <div className="e-input-group">
          <input
            id="search"
            ref={scope => {
              search = scope;
            }}
            className="e-input"
            type="text"
            onKeyUp={onKeyUp.bind(this)}
            placeholder="Search fruits"
          />
          <span className="e-input-group-icon e-input-search" />
        </div>

        <button
          id="sort"
          className="e-control e-btn e-small e-round e-primary e-icon-btn"
          ref={scope => {
            sort = scope;
          }}
          title="Sort fruits"
          onClick={sortItems.bind(this)}
          data-ripple="true"
        >
          <span className="e-btn-icon e-icons e-sort-icon-ascending" />
        </button>

        <button
          id="add"
          className="e-control e-btn e-small e-round e-primary e-icon-btn"
          ref={scope => {
            add = scope;
          }}
          onClick={addItem.bind(this)}
          title="Add fruit"
          data-ripple="true"
        >
          <span className="e-btn-icon e-icons e-add-icon" />
        </button>
      </div>

      <ListViewComponent
        id="list"
        dataSource={fruitsdata.slice()}
        template={listtemplate.bind(this) as any}
        sortOrder="Ascending"
        ref={scope => {
          listviewInstance = scope;
        }}
      />

      <DialogComponent
        id="dialog"
        header="Add fruit"
        content={content.bind(this) as any}
        visible={false}
        buttons={buttonObj}
        ref={dialog => (dialogInstance = dialog)}
        width={"300px"}
        showCloseIcon={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



{% endraw %}