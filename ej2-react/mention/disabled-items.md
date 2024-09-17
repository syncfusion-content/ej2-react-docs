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

The Mention provides options for individual items to be either in an enabled or disabled state for specific scenarios. The category of each list item can be mapped through the [disabled](https://ej2.syncfusion.com/react/documentation/api/mention/#fields) field in the data table. Once an item is disabled, it cannot be selected as a value for the component. To configure the disabled item columns, use the `fields.disabled` property.

In the following sample, State are grouped according on its category using `disabled` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/disabled-items-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/disabled-items-1/app/index.tsx %}
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

The [disableItem](https://ej2.syncfusion.com/react/documentation/api/mention/#disableItem) method can be used to handle dynamic changing in disable state of a specific item. Only one item can be disabled in this method. To disable multiple items, this method can be iterated with the items list or array. The disabled field state will to be updated in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/mention/#datasource), when the item is disabled using this method.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |
