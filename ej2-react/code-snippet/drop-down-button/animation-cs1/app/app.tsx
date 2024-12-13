import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {

  let items: ItemModel[] = [
    { text: 'Unread' },
    { text: 'Has Attachments' },
    { text: 'Categorized' },
    { separator: true },
    { text: 'Important' },
    { text: 'More Filters' }
  ];

  return (
    <div>
      <DropDownButtonComponent
        items={items}
        animationSettings={{ effect: 'SlideDown', duration: 800, easing: 'ease' }}
      >
        Slide Down
      </DropDownButtonComponent>
      <DropDownButtonComponent
        items={items}
        animationSettings={{ effect: 'FadeIn', duration: 800, easing: 'ease' }}
      >
        Fade In
      </DropDownButtonComponent>
      <DropDownButtonComponent
        items={items}
        animationSettings={{ effect: 'ZoomIn', duration: 800, easing: 'ease' }}
      >
        Zoom In
      </DropDownButtonComponent>
    </div>
  );
}

export default App;

ReactDom.render(<App />, document.getElementById('button'));