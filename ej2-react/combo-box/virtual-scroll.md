---
layout: post
title: Virtualization in React Combo box component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ComboBox Component 

ComboBox virtualization is a technique used to efficiently render long lists of items in a user interface while minimizing the impact on performance. It's particularly useful when dealing with large datasets, as it ensures that only a fixed number of DOM (Document Object Model) elements are created and displayed in the ComboBox Component. As the user scrolls through the list, the existing DOM elements are reused to display the relevant data, rather than creating new elements for each item. Enabling the [`enableVirtualization`](../api/combo-box/#enableVirtualization) option in a dropdown list activates this virtualization technique, significantly enhancing the list's performance and user experience, especially when handling large datasets.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/virtual-scroll/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/virtual-scroll/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/virtual-scroll/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/virtual-scroll/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/virtual-scroll" %}

## Keyboard interaction

Users can navigate through the scrollable content using keyboard actions. This feature loads the next or next set of items based on the key inputs in the popup.

| Key | Action |
|-----|-----|
| `ArrowDown` | Loads the next virtual list item if the selection is present in last item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `ArrowUp` | Loads the previous virtual list item if the selection is present in first item of the current page. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageDown` | Loads the next page and selects the last item in it. Additionally, when holding the key, further virtual list items are loaded in the popup. |
| `PageUp` | Loads the previous page and selects the first item in it. Additionally, when holding the key, further virtual list items are loaded in the popup. |

## Limitation of virtualization

* Virtualization is not supported in the grouping feature.
* Selected Value may or may not be present in the current view port.
* Once filtered, close the popup. Then open the popup with the initially loaded items.
* Virtualization does not work when the popup is closed, and a keyboard action is performed.
