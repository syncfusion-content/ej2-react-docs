---
layout: post
title: Methods in React TextArea component | Syncfusion
description: Checkout and learn about methods in the React TextArea component of Syncfusion Essential JS 2 and more.
control: Methods 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React TextArea Component

This section outlines the methods available for interacting with the TextArea component.

## FocusIn method

The [focusIn](https://ej2.syncfusion.com/react/documentation/api/textarea/#focusIn) method in the TextArea, is used to set focus to the textarea element, enabling user interaction.

By calling the `focusIn` method, you can programmatically set focus to the TextArea component, allowing users to interact with it via keyboard input or other means.

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

The [focusOut](https://ej2.syncfusion.com/react/documentation/api/textarea/#focusOut) method in the TextArea component is used to remove focus from the textarea element, ending user interaction.
This method is beneficial for scenarios where user need to programmatically remove focus from the TextArea component, such as after completing a specific task or when navigating to another element in the application.

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

The [getPersistData](https://ej2.syncfusion.com/react/documentation/api/textarea/#getPersistData) method in the TextArea component retrieves the properties that need to be maintained in the persisted state.
This method returns an object containing the properties to be persisted, which can include various configuration options and state information of the TextArea component. 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/methods-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/methods-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs3" %}
