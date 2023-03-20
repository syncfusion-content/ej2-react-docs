---
layout: post
title: Template in React Spinner component | Syncfusion
description: Learn here all about Template in Syncfusion React Spinner component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Spinner component

You can use custom templates on the Spinner instead of the default Spinner by specifying the template in the `setSpinner` method.

The following steps explains you on how to define template for Spinner.

* Import the `setSpinner` method from `ej2-react-popups` library into your `index.tsx` as shown in below.

    ```ts
     import { setSpinner } from '@syncfusion/ej2-react-popups';
    ```

* Pass your custom template to the `setSpinner` method like as below.

     ```ts
     // Specify the template content to be displayed in the Spinner

       setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});
     ```

> You should set the template to the Spinner before creating the respective Essential JS 2 component.
> Also,until we replace `setSpinner` template, the further Essential JS 2 component rendering is created with given template only.

* Now, render the Essential JS 2 component. It's render the Spinner with the template specified in the `setSpinner` method.

> In the below sample, we have rendered the Grid component with custom Spinner using `setSpinner` method.
> You have to define the styles for the template in `index.html`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/set-spinner-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/set-spinner-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/set-spinner-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/set-spinner-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/set-spinner-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/set-spinner-cs2" %}