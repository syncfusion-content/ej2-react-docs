---
layout: post
title: Getting started with React Circular gauge component | Syncfusion
description:  Checkout and learn about Getting started with React Circular gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Circular gauge component

This article describes the steps to create a simple Circular Gauge and demonstrates the component's basic usage.

Prerequisites: Node.js (recommended v14 or later), npm, and a compatible React version (hooks-enabled React 16.8+).

## Dependencies

Following is the list of minimum dependencies required to use the Circular Gauge.

```ts
|-- @syncfusion/ej2-react-circulargauge
    |-- @syncfusion/ej2-react-base
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-paf-export
```

## Installation and configuration

To get started with the React application, use [create-react-app](https://github.com/facebook/create-react-app) to set up the project. To install the `create-react-app` tool globally, run the following command.

```
npm install -g create-react-app
```

To create basic React application, run the following command.

```
create-react-app quickstart
```

Now, the application is created in the **quickstart** folder. Run the following command to navigate to the **quickstart** folder, and install the required **npm** packages.

```
cd quickstart
```

> In the **quickstart** application, the Syncfusion<sup style="font-size:70%">&reg;</sup> component is added in the JavaScript file.

Note: For production builds, register the Syncfusion license as required by Syncfusion licensing terms. See the Syncfusion licensing documentation for instructions.

### Creating a React application with TypeScript

To create React application with TypeScript, use the following command.

```
create-react-app quickstart --template typescript
```

The TypeScript template creates the application in the **quickstart** folder. Change directory into **quickstart** before installing additional packages.

```
cd quickstart
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install Circular Gauge package, use the following command.

```
npm install @syncfusion/ej2-react-circulargauge --save
```

### Adding Circular Gauge component to the Project

Add the Circular Gauge component to the application. To initialize the Circular Gauge control in the React application, import the component into `src/App.js` or `src/App.tsx` as appropriate. Use the example below to include the Circular Gauge component.

```ts

import React from 'react';
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';

export function App() {
    return (<CircularGaugeComponent></CircularGaugeComponent>);
}

export default App;

```

### Run the application

The Circular Gauge control is now included in the **quickstart** application. Use the following command to run the application.

```
npm start
```

The below example shows the basic Circular Gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs1" %}

## Set Pointer Value

You can change the pointer value in the above sample using [value](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer#value-number) property in [pointers](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs2" %}
