---
layout: post
title: Custom animation in React Inplace editor component | Syncfusion
description: Learn here all about Custom animation in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Custom animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom animation in React Inplace editor component

In popup mode, the In-place Editor rendered with the Essential JS 2 React `Tooltip` component. You can use tooltip properties and events to customize the popup by configure properties into the [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#model) property inside the [popupSettings](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/) API.

In the following sample, popup animation can be customized by passing animation effect using the `model` property and the dynamic animation effect changes configured from the Essential JS 2 React `DropDownList` component `change` event.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/custom-animation-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/custom-animation-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs2" %}