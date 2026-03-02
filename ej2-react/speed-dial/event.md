---
layout: post
title: Event in React Speed dial component | Syncfusion
description: Learn here all about Event in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Event 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Event in React Speed dial component

The SpeedDial component emits events at different lifecycle stages—from initialization through user interactions to popup state changes. Monitor these events to execute custom logic and control component behavior. This section details each available event and its purpose.

## clicked

The [`clicked`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#clicked) event fires when a user clicks on any SpeedDial action item. Use this event to execute item-specific actions or workflows. The event provides [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemEventArgs/) containing item details like text, iconCss, and ID.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialItemEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function itemClick(args:SpeedDialItemEventArgs){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' clicked={ itemClick }></SpeedDialComponent>
  );
}
export default App;
```

## created

The [`created`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#created) event fires after the SpeedDial component completes initialization and rendering. Use this event to access the component instance and perform setup tasks like binding data or initializing other dependent components.

```ts
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function created(){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' created={ created }></SpeedDialComponent>
  );
}
export default App;
```

## beforeOpen

The [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeopen) event fires before the SpeedDial popup opens. Use this event to prevent popup opening conditionally or prepare the UI before items become visible. The event provides [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) with a `cancel` property to halt the opening action.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialBeforeOpenCloseEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function beforeOpen(args:SpeedDialBeforeOpenCloseEventArgs){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' beforeOpen={ beforeOpen }></SpeedDialComponent>
  );
}
export default App;
```

## onOpen

The [`onOpen`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#onopen) event fires after the SpeedDial popup successfully opens. Use this event to track popup state changes or trigger animations. The event provides [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) with event context.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialOpenCloseEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function onOpen(args:SpeedDialOpenCloseEventArgs){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' onOpen={ onOpen }></SpeedDialComponent>
  );
}
export default App;
```

## beforeClose

The [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeclose) event fires before the SpeedDial popup closes. Use this event to prevent popup closing or save user selections. The event provides [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) with a `cancel` property to prevent the close action.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialBeforeOpenCloseEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function beforeClose(args:SpeedDialBeforeOpenCloseEventArgs){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' beforeClose={ beforeClose }></SpeedDialComponent>
  );
}
export default App;
```

## onClose

The [`onClose`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#onclose) event fires after the SpeedDial popup successfully closes. Use this event to perform cleanup or state updates after the menu is hidden. The event provides [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) with event context.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialOpenCloseEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function onClose(args:SpeedDialOpenCloseEventArgs){
    //Your required action here
  }

    return (
      {/* Initialize the SpeedDial component */}
      <SpeedDialComponent id='speeddial' items={items} content='Edit' onClose={ onClose }></SpeedDialComponent>
    );
}
export default App;
```

## beforeItemRender

The [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeitemrender) event fires for each action item before it is rendered in the popup. Use this event to customize item appearance or content dynamically. The event provides [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemEventArgs/) containing item data that you can modify.

```ts
import { SpeedDialComponent, SpeedDialItemModel, SpeedDialItemEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* Initialize action items. */}
function App() {

  const items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
  ];

  function beforeItemRender(args:SpeedDialItemEventArgs){
    //Your required action here
  }

  return (
    {/* Initialize the SpeedDial component */}
    <SpeedDialComponent id='speeddial' items={items} content='Edit' beforeItemRender={ this.beforeItemRender=this.beforeItemRender.bind(this) }></SpeedDialComponent>
  );
}
export default App;
```

Below example demonstrates the clicked event of the Speed Dial component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/action-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/action-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/action-cs1" %}