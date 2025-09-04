---
layout: post
title: Mentions in React Rich Text Editor component | Syncfusion
description: Learn how to integrate and customize the Mentions in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Mentions
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in React Rich Text Editor Component

The Mention feature, integrated with the Syncfusion React Rich Text Editor via the [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/) component , enables users to tag or mention users or objects from a suggestion list. This functionality streamlines tagging by eliminating manual entry of names or identifiers, enhancing efficiency and accuracy.

## Setup and configuration

Use the [target](https://ej2.syncfusion.com/react/documentation/api/mention/#target) property of the Mention component to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

## Using mentions

When users type the `@` symbol followed by a character the Rich Text Editor, a suggestion list appears, Users can then select an item from the list by:

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

## See also

* [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/)