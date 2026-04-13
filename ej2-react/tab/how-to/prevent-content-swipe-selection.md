---
layout: post
title: Prevent content swipe selection in React Tab component | Syncfusion
description: Learn here all about Prevent content swipe selection in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Prevent content swipe selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent content swipe selection in ##Platform_Name## Tab control

The [`swipeMode`](https://ej2.syncfusion.com/react/documentation/api/tab/#swipemode)  property in the Tab component allows users to navigate between tabs using swipe gestures, improving the overall navigation experience. It supports both touch and mouse inputs, enabling intuitive tab switching.

However, in certain cases, such as when a tab contains critical elements like a form, accidental swipes can disrupt the user's workflow. For example, if a user is filling out a form and mistakenly swipes, the tab might change unexpectedly, potentially leading to unsaved data or interruptions.

To address this, you can customize the [`swipeMode`](https://ej2.syncfusion.com/react/documentation/api/tab/#swipemode) property based on the needs of the application. By adjusting this setting, you can balance smooth, intuitive navigation with protecting the user experience and safeguarding against accidental tab switches.

The following are the available [`swipeMode`](https://ej2.syncfusion.com/react/documentation/api/tab/#swipemode) options for the Tab component:

* Both - By default, this option allows the user to swipe between tabs using both touch and mouse actions.
* Touch - This option allows users to swipe between tabs using touch gestures only.
* Mouse - This option allows users to swipe between tabs using mouse gestures only.
* None - This disables both touch and mouse swipe actions, preventing any unintended tab switches.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/swipemode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/swipemode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/swipemode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/swipemode-cs1" %}
