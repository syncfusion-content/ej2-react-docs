---
layout: post
title: Add textbox programmatically in React Textbox component | Syncfusion
description: Learn here all about Add textbox programmatically in Syncfusion React Textbox component of Syncfusion Essential JS 2 and more.
control: Add textbox programmatically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add textbox programmatically in React Textbox component

* Create a TypeScript file and import the `Input` modules from `ej2-inputs` library as shown below.

```ts
import {Input} from '@syncfusion/ej2-inputs';
```

* Pass the `HTML Input` element as parameter to the `createInput` method.

* You can also add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs8" %}