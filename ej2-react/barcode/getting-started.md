---
layout: post
title: Getting started with React Barcode Component | Syncfusion
description:  Learn about Getting Started with React Barcode component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting Started

This section explains you the steps required to create a simple barcode and demonstrate the basic usage of the barcode control.

## Dependencies

Below is the list of minimum dependencies required to use the barcode component.

```javascript

|-- @syncfusion/ej2-react-barcodegenerator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-barcodegenerator
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
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

npm install

```

</div>

<div class='jsx'>

```

create-react-app quickstart

cd quickstart

```

</div>

* Install Syncfusion packages using below command.

```
npm install @syncfusion/ej2-react-barcodegenerator --save
```

## Adding Barcode Generator control

You can start adding Essential JS 2 barcode-generator component to the application. To get started, add the barcode component in `app.ts` and `index.html` files using the following code.

Place the following barcode-generator  code in the `app.ts`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/initialize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/initialize-cs1" %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/qrcode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/qrcode-cs1" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started/dataMatrix-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/barcode/getting-started/dataMatrix-cs1" %}