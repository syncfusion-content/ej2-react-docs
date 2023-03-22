---
layout: post
title: Getting started with React Spinner component | Syncfusion
description:  Checkout and learn about Getting started with React Spinner component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

Initialize the Spinner using `createSpinner` method.

You can show/hide Spinner by using `showSpinner` and `hideSpinner` methods accordingly. You need to set target to render based on specific target.

The following steps explains you on how to create and how to show/hide your Spinner.

*Import the `createSpinner` method from `ej2-popups` library into your file as shown in below.

    ```
      import { createSpinner } from '@syncfusion/ej2-popups';
     ```

*Show and hide this spinner by using `showSpinner` and `hideSpinner` methods for loading in your page and import them in your file as shown in below.

    ```
     import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
    ```

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the `ej2-popups` package.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/intro-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/intro-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/intro-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/intro-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/intro-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/intro-cs2" %}