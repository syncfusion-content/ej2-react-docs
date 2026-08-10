---
layout: post
title: How to clear an Image in React Image Editor | Syncfusion
description: Empty the React Image Editor canvas by calling clearImage before closing a dialog so it reopens with a fresh selection.
control: Clear an Image
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to clear an Image in React Image Editor

The [`clearImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor#clearimage) method in the image editor control provides functionality to empty the editor before reopening it, particularly when the editor is used within a dialog. By invoking `clearImage` before closing the dialog, you ensure that the editor does not retain previously loaded images when the dialog reopens. This allows users to start fresh with a new image selection.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs48/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs48/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs48" %}