{% raw %}



import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { enableRipple } from "@syncfusion/ej2-base";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
enableRipple(true);

function App() {
  React.useEffect(() => {
    componentDidMount();
  }, []);
  //Define an array of JSON data
  let firstListData: any[] = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" }
  ];

  let secondListData: any[] = [
    { text: "Aston Martin One- 77", id: "list-07" },
    { text: "Jaguar XJ220", id: "list-08" },
    { text: "McLaren P1", id: "list-09" },
    { text: "Ferrari LaFerrari", id: "list-10" }
  ];
  let firstInput: HTMLInputElement | null = null;
  let secondInput: HTMLInputElement | null = null;
  let listFirstInstance: ListViewComponent | null = null;
  let listSecondInstance: ListViewComponent | null = null;
  let firstBtnInstance: ButtonComponent | null = null;
  let secondBtnInstance: ButtonComponent | null = null;
  let thirdBtnInstance: ButtonComponent | null = null;
  let fourthBtnInstance: ButtonComponent | null = null;

  function componentDidMount() {
    if (listFirstInstance && listSecondInstance) {
      firstListData = (listFirstInstance.dataSource as any[]).slice();
      secondListData = (listSecondInstance.dataSource as any[]).slice();
    }
  }

  //Map the appropriate columns to fields property
  let fields: Object = { text: "text", id: "id" };

  function onFirstListSelect() {
    if (secondBtnInstance) secondBtnInstance.disabled = false;
  }

  function onSecondListSelect() {
    if (thirdBtnInstance) thirdBtnInstance.disabled = false;
  }

  function updateFirstListData() {
    if (listFirstInstance) {
      Array.prototype.forEach.call(
        (listFirstInstance as any).liCollection as any[],
        (list: any) => {
          firstListData.forEach((data, index) => {
            if (list.innerText.trim() === data.text) {
              delete firstListData[index];
            }
          });
        }
      );
      if (firstInput) {
        firstInput.value = "";
      }
      let ds: any[] = [];
      firstListData.forEach(data => {
        ds.push(data);
      });
      firstListData = ds;
    }
  }

  function updateSecondListData() {
    Array.prototype.forEach.call((listSecondInstance as any).liCollection, (list: any) => {
      secondListData.forEach((data, index) => {
        if (list.innerText.trim() === data.text) {
          delete secondListData[index];
        }
      });
    });
    if (secondInput) {
      secondInput.value = "";
    }
    let ds: any[] = [];
    secondListData.forEach(data => {
      ds.push(data);
    });
    secondListData = ds;
  }

  function onFirstKeyUp(e: any) {
    if (firstInput) {
      let value = firstInput.value;
      var data = new DataManager(firstListData).executeLocal(
        new Query().where("text", "startswith", value, true)
      );
      if (listFirstInstance) {
        if (!value) {
          listFirstInstance.dataSource = firstListData.slice();
        } else {
          listFirstInstance.dataSource = data as any[];
        }
        listFirstInstance.dataBind();
      }
    }
  }

  function onSecondKeyUp(e: any) {
    if (secondInput) {
      let value = secondInput.value;
      var data = new DataManager(secondListData).executeLocal(
        new Query().where("text", "startswith", value, true)
      );
      if (listSecondInstance) {
        if (!value) {
          listSecondInstance.dataSource = secondListData.slice();
        } else {
          listSecondInstance.dataSource = data as any[];
        }
        listSecondInstance.dataBind();
      }
    }
  }

  function setButtonState() {
    if (
      listFirstInstance &&
      firstBtnInstance &&
      secondBtnInstance &&
      listSecondInstance &&
      fourthBtnInstance &&
      thirdBtnInstance
    ) {
      if ((listFirstInstance.dataSource as any[]).length) {
        firstBtnInstance.disabled = false;
      } else {
        firstBtnInstance.disabled = true;
        secondBtnInstance.disabled = true;
      }

      if ((listSecondInstance.dataSource as any[]).length) {
        fourthBtnInstance.disabled = false;
      } else {
        fourthBtnInstance.disabled = true;
        thirdBtnInstance.disabled = true;
      }
    }
  }

  function firstBtnClick() {
    if (listFirstInstance && firstBtnInstance && listSecondInstance) {
      listSecondInstance.dataSource = Array.prototype.concat.call(
        listFirstInstance.dataSource,
        listSecondInstance.dataSource
      );
      updateFirstListData();
      listFirstInstance.removeMultipleItems((listFirstInstance as any).liCollection);
      firstListData = firstListData.concat(listFirstInstance.dataSource);
      secondListData = listSecondInstance.dataSource.slice();
      firstBtnInstance.disabled = true;
      onFirstKeyUp(null);
      setButtonState();
    }
  }

  function secondBtnClick() {
    if (listFirstInstance && secondBtnInstance && listSecondInstance) {
      let e = listFirstInstance.getSelectedItems();
      if (e) {
        listSecondInstance.dataSource = Array.prototype.concat.call(
          listSecondInstance.dataSource,
          e.data
        );
        listFirstInstance.removeItem(e.item as any);
        firstListData = listFirstInstance.dataSource as any[];
        secondListData = listSecondInstance.dataSource.slice();
        onFirstKeyUp(null);
        secondBtnInstance.disabled = true;
        setButtonState();
      }
    }
  }

  function thirdBtnClick() {
    if (listFirstInstance && listSecondInstance && thirdBtnInstance) {
      let e = listSecondInstance.getSelectedItems();
      if (e) {
        listFirstInstance.dataSource = Array.prototype.concat.call(
          listFirstInstance.dataSource,
          e.data
        );
        listSecondInstance.removeItem(e.item as any);
        secondListData = listSecondInstance.dataSource as any[];
        firstListData = listFirstInstance.dataSource.slice();
        onSecondKeyUp(null);
        thirdBtnInstance.disabled = true;
        setButtonState();
      }
    }
  }

  function fourthBtnClick() {
    if (listFirstInstance && listSecondInstance && fourthBtnInstance) {
      listFirstInstance.dataSource = Array.prototype.concat.call(
        listFirstInstance.dataSource,
        listSecondInstance.dataSource
      );
      updateSecondListData();
      listSecondInstance.removeMultipleItems((listSecondInstance as any).liCollection);
      secondListData = secondListData.concat(listSecondInstance.dataSource);
      firstListData = listFirstInstance.dataSource.slice();
      onSecondKeyUp(null);
      setButtonState();
    }
  }

  function firstInputKeyUp() {
    if (
      listFirstInstance &&
      firstBtnInstance &&
      secondBtnInstance &&
      listSecondInstance &&
      fourthBtnInstance &&
      thirdBtnInstance &&
      firstInput
    ) {
      let value = firstInput.value;
      var data = new DataManager(firstListData).executeLocal(
        new Query().where("text", "startswith", value, true)
      );
      if (!value) {
        listFirstInstance.dataSource = firstListData.slice();
      } else {
        listFirstInstance.dataSource = data as any[];
      }
      listFirstInstance.dataBind();
    }
  }

  function secondInputKeyUp() {
    if (
      listFirstInstance &&
      firstBtnInstance &&
      secondBtnInstance &&
      listSecondInstance &&
      fourthBtnInstance &&
      thirdBtnInstance &&
      secondInput
    ) {
      let value = secondInput.value;
      var data = new DataManager(secondListData).executeLocal(
        new Query().where("text", "startswith", value, true)
      );
      if (!value) {
        listSecondInstance.dataSource = secondListData.slice();
      } else {
        listSecondInstance.dataSource = data as any[];
      }
      listSecondInstance.dataBind();
    }
  }

  return (
    <div id="container">
      <div className="col-lg-12 control-section">
        <div>
          <h3>Dual List</h3>
          <div id="text1">
            <input
              className="e-input"
              type="text"
              id="firstInput"
              ref={(inputRef: any) => (firstInput = inputRef)}
              placeholder="Filter"
              onKeyUp={firstInputKeyUp.bind(this)}
              title="Type in a name"
            />
          </div>
          <ListViewComponent
            id="list-1"
            dataSource={firstListData}
            fields={fields}
            sortOrder="Ascending"
            select={onFirstListSelect.bind(this)}
            ref={scope => {
              listFirstInstance = scope;
            }}
          />
          <div id="btn">
            <ButtonComponent
              onClick={firstBtnClick.bind(this)}
              ref={button1 => {
                firstBtnInstance = button1;
              }}
            >
              {" "}
              {">>"}
            </ButtonComponent>
            <ButtonComponent
              onClick={secondBtnClick.bind(this)}
              ref={button2 => {
                secondBtnInstance = button2;
              }}
            >
              {" "}
              {">"}
            </ButtonComponent>
            <ButtonComponent
              onClick={thirdBtnClick.bind(this)}
              ref={button3 => {
                thirdBtnInstance = button3;
              }}
            >
              {" "}
              {"<"}{" "}
            </ButtonComponent>
            <ButtonComponent
              onClick={fourthBtnClick.bind(this)}
              ref={button4 => {
                fourthBtnInstance = button4;
              }}
            >
              {" "}
              {"<<"}{" "}
            </ButtonComponent>
          </div>
          <div id="text2">
            <input
              className="e-input"
              type="text"
              onKeyUp={secondInputKeyUp.bind(this)}
              id="secondInput"
              ref={(inputRef: any) => (secondInput = inputRef)}
              placeholder="  Filter"
              title="Type in a name"
            />
          </div>
          <ListViewComponent
            id="list-2"
            dataSource={secondListData}
            fields={fields}
            sortOrder="Ascending"
            select={onSecondListSelect.bind(this)}
            ref={list => {
              listSecondInstance = list;
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}