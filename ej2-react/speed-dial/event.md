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

This section explains the Speed Dial events that will be triggered when appropriate actions are performed.

## clicked

The SpeedDial component triggers the [`clicked`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#clicked) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemEventArgs/) argument when an action item is clicked. You can use this event to perform the required action.

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

The Speed Dial component triggers the [`created`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#created) event when SpeedDial component rendering is completed.

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

The SpeedDial component triggers the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeopen) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is opened.

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

The SpeedDial component triggers the [`onOpen`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#onopen) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is opened.

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

The SpeedDial component triggers the [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeclose) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is closed.

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

The SpeedDial component triggers the [`onClose`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#onclose) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is closed.

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

The SpeedDial component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#beforeitemrender) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemEventArgs/) argument for each `SpeedDialItem` once it is rendered.

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