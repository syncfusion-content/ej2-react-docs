---
layout: post
title: Position in React Toast component | Syncfusion
description: Learn here all about Position in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Position in React Toast component

Toast position can be updated based on predefined positions or user customizable positions. Predefined position combinations are updated in [`X`](https://ej2.syncfusion.com/react/documentation/api/toast/toastPositionModel#x) and [`Y`](https://ej2.syncfusion.com/react/documentation/api/toast/toastPositionModel#y) position properties.

## Predefined

`X` Positions

* Left
* Center
* Right

`Y` Positions

* Top
* Bottom

> In the case of multiple Toast display, new Toast position will not update on dynamic change of property values, until the old Toast messages removed.
> Toast occupies full width when we set width as '100%', so X positions won't affect changes when '100%' width.

## Custom

Custom `X` and `Y` Position can be given as pixels/numbers/percentage. The number value is considered as pixels. based value top and left value updated in the toast.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs37/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs37/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs37" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs38/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs38/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs38" %}

## See Also

* [Render toast with different positions](./how-to/show-multiple-toasts-in-various-positions/)