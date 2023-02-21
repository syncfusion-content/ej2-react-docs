{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Dropdown } from './Dropdown';

function App() {
  let tabObj: TabComponent;

  const addButtonClicked = (e: any): void => {
    const newTabItem = [
      {
        header: { text: 'DynamicTabItem' },
        content: thirdDropdownTemplate
      }
    ];
    tabObj.addTab(newTabItem as any, 1);
  }

  const removeButtonClicked = (e: any): void => {
    tabObj.removeTab(1);
  }

  function firstDropdownTemplate() {
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

  function secondDropdownTemplate() {
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

  function thirdDropdownTemplate() {
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

  function datePickerTemplate() {
    let target: string = document.querySelector('.e-toolbar-item.e-active .e-tab-text')
      .innerHTML;
    return (
      <div>
        <h1>{target} Content</h1>
        <br />
        <DatePickerComponent />
      </div>
    );
  }

  let tabItemsHeaderText: any = [
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
        ref={tab => {
          tabObj = tab;
        }}
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



{% endraw %}