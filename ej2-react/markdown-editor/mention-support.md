---
layout: post
title: Mention Support in React Markdown Editor component | Syncfusion
description: Learn here all about Mention Support in Syncfusion React Markdown Editor component of Syncfusion Essential JS 2 and more.
control: Mention Support
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mention Support in React Markdown Editor Component

By integrating the [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/) component with the Markdown Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving both efficiency and accuracy.

## Enabling Mention in React Markdown Editor

To enable the Mention functionality within the Markdown Editor, set the [target](https://ej2.syncfusion.com/react/documentation/api/mention/#target)  property of the Mention component to the ID of the textarea element inside the editor. When specifying the target, ensure that you append the suffix `_editable-content` to the ID. This configuration allows users to mention or tag others from the suggested list while editing text.

When a user types the `@` symbol followed by a character, the Markdown Editor displays a list of suggestions. Users can select an item from the list by either clicking on it or typing the desired name.

## Configuring Mention Properties

The Syncfusion Mention component provides several customizable properties to enhance the tagging experience:

* [allowSpaces](https://ej2.syncfusion.com/react/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/react/documentation/api/mention/#suggestioncount) - Defines the maximum number of items displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#itemtemplate) - Customizes the appearance of items in the suggestion list.

## Example: Implementing Mention in Markdown Editor

The following example demonstrates how to enable Mention support in the React Markdown Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/mention-support-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/mention-support-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/mention-support-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/mention-support-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/mention-support-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/mention-support-cs2" %}