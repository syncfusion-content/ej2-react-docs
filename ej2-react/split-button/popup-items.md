---
layout: post
title: Popup items in React Split button component | Syncfusion
description: Learn here all about Popup items in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Popup items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in React Split button component

## Icons

Popup action items display icons or images to visually represent their associated actions. Set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconcss) property to `e-icons` with the appropriate icon CSS class for each menu item. By default, icons appear on the left side of the popup action item text.

In the following example, icons for Cut, Copy, and Paste menu items are configured using the iconCss property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/popup-icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/popup-icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/popup-icon-cs1" %}

## Template

### Item Templating

Customize individual popup items using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/split-button#beforeitemrender) event. This event fires during each popup action item's rendering phase, providing event arguments to identify the item and apply custom styles, content modifications, or conditional formatting based on your requirements.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/template-cs1" %}

### Popup Templating

Fully customize the entire popup structure and content by leveraging the [`target`](https://ej2.syncfusion.com/react/documentation/api/split-button#target) property to reference a custom template element. This approach allows you to implement complex popup layouts, nested menus, custom styling, or integration with other components while maintaining the SplitButton trigger behavior.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/popup-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/popup-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/popup-template-cs1" %}

## See Also

* [Popup items grouping](./how-to/group-items-in-popup)
* [SplitButton popup with separator](./icons-and-separator#separator)