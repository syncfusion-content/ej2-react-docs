---
layout: post
title: Methods in React TextArea | Syncfusion
description: Call React TextArea methods like focusIn, focusOut, getText, and selectAll programmatically to control the input.
control: Methods 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React TextArea

This section outlines the methods available for interacting with the React TextArea component.

## FocusIn method

The [focusIn](https://ej2.syncfusion.com/react/documentation/api/textarea/#focusIn) method programmatically sets focus to the textarea element, enabling user interaction via keyboard or other input methods.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/methods-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/methods-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs1" %}

## FocusOut method

The [focusOut](https://ej2.syncfusion.com/react/documentation/api/textarea/#focusOut) method removes focus from the textarea element, ending user interaction. Use this method to programmatically remove focus after completing a task or when navigating to another element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/methods-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/methods-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs2" %}

## GetPersistData method

The [getPersistData](https://ej2.syncfusion.com/react/documentation/api/textarea/#getPersistData) method retrieves properties needed for persistence state. It returns an object containing configuration options and state information to maintain across sessions. 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/methods-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/methods-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs3" %}
