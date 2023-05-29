---
layout: post
title: Getting started with React Listview component | Syncfusion
description:  Checkout and learn about Getting started with React Listview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the simple ListView component with its basic usage in step by step procedure.

## Dependencies

Install the below required dependent packages to render the ListView component.

```javascript
+-- @syncfusion/ej2-react-lists
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
```

## Installation and Configuration

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.

To install `create-react-app` run the following command.

  ```bash
   npm install -g create-react-app
  ```

Start a new project using `create-react-app` command as follows

   <div class='tsx'>

   ```
    create-react-app quickstart --typescript
    cd quickstart
   ```
   </div>
   <div class='jsx'>
   ```
   create-react-app quickstart
   cd quickstart
   ```
  </div>

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. Now, we are going to render
`ListView` component from these packages.

To install `ListView` component, use the following command.

  ```bash
    npm install @syncfusion/ej2-react-lists --save
  ```

The above command installs [ListView dependencies](#dependencies) which are required to render the component in the `React` environment.

## Adding ListView component

Now, you can add `ListView` component in the application. For getting started, add `ListView` component in `src/App.tsx` file using the following code snippet.



```ts

import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';

function App() {
  return (
    //specifies the tag to render the ListView component
    <ListViewComponent id='list' />
  );
}
export default App;
```

```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';
function App() {
    return (
    //specifies the tag to render the ListView component
    <ListViewComponent id='list'/>);
}
export default App;
```

## Adding CSS Reference

Import `ListView` component required theme references at the top of `src/App.css`.

   ```css

   /* import the ListView dependency styles */

   @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
   @import "../node_modules/@syncfusion/ej2-react-lists/styles/material.css";

   ```

* If you are using `CheckList` behavior in ListView, we need to add `Button` component's styles as given below in `src/App.css` file

  ```css
   @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  ```

## Bind dataSource

Populate the data in ListView using `dataSource` property. Here, an array of JSON values passed to `ListView` component.



```ts

import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';

function App() {
  // define the array of Json
  let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={arts} />
  );
}
export default App;

```

```ts
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './App.css';
function App() {
    // define the array of Json
    let arts = [
        { text: 'Artwork', id: '01' },
        { text: 'Abstract', id: '02' },
        { text: 'Modern Painting', id: '03' },
        { text: 'Ceramics', id: '04' },
        { text: 'Animation Art', id: '05' },
        { text: 'Oil Painting', id: '06' }
    ];
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id="list" dataSource={arts}/>);
}
export default App;
```

## Running the application

Now use the `npm start` command to run the application in the browser.

```
npm start
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/getting-started-cs1" %}

N> You can refer to our [React ListView](https://www.syncfusion.com/react-ui-components/react-listview) feature tour page for its groundbreaking feature representations. You can also explore our [React ListView example](https://ej2.syncfusion.com/react/demos/#/material/listview/default) to know how to render and configure the listview.

## See Also

[Data Binding Types](./data-binding)

[ListView customization](./customizing-templates)

[Virtualization](./virtualization)