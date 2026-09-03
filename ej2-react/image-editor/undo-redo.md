---
layout: post
title: Undo Redo in React Image Editor | Syncfusion
description: Reverse and repeat up to 16 editing actions on images in the React Image Editor using the undo and redo methods or Ctrl+Z and Ctrl+Y.
platform: ej2-react
control: Undo Redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo Redo in React Image Editor

The undo and redo features provide a way to reverse and repeat editing actions performed on an image. These features are essential for maintaining control and flexibility during the editing process.

In an React Image Editor, the undo and redo history typically has a limited capacity of 16 steps.

## Undo an action

The undo action in an React Image Editor allows users to revert the most recent editing action or a series of actions to their previous state. When the undo command is triggered, the React Image Editor undoes the last applied modification, effectively restoring the image to its state before the action was performed. The undo action is useful for correcting mistakes, removing unwanted changes, or exploring different editing options without permanently altering the image.

## Redo an action

The redo action in an React Image Editor allows users to reapply previously undone actions or modifications to the image. When the redo command is triggered, the React Image Editor reapplies the last action that was undone, bringing the image back to the state it was in after the action was initially applied. The redo is useful when users want to repeat an action that was previously undone or restore changes that were temporarily reversed.

Here is an example of undoing and redoing actions using the [`undo`](https://ej2.syncfusion.com/react/documentation/api/image-editor#undo) and [`redo`](https://ej2.syncfusion.com/react/documentation/api/image-editor#redo) methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs30/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs30/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs30" %}
