---
layout: post
title: Style Encapsulation | Syncfusion
description: Learn here all about Style Encapsulation Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Style Encapsulation
documentation: ug
domainurl: ##DomainURL##
---

# Style Encapsulation in React Rich Text Editor

Style encapsulation determines how styles are applied within the Syncfusion React **Rich Text Editor**. This feature helps control whether the component's content inherits global styles from the application or remains isolated. 

## Encapsulation modes

Syncfusion's React Rich Text Editor offers two rendering modes for controlling style encapsulation:

1. **Encapsulated Mode (Iframe Mode)**  
   - When enabled, the Rich Text Editor is rendered inside an `<iframe>`.  
   - The application's global CSS rules will **not** affect the content inside the editor.  
   - This ensures that the editor's content remains styled independently.  
   - **Usage:** `iframeSettings={{ enable: true }}`

2. **Non-Encapsulated Mode (Default)**  
   - The Rich Text Editor is rendered **without an `<iframe>`**.  
   - The application's global CSS **will apply** to the content inside the editor.  
   - This mode allows seamless integration with existing styles.  
   - **Usage:** `iframeSettings={{ enable: false }}`

### Default behavior

By default, the Rich Text Editor uses **non-encapsulated mode** (` iframeSettings={{ enable: false }}`), allowing the application's styles to affect the editor's content.

Below is a sample implementation of both **encapsulated** and **non-encapsulated** modes.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/style-encapsulation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/style-encapsulation-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/style-encapsulation-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/style-encapsulation-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/style-encapsulation-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/style-encapsulation-cs2" %}