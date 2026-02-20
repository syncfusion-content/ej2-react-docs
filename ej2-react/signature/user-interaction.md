---
layout: post
title: User interaction in React Signature component | Syncfusion
description: Learn here all about User interaction in Syncfusion React Signature component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in React Signature component

The Signature component supports the following user interactions:

* Undo and Redo
* Clear
* Disabled
* ReadOnly

## Undo and Redo

The Signature component maintains snapshots of each action for undo and redo operations using a SnapIndex.

The [`undo`](https://ej2.syncfusion.com/react/documentation/api/signature/#undo) method reverts the last action by decreasing the SnapIndex to restore the previous snapshot. Use the [`canUndo`](https://ej2.syncfusion.com/react/documentation/api/signature/#canundo) method to check if undo is available.

The [`redo`](https://ej2.syncfusion.com/react/documentation/api/signature/#redo) method reapplies the last undone action by increasing the SnapIndex to restore the next snapshot. Use the [`canRedo`](https://ej2.syncfusion.com/react/documentation/api/signature/#canredo) method to check if redo is available.

## Clear

The [`clear`](https://ej2.syncfusion.com/react/documentation/api/signature/#clear) method clears all signature strokes and empties the canvas. This action is included in the undo/redo history. Use the [`isEmpty`](https://ej2.syncfusion.com/react/documentation/api/signature/#isempty) method to check if the canvas is empty.

## Disabled

The [`disabled`](https://ej2.syncfusion.com/react/documentation/api/signature/#disabled) property enables or disables the Signature component. When disabled, users cannot draw signatures and the component cannot receive focus until re-enabled.

## ReadOnly

The [`isReadOnly`](https://ej2.syncfusion.com/react/documentation/api/signature/#isreadonly) property enables read-only mode. The component can receive focus but prevents drawing of new signatures.

The following sample explains about user interactions available in signature.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/user-interaction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/user-interaction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/user-interaction-cs1" %}