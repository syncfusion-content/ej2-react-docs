---
layout: post
title: Getting Started with React ProgressBar Component | Syncfusion
description:  Learn here all about getting started with Syncfusion Essential React ProgressBar component, it's elements and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React progressBar

This section explains the steps required to create the ProgressBar control using React and configure its properties.

## Dependencies

Below is the list of minimum dependencies required to use the progress bar component.

```javascript
    |-- @syncfusion/ej2-react-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```
    npm install -g create-react-app
   ```

* To setup basic `React` sample use following commands.

     ```
       create-react-app quickstart --template typescript
       cd quickstart
       npm start
     ```

* Install Syncfusion packages using below command.

     ```
     npm install @syncfusion/ej2-react-progressbar --save
     ```

## Add Progressbar to the Project

Now, you can start adding Progress bar component in the application. For getting started, add the Progress bar component in `src/App.tsx` file using following code.

```ts
import {ProgressBarComponent} from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';

function App() {

  return ( <ProgressBarComponent/>)

};
export default App;

```

## Run the application

Now, we might create a simple progress bar sample as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/default-cs9" %}

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```