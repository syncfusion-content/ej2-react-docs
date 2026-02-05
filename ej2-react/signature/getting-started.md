---
layout: post
title: Getting started with React Signature component | Syncfusion
description:  Checkout and learn about Getting started with React Signature component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Signature component

The following section explains the required steps to build the Signature component with its basic usage in step-by-step procedure.

To get start quickly with Signature Component using React, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Nj5V4iKLgv4" %}

## Dependencies

The following list of dependencies are required to use the Signature component in your application.

```
|-- @syncfusion/ej2-react-base
```

## Setup your development environment

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use Signature component.

To install Signature component, use the following command

```
npm install @syncfusion/ej2-react-inputs –save
```

The above command installs [Signature dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add Signature component's styles as given below in `App.css`.

```c
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
```

## Add Signature to the project

Now, you can create `Signature` component in the application. Add `Signature` component in `src/App.tsx` file using the following code snippet.

```
import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
function App() {
    return (<div style={{marginTop: '150px'}}>
        <SignatureComponent id='signature'></SignatureComponent>
    </div>);
    
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

   ```
   npm run dev
   ```

The following example shows the default Signature.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/signature/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/signature/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/getting-started-cs2" %}