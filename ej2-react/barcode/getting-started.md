---
layout: post
title: Getting started with React Barcode component | Syncfusion®
description:  Checkout and learn about Getting started with React Barcode component of Syncfusion Essential® JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting Started with the React Barcode Component

This section explains the steps required to create a simple barcode and demonstrates the basic usage of the barcode control.

## Dependencies

The following packages are the minimum dependencies required to use the barcode component:

```

|-- @syncfusion/ej2-react-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

To set up a React application, we recommend using Vite, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

## JavaScript Environment

Run the following command in PowerShell:

```powershell
npm create vite@latest my-app -- --template react
```

You will see interactive prompts:

```
│
◇  Use rolldown-vite (Experimental)?:
│  > No  ✓ (Recommended for stable projects)
│
◇  Install with npm and start now?
│  > No (or Yes)
```

**If you select "No"** for "Install with npm and start now?", follow these manual steps:

```powershell
cd my-app
npm install
npm run dev
```

**If you select "Yes"** for "Install with npm and start now?", npm will automatically install dependencies and start the dev server. No further commands are needed.

## TypeScript Environment

Run the following command in PowerShell:

```powershell
npm create vite@latest my-app -- --template react-ts
```

You will see interactive prompts:

```
│
◇ Use rolldown-vite (Experimental)?:
│  > No  ✓ (Recommended for stable projects)
│
◇  Install with npm and start now?
│  > No (or Yes)
```

**If you select "No"** for "Install with npm and start now?", follow these manual steps:

```powershell
cd my-app
npm install
npm run dev
```

**If you select "Yes"** for "Install with npm and start now?", npm will automatically install dependencies and start the dev server. No further commands are needed.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the barcode generator package, run the following command:

```bash
npm install @syncfusion/ej2-react-barcode-generator --save
```


## Adding Barcode Component to the Application

To integrate the Barcode component into your application, import the `BarcodeGeneratorComponent` from the `@syncfusion/ej2-react-barcode-generator` package and add it to your component as demonstrated below.

`[src/App.jsx]`

```js
import './App.css';
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
function App() {
  return (
    <div className="App">
        <BarcodeGeneratorComponent 
        id="barcode" 
        width={"200px"} 
        height={"150px"} 
        type='Codabar'
         value='123456789'></BarcodeGeneratorComponent>
    </div>
  );
}
export default App;

```
## Adding Barcode Generator Control

The following example demonstrates how to generate various barcode types using the Barcode Generator component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/initialize-cs1" %}

## Adding QR Code Generator Control

The following example demonstrates how to generate QR codes using the Barcode Generator component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/qrcode-cs1" %}

## Adding Data Matrix Generator Control

The following example demonstrates how to generate Data Matrix codes using the Barcode Generator component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/dataMatrix-cs1" %}