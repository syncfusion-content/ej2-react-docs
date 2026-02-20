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

By default, the Spinner is loaded in the applicable Essential<sup style="font-size:70%">&reg;</sup> JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the Spinner.

The available types are:
* Material
* Fabric
* Bootstrap

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component Spinner type can be changed by passing the type as a parameter to the `setSpinner` method as shown below.

```ts
// Specify the type of the Spinner to be displayed

setSpinner({ type: 'Bootstrap'});
```

> The Spinner type can only be changed after the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component is created.

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