---
layout: post
title: Globalization in React Chat UI component | Syncfusion
description:  Checkout and learn about Globalization with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Chat UI component

## Localization
 
The Chat UI can be localized to any culture by defining the text of the Chat UI in the corresponding culture. The default locale of the Chat UI is `en` (English). The following table represents the default text of the Chat UI in `en` culture.

|KEY|Text|
|----|----|
|oneUserTyping|{0} is typing|
|twoUserTyping|{0} and {1} are typing|
|threeUserTyping|{0}, {1}, and {2} other are typing|
|multipleUsersTyping|{0}, {1}, and {2} others are typing|

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/globalization/localization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/globalization/localization/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/localization" %}

## RTL
 
RTL provides an option to switch the text direction and layout of the Chat UI component from right to left by setting the `enableRtl` property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/globalization/rtl/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/globalization/rtl/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/rtl" %}
