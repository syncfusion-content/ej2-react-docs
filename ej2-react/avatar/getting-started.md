---
layout: post
title: Getting started with React Avatar component | Syncfusion
description:  Checkout and learn about Getting started with React Avatar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple **Avatar** using Styles in the React Framework

## Dependencies

The Avatar Component is pure CSS component so no specific dependencies to render the avatar.

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

          ```bash
           npm install -g create-react-app
          ```

Start a new project using create-react-app command as follows

    <div class='tsx'>

     ```
     create-react-app quickstart --scripts-version=react-scripts-ts
     cd quickstart
    ```

    <div class='jsx'>

    ```
    create-react-app quickstart
    cd quickstart
    ```

Install the below required dependency package in order to use the `Avatar` component in your application.

      ```bash
      npm install @syncfusion/ej2-layouts --save
      ```

* The Avatar CSS files are available in the `ej2-layouts` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding a simple Avatar

* Add the HTML `div` element with `e-avatar` class into your `index.html`.

`[src/index.html]`

```
  <div className="e-avatar">AJ</div>
```

```
npm start
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/getting-started-cs1" %}

## See Also

[Types of Avatar](./types)
