---
layout: post
title: Add TextBox programmatically in React TextBox component | Syncfusion
description: Learn here all about Add TextBox programmatically in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Add TextBox programmatically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add TextBox programmatically in React TextBox component

Create a TextBox component dynamically using the `createInput` method from the `ej2-inputs` library. This approach is useful when you need to generate form inputs programmatically or customize input behavior at runtime.

## Implementation steps

1. **Import the Input module** from the `ej2-inputs` library:

   ```ts
    import {Input} from '@syncfusion/ej2-inputs';
   ```

2. **Create the TextBox** by passing the HTML input element to the `createInput` method. This transforms the native input into a styled, feature-rich TextBox component.

3. **Optional: Add icons** to the input by passing the `buttons` property with the `e-input-group-icon` class to the `createInput` method. Icons can improve visual communication about the input's purpose (e.g., email, phone, search).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs8" %}