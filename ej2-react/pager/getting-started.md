---
layout: post
title: Getting started with React Pager component | Syncfusion
description:  Checkout and learn about Getting started with React Pager component of Syncfusion Essential JS 2 and more details.
control: Getting started 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains you the steps required to create a simple Pager and demonstrate the basic usage of the Pager component in React environment.

## Dependencies

Below is the list of minimum dependencies required to use the Pager.

```javascript
|-- @syncfusion/ej2-react-grids
    |-- @syncfusion/ej2-grids
```

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

```sh
npm install -g create-react-app
```

* To setup basic `React` sample use following commands.

```sh
create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Pager component, use the following command

```sh
npm install @syncfusion/ej2-react-grids --save
```

## Adding CSS reference

 Add Pager component's styles as given below in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
```

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Adding Pager component

Now, you can start adding Pager component in the application. For getting started, add the Pager component in `src/App.tsx` file
using following code.

Now place the below Pager code in the `src/App.tsx`.
Here the Pager is rendered with `totalRecordsCount` which is used to render numeric container.

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PagerComponent } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    render() {
        return <PagerComponent totalRecordsCount = {20}>
        </PagerComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('pager'));
```

## Page Size

`pageSize` value defines the number of records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pager/pager-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pager/pager-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/pager/pager-cs1" % }

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation.
The default value for `pageCount` is 10 and value will be updated based on [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#totalrecordscount)
and [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/pager/pagerModel/#pagesize) values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pager/pager-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pager/pager-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/pager/pager-cs2" % }

## Run the application

The [`create-react-app`](https://github.com/facebookincubator/create-react-app) will pre-configure the project to compile and
run the application in browser. Use the following command to run the application.

```sh
npm start
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pager/pager-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pager/pager-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/pager/pager-cs3" % }