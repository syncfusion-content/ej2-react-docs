---
layout: post
title: Accessibility in React Listview component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Listview component

## Keyboard interaction

We can use the following key shortcuts to access ListView component without any interrupt.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Arrow Up</kbd> | Move to the previous list item |
| <kbd>Arrow Down</kbd> | Move to the next list item |
| <kbd>Select</kbd> | Select the targeted list from the whole list |
| <kbd>Back</kbd> | Get back to the previous lists if it is nested list |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/accessibility-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/accessibility-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/accessibility-cs1" %}

## ARIA attributes

The following ARIA attributes is applicable for ListView component based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| aria-selected | It indicates the selected list from the whole list. |
| aria-level | It defines the hierarchical structure of a list item. |
