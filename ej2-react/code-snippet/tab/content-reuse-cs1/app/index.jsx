import { useRef } from 'react';
import * as ReactDOM from 'react-dom/client';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const App = () => {
  const tabObj = useRef(null);
  const Dropdown = (props) => {
    return (
      <div>
        <DropDownListComponent
          dataSource={props.data}
          placeholder="Select a game"
        />
      </div>
    );
  }
  const addButtonClicked = (e) => {
    const newTabItem = [
      {
        header: { text: 'DynamicTabItem' },
        content: thirdDropdownTemplate
      }
    ];
    tabObj.current.addTab(newTabItem, 1);
  }

  const removeButtonClicked = (e) => {
    tabObj.current.removeTab(1);
  }

  const firstDropdownTemplate = () => {
    let sportsData = [
      'Badminton',
      'Basketball',
      'Cricket',
      'Golf',
      'Hockey',
      'Rugby'
    ];
    return <Dropdown data={sportsData} />;
  }

  const secondDropdownTemplate = () => {
    let sportsData = [
      'Cricket',
      'Golf',
      'Hockey',
      'Rugby',
      'Badminton',
      'Basketball'
    ];
    return <Dropdown data={sportsData} />;
  }

  const thirdDropdownTemplate = () => {
    let sportsData = [
      'Rugby',
      'Badminton',
      'Basketball',
      'Cricket',
      'Golf',
      'Hockey'
    ];
    return <Dropdown data={sportsData} />;
  }

  const datePickerTemplate = () => {
    return (
      <div>
        <DatePickerComponent />
      </div>
    );
  }

  let tabItemsHeaderText = [
    { text: 'DatePicker' },
    { text: 'Dropdown' },
    { text: 'Reused Dropdown' }
  ];
  return (
    <div id='container'>
      <button
        id="add"
        className="e-btn"
        onClick={addButtonClicked}
      >
        Click to add
      </button>
      <button
        id="remove"
        className="e-btn"
        onClick={removeButtonClicked}
      >
        Click to remove
      </button>
      <TabComponent
        id="tabElement"
        ref={tabObj}
      >
        <TabItemsDirective>
          <TabItemDirective
            header={tabItemsHeaderText[0]}
            content={datePickerTemplate}
          />
          <TabItemDirective
            header={tabItemsHeaderText[1]}
            content={firstDropdownTemplate}
          />
          <TabItemDirective
            header={tabItemsHeaderText[2]}
            content={secondDropdownTemplate}
          />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


