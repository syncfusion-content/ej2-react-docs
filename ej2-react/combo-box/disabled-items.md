---
layout: post
title: Disabled Items in React ComboBox component | Syncfusion
description: Learn here all about Disabled Items in Syncfusion React ComboBox component of Syncfusion Essential JS 2 and more.
control: Disabled Items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Disabled Items in React ComboBox component

The ComboBox supports enabling or disabling individual items as needed. Map the [disabled](https://ej2.syncfusion.com/react/documentation/api/combo-box/#fields) field from your data source to control item availability. Disabled items cannot be selected. Configure the disabled state mapping using the `fields.disabled` property.

The following example demonstrates disabling specific states using the `disabled` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs35/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs35/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs35" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs36/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs36" %}

## Disable Item Method

Use the [disableItem](https://ej2.syncfusion.com/react/documentation/api/combo-box/#disableItem) method to dynamically disable individual items. To disable multiple items, iterate this method through your items list or array. The disabled state updates in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/combo-box/#datasource) when items are disabled. If a selected item is disabled, its selection is automatically cleared.

| Parameter | Type | Description |
|------|------|------|
| itemHTMLLIElement |  <code>HTMLLIElement</code> |  It accepts the HTML Li element of the item to be removed.  |
| itemValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> | It accepts the string, number, boolean and object type value of the item to be removed. |
| itemIndex | <code>number</code> | It accepts the index of the item to be removed. |

## Disable the Component

To disable the entire component, set the [enabled](https://ej2.syncfusion.com/react/documentation/api/combo-box/#enabled) property to **false**.

![Disabled ComboBox Component](../images/combobox-disable.png)