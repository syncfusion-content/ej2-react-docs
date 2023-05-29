---
layout: post
title: Types in React Spinner component | Syncfusion
description: Learn here all about Types in Syncfusion React Spinner component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Spinner component

By default, the Spinner is loaded in the applicable Essential JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the Spinner.

The available types are:
* Material
* Fabric
* Bootstrap

You can change the Essential JS 2 component spinner type by passing the type of the spinner as parameter to the `setSpinner` method like as below.

```ts
// Specify the type of the Spinner to be displayed

setSpinner({ type: 'Bootstrap'});
```

> After Essential JS 2 component creation only, you can change the Essential JS 2 component spinner type.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/default-sample-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/default-sample-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/default-sample-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/default-sample-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/default-sample-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/default-sample-cs2" %}