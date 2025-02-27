---
layout: post
title: Spell & Grammar Check in React Rich Text Editor component | Syncfusion
description: Learn here all about Spell & Grammar Check in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Spell & Grammar Check
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrate WProofreader into the React Rich Text Editor Component

WProofreader is a powerful tool that enhances content quality by detecting and correcting spelling and grammar errors in real-time as users type. This functionality significantly improves the professionalism of your content and ensures error-free text.

**Key Features of WProofreader:**

* Real-time Spell Checking: Instantly detects spelling mistakes as users type, providing immediate corrections and suggestions.

* Multilingual Support: Supports multiple languages, allowing users to check and correct text in different language contexts.

* Customization Options: Users can customize dictionary settings, add specific terms, and adjust spell-checking rules to match their writing style and requirements.

* Integration Capabilities: Seamlessly integrates with various content management systems (CMS) and applications, enhancing editing workflows without requiring users to leave their editing environment.

## Set up the WProofreader

For integrating the `WProofreader` refer the following link : https://webspellchecker.com, you need to install the[@webspellchecker/wproofreader-sdk-js](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) package using NPM or Yarn:

```bash
npm install @webspellchecker/wproofreader-sdk-js

Or

yarn add @webspellchecker/wproofreader-sdk-js

```
## Configure WProofreader for Rich Text Editor

After installing the package, you can integrate WProofreader with the React Rich Text Editor by following these steps:

1. Import the WProofreader module into your React component.
2. Configure the `container` property of WProofreader as the editable element of the Rich Text Editor's inputElement.
3. Use a reference (ref) to access the Rich Text Editor instance.
4. Set the `lang` property to specify the language of the text to be checked.
5. Configure the activation key in the `serviceId` property.

Below is an example code snippet to integrate WProofreader with the Syncfusion React Rich Text Editor:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/wproofreader-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/wproofreader-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/wproofreader-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/wproofreader-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

Below is a GIF demonstrating how to integrate WProofreader with the Syncfusion React Rich Text Editor

![WebSpellChecker](images/spell-grammar-check.gif)