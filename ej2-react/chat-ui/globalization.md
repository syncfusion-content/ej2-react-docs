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

The Syncfusion Chat UI component is designed with globalization in mind, allowing it to serve users in various regions and languages.

## Localization
 
The Chat UI component can be localized for any culture. The default language is English (en). To adapt the component to another language, you can provide translations for the keys in its default culture file. The placeholders {0} and {1} represent user names, while {2} is used for a numeric count of additional users.

| Key | Default Text | Example Usage |
|---|---|---|
| `oneUserTyping` | `{0} is typing` | `Suresh is typing` |
| `twoUserTyping`| `{0} and {1} are typing` | `Suresh and Gopi are typing` |
| `threeUserTyping` | `{0}, {1}, and {2} other are typing` | `Suresh, Gopi, and 1 other are typing` |
| `multipleUsersTyping` | `{0}, {1}, and {2} others are typing` | `Suresh, Gopi, and 5 others are typing` |

The following example demonstrates how to load the German (`de`) culture and apply it to the Chat UI.

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

Right-to-Left (RTL) support provides an option to render the Chat UI component with a right-to-left layout and text direction. This is essential for users of languages such as Arabic, Hebrew, and Persian. You can enable this feature by setting the [enableRtl](../api/chat-ui/#enablertl) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/globalization/rtl/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/globalization/rtl/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/rtl" %}
