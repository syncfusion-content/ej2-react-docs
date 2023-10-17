---
layout: post
title: Getting started with React File manager component | Syncfusion
description:  Checkout and learn about Getting started with React File manager component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create and configure the simple **File Manager** component.

To get started quickly with React File Manager, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=9bKaJBgkxs" %}

## Dependencies

The following list of dependencies are required to use the File Manager component in your application.

```javascript
|-- @syncfusion/ej2-react-filemanager
|-- @syncfusion/ej2-base
|-- @syncfusion/ej2-grids
|-- @syncfusion/ej2-buttons
|-- @syncfusion/ej2-layouts
|-- @syncfusion/ej2-navigations
```

## Installation and configuration

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```
    npm install -g create-react-app
   ```

* To setup basic `React` sample use following commands.

    <div class='tsx'>

     ```
      create-react-app quickstart --scripts-version=react-scripts-ts
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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use `File Manager` component.

To install File Manager component, use the following command

```bash
npm install @syncfusion/ej2-react-filemanager --save
```

## Adding Style sheet to the Application

To render the File Manager component, need to import File Manager and its dependent component's styles as given below in `App.css`.

```css

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-filemanager/styles/material.css";

```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding File Manager component to the Application

File Manager can be initialized using the `<FileManagerComponent>` tag. Now, you can start adding Essential JS 2 File Manager component to the application.

* To include the File Manager component in application import the `FileManagerComponent` from `ej2-react-filemanager` package in `App.tsx`.

* Then add the File Manager component as shown in below code example.

`[src/App.tsx]`

{% raw %}

```ts

import {  FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="control-section">
        <FileManagerComponent id="file" ajaxSettings = {{
          url: hostUrl + "api/FileManager/FileOperations"
        }} />
    </div>
  );
}
export default App;

```
{% endraw %}

{% raw %}

```ts
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div className="control-section">
        <FileManagerComponent id="file" ajaxSettings={{
            url: hostUrl + "api/FileManager/FileOperations"
        }}/>
    </div>);
}
export default App;
```
{% endraw %}

## Run the application

Now run the `npm start` command in the console, it will run your application and open the browser window.

```

npm start

```

The following sample, shows the basic File Manager component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/default-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/default-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/default-cs1" %}

## File Download support

To perform the download operation, initialize the `downloadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% raw %}

```ts

import {  FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="control-section">
        <FileManagerComponent id="file" ajaxSettings = {{
            url: hostUrl + "api/FileManager/FileOperations",
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }} />
    </div>
  );
}
export default App;

```
{% endraw %}

## File Upload support

To perform the upload operation, initialize the `uploadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#ajaxsettings) of File Manager Component.

{% raw %}

```ts

import {  FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="control-section">
        <FileManagerComponent id="file" ajaxSettings = {{
            url: hostUrl + "api/FileManager/FileOperations",
            uploadUrl: hostUrl + 'api/FileManager/Upload'
        }} />
    </div>
  );
}
export default App;

```
{% endraw %}

## Image Preview support

To perform the image preview support in the File Manager component, need to initialize the `getImageUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/image-preview-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/image-preview-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/image-preview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/image-preview-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/image-preview-cs1" %}

## Injecting services for Overview

By default, the File Manager component not having any extra module.  You can configure  `NavigationPane`, `Toolbar` , `ContextMenu` module using Inject.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/overview-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/overview-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/overview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/overview-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/overview-cs1" %}

>**Note:** The appearance of the File Manager can be customized by using [cssClass](https://ej2.syncfusion.com/react/documentation/api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or largeicons view with the help of [view](https://ej2.syncfusion.com/react/documentation/api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view. When the File Manager is initially rendered, [created](https://ej2.syncfusion.com/react/documentation/api/file-manager/#created) will be triggered. This event can be utilized for performing operations once the File Manager has been successfully created.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/switch-view-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/switch-view-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/switch-view-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/switch-view-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/switch-view-cs1" %}

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://ej2.syncfusion.com/react/documentation/api/file-manager/#view)
* Previous path of the File Manager - [Path](https://ej2.syncfusion.com/react/documentation/api/file-manager/#path)
* Previous selected items of the File Manager - [SelectedItems](https://ej2.syncfusion.com/react/documentation/api/file-manager/#selecteditems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [success](https://ej2.syncfusion.com/react/documentation/api/file-manager/#success) event will be triggered and [failure](https://ej2.syncfusion.com/react/documentation/api/file-manager/#failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/persistence-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/persistence-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/persistence-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/persistence-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File manager can be refreshed programatically by calling [refreshFiles](https://ej2.syncfusion.com/react/documentation/api/file-manager/#refreshfiles) method.

## Rendering component in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/react/documentation/api/file-manager/#enablertl) API to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/rtl-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/rtl-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/rtl-cs1" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [path](https://ej2.syncfusion.com/react/documentation/api/file-manager/#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

{% raw %}

```ts

import {  FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="control-section">
        <FileManagerComponent id="file" ajaxSettings = {{
          url: hostUrl + "api/FileManager/FileOperations"
        }} />
    </div>
  );
}
export default App;

```
{% endraw %}

{% raw %}

```ts
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (<div className="control-section">
        <FileManagerComponent id="file" ajaxSettings={{
            url: hostUrl + "api/FileManager/FileOperations"
        }}/>
    </div>);
}
export default App;
```
{% endraw %}

N> You can refer to our [React File Manager](https://www.syncfusion.com/react-components/react-file-manager) feature tour page for its groundbreaking feature representations. You can also explore our [React File Manager example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/file-manager/overview) that shows you how to render the File Manager in React.