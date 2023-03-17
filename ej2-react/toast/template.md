---
layout: post
title: Template in React Toast component | Syncfusion
description: Learn here all about Template in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Toast component

Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

The HTML element tag can be given as a string for the template property.

   ```ts
     template: "<div>Toast Content</div>"
    ```

The template property also allows getting template content through query `selector`. Here, element 'ID' attribute is specified in the template.

    ``` 
    template: "#Template"
    ```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs39/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs39/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs39" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs40/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs40/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs40" %}

## See Also

* [Add template dynamically](./how-to/add-dynamic-template/)