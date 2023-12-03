---
layout: post
title: Getting started with React Signature component | Syncfusion
description:  Checkout and learn about Getting started with React Signature component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

The following section explains the required steps to build the Signature component with its basic usage in step-by-step procedure.

To get start quickly with Signature Component using React, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Nj5V4iKLgv4" %}

## Dependencies

The following list of dependencies are required to use the Signature component in your application.

```javascript
|-- @syncfusion/ej2-react-base
```

## Setup your development environment

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.

To install `create-react-app` run the following command.

   ```bash
    npm install -g create-react-app
   ```

To set-up a React application in TypeScript environment, run the following command.

```bash
npx create-react-app my-app --template typescript

cd my-app

npm start

```

To set-up a React application in JavaScript environment, run the following command.

```bash
npx create-react-app my-app

cd my-app

npm start

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use Signature component.

To install Signature component, use the following command

   ```bash
     npm install @syncfusion/ej2-react-inputs –save
   ```

The above command installs [Signature dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add Signature component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
```

## Add Signature to the project

Now, you can create `Signature` component in the application. Add `Signature` component in `src/App.tsx` file using the following code snippet.

```ts
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

Use the `npm run start` command to run the application in the browser.

   ```
   npm run start
   ```

The following example shows the default Signature.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/getting-started-cs2" %}