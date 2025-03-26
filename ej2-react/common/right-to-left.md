---
layout: post
title: Right to left in React Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion React Components

Right-to-Left (RTL) support allows applications to effectively communicate with users who use languages that are written from right to left, such as Arabic, Hebrew, etc.

Syncfusion React UI components support for right-to-left (RTL) by setting the `enableRtl` property to `true`. This adds the class name `e-rtl` to the component element and renders all Syncfusion React components in a right-to-left direction.

## Enable RTL for all components

To enable Right-To-Left (RTL) support for all components, users can set the `enableRtl` property directly in their application. Here is an example code snippet using the ListView component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/right-to-left-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/right-to-left-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}

## Enable RTL for an individual component

To enable Right-To-Left (RTL) support for an individual component, users can set the `enableRtl` property in the component's options. Here is an example code snippet using the ListView component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/individual-rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/individual-rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs1" %}