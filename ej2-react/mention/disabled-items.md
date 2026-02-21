---
layout: post
title: Disabled Items in React Mention component | Syncfusion
description: Learn here all about Disabled Items in Syncfusion React Mention component of Syncfusion Essential JS 2 and more.
control: Disabled Items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in React Mention component

The Mention supports enabling or disabling individual items as needed. Map the disabled state through the [disabled](https://ej2.syncfusion.com/react/documentation/api/mention/#fields) field in the data table. Disabled items cannot be selected. Configure disabled item behavior using the `fields.disabled` property.

In the following example, states are grouped by category using the `disabled` field:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/disabled-items-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/disabled-items-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/disabled-items-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/disabled-items-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/disabled-items-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/disabled-items-cs2" %}

## Disable Item Method

Use the [disableItem](https://ej2.syncfusion.com/react/documentation/api/mention/#disableItem) method to dynamically disable individual items. This method disables one item at a time. To disable multiple items, iterate through the items list. The disabled state updates in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/mention/#datasource) when items are disabled using this method.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |
