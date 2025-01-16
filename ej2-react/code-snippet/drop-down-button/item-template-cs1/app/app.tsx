import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items: ItemModel[] = [
    {
      text: 'Home',
      iconCss: 'e-icons e-home',
    },
    {
      text: 'Search',
      iconCss: 'e-icons e-search',
      url: 'http://www.google.com'
    },
    {
      text: 'Yes / No',
      iconCss: 'e-icons e-check-box'
    },
    {
      text: 'Text',
      iconCss: 'e-icons e-caption',
    },
    {
      separator: true
    },
    {
      text: 'Syncfusion',
      iconCss: 'e-icons e-mouse-pointer',
      url: 'http://www.syncfusion.com'
    }
  ];

  function itemTemplate(data: any): any {
    if (data.properties.url) {
      return (
        <div>
          <span className={`e-menu-icon ${data.properties.iconCss}`}></span>
          <span className="custom-class">
            <a href={data.properties.url} target="_blank" rel="noopener noreferrer">
              {data.properties.text}
            </a>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span className={`e-menu-icon ${data.properties.iconCss}`}></span>
          <span className="custom-class">{data.properties.text}</span>
        </div>
      );
    }
  }

  return (
    <div>
      <DropDownButtonComponent items={items} itemTemplate={itemTemplate} >DropDownButton</DropDownButtonComponent>
    </div>
  );
}

export default App;
ReactDom.render(<App />, document.getElementById('button'));
