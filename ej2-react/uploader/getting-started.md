---
layout: post
title: Getting started with React Uploader component | Syncfusion
description:  Checkout and learn about Getting started with React Uploader component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create and configure the simple uploader component with its basic usage in step by step procedure.

## Dependencies

The following are the dependencies required to use the uploader component in your application:

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons

```

## Installation and Configuration

You can use [Create-react-app](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

    ```bash
     npm install -g create-react-app
    ```

Start a new project using create-react-app command as follows

    ```
     create-react-app quickstart --scripts-version=react-scripts-ts
     cd quickstart
   ```

## Adding Syncfusion Packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install uploader component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding CSS Reference

Import the uploader component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding uploader to the application

Now, you can start adding uploader component to the application. We have added uploader component in `src/App.tsx`
file using following code.

`[Class-component]`

```ts

// import uploader component
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <UploaderComponent id="uploader" />;
    }
}
```

`[Functional-component]`

```ts
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

function App() {
        return <UploaderComponent id="uploader" />;
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
```

> From v16.2.41 version, the `Essential JS2 AJAX` library has been integrated for uploader server requests. Hence, use the third party `promise` library like blue-bird to use the uploader in Internet Explorer.

## Run the application

After completing the configuration to render the basic uploader, run the following command to display the output in your default browser.

   ```
    npm run start
   ```

> From v16.2.41 version, the `Essential JS2 AJAX` library has been integrated for uploader server requests. Hence, use the third party `promise` library like blue-bird to use the uploader in Internet Explorer.

The following code example illustrates the output in your browser.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs16" %}

## Adding drop area

By default, the uploader component allows to upload files by drag the files from file explorer and drop into the drop area.  You can configure any other external element as drop target using **dropArea** property.

In the following sample, drop target is configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/drop-area-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/drop-area-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/drop-area-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/drop-area-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/drop-area-cs4" %}

## Configure asynchronous settings

The uploader component processes the files to upload in Asynchronous mode by default. Define the properties **saveUrl** and **removeUrl** to handle the save and remove action as follows.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs18" %}

## Handle success and failed upload

You can handle the success and failure actions using the **success** and **failure** events. To handle these event, define the function and assign it to corresponding event as shown below.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs20" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Achieve invisible upload](./how-to/achieve-invisible-upload)

> You can also explore [React File Upload](https://www.syncfusion.com/react-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) that shows how to render the file upload and browse the files which you want to upload to the server.