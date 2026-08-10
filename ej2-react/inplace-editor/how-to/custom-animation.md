---
layout: post
title: Set custom animation for popup in React In-place Editor | Syncfusion
description: Customize the Syncfusion React In-place Editor's popup animation by configuring the Tooltip model inside popupSettings with a DropDownList.
control: In-place Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation for popup mode in React In-place Editor

In popup mode, the In-place Editor is rendered with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 React `Tooltip` component. You can customize the popup by configuring tooltip properties and events through the [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings#model) property inside the [popupSettings](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings) API.

In the following sample, popup animation is customized by specifying animation effects through the `model` property. Dynamic animation changes are triggered from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 React `DropDownList` component `change` event.

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