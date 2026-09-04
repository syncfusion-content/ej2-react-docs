---
layout: post
title: Types in React Spinner | Syncfusion
description: Switch the React Spinner visual style between Material, Fabric, and Bootstrap themes by passing the type parameter to the setSpinner method.
control: Types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Spinner

By default, the React Spinner is loaded in the applicable Essential<sup style="font-size:70%">&reg;</sup> JS 2 component based on the theme imported into the page. Based on the theme, the type is set to the React Spinner.

The available types are:
* Material
* Fabric
* Bootstrap

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component React Spinner type can be changed by passing the type as a parameter to the `setSpinner` method as shown below.

```ts
// Specify the type of the Spinner to be displayed

setSpinner({ type: 'Bootstrap'});
```

> The React Spinner type can only be changed after the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component is created.

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