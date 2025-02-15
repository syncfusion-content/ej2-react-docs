---
layout: post
title: Mentions in React Rich text editor component | Syncfusion
description: Learn here all about Mentions in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Mentions
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in the React Rich Text Editor Component

By integrating the [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/) component with a Rich Text Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving efficiency and accuracy.

Use the [target](https://ej2.syncfusion.com/react/documentation/api/mention/#target) property of the Mention component to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

When the user types the `@` symbol followed by a character, the Rich Text Editor displays a list of suggestions. Users can then select an item from the list by:

* Clicking on it
* Typing the name of the item they want to tag

In the following sample, we configured the following properties with popup dimensions.

* [allowSpaces](https://ej2.syncfusion.com/react/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/react/documentation/api/mention/#suggestioncount) - The maximum number of items that will be displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#itemtemplate) - Used to display the customized appearance in suggestion list.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs2" %}

> [View Sample](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/mention-integration)

## See Also

* [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/)