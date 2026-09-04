---
layout: post
title: Template in React Message | Syncfusion
description: Render complex React Message content using templates to embed HTML elements, React components, or dynamic data.
control: Message
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Message

The React Message component supports custom templates, enabling you to render complex or interactive React Message content beyond simple text. Templates allow you to embed HTML elements, React components, or dynamic content within the React Message body using the [content](https://ej2.syncfusion.com/react/documentation/api/message#content) property or by adding content directly to the component's children.

The following example demonstrates a custom React Message template that combines HTML elements with React Button components for interactive messaging.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/template-cs1" %}