{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { closest } from '@syncfusion/ej2-base';
import { DataManager, Query } from "@syncfusion/ej2-data";
import { DialogComponent } from '@syncfusion/ej2-react-popups';
function App() {
    let ascClass = "e-sort-icon-ascending";
    let desClass = "e-sort-icon-descending";
    //Define an array of JSON data
    let fruitsdata = [
        { text: "Date", id: "1", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/dates.jpg" },
        { text: "Fig", id: "2", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/fig.jpg" },
        { text: "Apple", id: "3", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apple.png" },
        { text: "Apricot", id: "4", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/apricot.jpg" },
        { text: "Grape", id: "5", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/grape.jpg" },
        { text: "Strawberry", id: "6", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/strawberry.jpg" },
        { text: "Pineapple", id: "7", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/pineapple.jpg" },
        { text: "Melon", id: "8", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/melon.jpg" },
        { text: "Lemon", id: "9", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/lemon.jpg" },
        { text: "Cherry", id: "10", imgUrl: "https://helpej2.syncfusion.com/documentation/code-snippet/listview/manipulation-cs1/cherry.jpg" }
    ];
    let add = null;
    let search = null;
    let sort = null;
    let imgURL = null;
    let name = null;
    let dialogInstance = null;
    let listviewInstance = null;
    let buttonObj = [
        {
            click: dlgButtonClick.bind(this),
            buttonModel: { content: "Add", isPrimary: true }
        }
    ];
    function addItem() {
        if (name)
            name.value = "";
        if (imgURL)
            imgURL.value = "";
        if (dialogInstance)
            dialogInstance.show();
    }
    //Here we are removing list item
    function onDeleteBtnClick(e) {
        e.stopPropagation();
        let li = closest(e.currentTarget, ".e-list-item");
        let data = listviewInstance.findItem(li);
        listviewInstance.removeItem(data);
        new DataManager(fruitsdata).remove("id", { id: data["id"] });
    }
    //Here we are adding list item
    function dlgButtonClick() {
        if (listviewInstance && dialogInstance) {
            let name = name.value;
            let url = imgURL.value;
            let id = Math.random() * 10000;
            listviewInstance.addItem([{ text: name, id: id, imgUrl: url }]);
            fruitsdata.push({ text: name, id: id, imgUrl: url });
            dialogInstance.hide();
        }
    }
    //Here we are sorting list item
    function sortItems() {
        if (listviewInstance && sort) {
            let ele = sort.firstElementChild;
            let des = ele.classList.contains(desClass) ? true : false;
            if (des) {
                ele.classList.remove(desClass);
                ele.classList.add(ascClass);
                listviewInstance.sortOrder = "Ascending";
            }
            else {
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
            let value = search.value;
            let data = new DataManager(fruitsdata).executeLocal(new Query().where("text", "startswith", value, true));
            if (!value) {
                listviewInstance.dataSource = fruitsdata.slice();
            }
            else {
                listviewInstance.dataSource = data;
                listviewInstance.dataBind();
            }
        }
    }
    function content(data) {
        return (<div id="listDialog">
        <div className="input_name">
          <label htmlFor="name">Fruit Name: </label>
          <input id="name" ref={scope => {
                name = scope;
            }} className="e-input" type="text" placeholder="Enter fruit name"/>
        </div>
        <div>
          <label htmlFor="imgurl">Fruit Image: </label>
          <input id="imgurl" ref={scope => {
                imgURL = scope;
            }} className="e-input" type="text" placeholder="Enter image url"/>
        </div>
      </div>);
    }
    function listtemplate(data) {
        return (<div className="fruits">
        <div className="first">
          <img id="listImage" src={data.imgUrl} alt="fruit"/>
          <button className="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" data-ripple="true">
            <span className="e-btn-icon e-icons delete-icon" onClick={onDeleteBtnClick.bind(this)}/>
          </button>
        </div>
        <div className="fruitName">{data.text}</div>
      </div>);
    }
    return (<div id="container">
      <div className="headerContainer">
        <div className="e-input-group">
          <input id="search" ref={scope => {
            search = scope;
        }} className="e-input" type="text" onKeyUp={onKeyUp.bind(this)} placeholder="Search fruits"/>
          <span className="e-input-group-icon e-input-search"/>
        </div>

        <button id="sort" className="e-control e-btn e-small e-round e-primary e-icon-btn" ref={scope => {
            sort = scope;
        }} title="Sort fruits" onClick={sortItems.bind(this)} data-ripple="true">
          <span className="e-btn-icon e-icons e-sort-icon-ascending"/>
        </button>

        <button id="add" className="e-control e-btn e-small e-round e-primary e-icon-btn" ref={scope => {
            add = scope;
        }} onClick={addItem.bind(this)} title="Add fruit" data-ripple="true">
          <span className="e-btn-icon e-icons e-add-icon"/>
        </button>
      </div>

      <ListViewComponent id="list" dataSource={fruitsdata.slice()} template={listtemplate.bind(this)} sortOrder="Ascending" ref={scope => {
            listviewInstance = scope;
        }}/>

      <DialogComponent id="dialog" header="Add fruit" content={content.bind(this)} visible={false} buttons={buttonObj} ref={dialog => (dialogInstance = dialog)} width={"300px"} showCloseIcon={true}/>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}