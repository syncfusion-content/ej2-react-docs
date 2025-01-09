import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items = [
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
  const template = `
        <div>
            <span class='e-menu-icon ${'${iconCss}'}'></span>
            ${
                '${url}' 
                ? `<span class='custom-class'><a href='${'${url}'}' target='_blank' rel='noopener noreferrer'>${'${text}'}</a></span>`
                : `<span class='custom-class'>${'${text}'}</span>`
            }
        </div>
    `; 
  const template = `
        <div>
            <span class='e-menu-icon ${'${iconCss}'}'></span>
            ${
                '${url}' 
                ? `<span class='custom-class'><a href='${'${url}'}' target='_blank' rel='noopener noreferrer'>${'${text}'}</a></span>`
                : `<span class='custom-class'>${'${text}'}</span>`
            }
        </div>
    `; 

  return (
    <div>
      <DropDownButtonComponent items={items} itemTemplate = {template} >DropDownButton</DropDownButtonComponent>
    </div>
  );
}

export default App;
ReactDom.render(<App />, document.getElementById('button'));