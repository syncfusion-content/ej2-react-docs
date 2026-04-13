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

Custom templates can be used on the Spinner instead of the default Spinner by specifying the template in the `setSpinner` method.

The following steps explain how to define a template for the Spinner:

* Import the `setSpinner` method from the `ej2-react-popups` library into your `index.tsx` as shown below:

    ```
     import { setSpinner } from '@syncfusion/ej2-react-popups';
    ```

* Pass your custom template to the `setSpinner` method as shown below:

     ```ts
     // Specify the template content to be displayed in the Spinner

       setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});
     ```

> The template must be set before creating the respective Essential<sup style="font-size:70%">&reg;</sup> JS 2 component.
> Additionally, until the `setSpinner` template is replaced, all subsequent Essential<sup style="font-size:70%">&reg;</sup> JS 2 component rendering will use the specified template.

* Render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component. The Spinner will render with the template specified in the `setSpinner` method.

> The following sample demonstrates rendering a Grid component with a custom Spinner using the `setSpinner` method.
> Define the styles for the template in the `index.html` file.

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