---
layout: post
title: Rows and Columns count in React TextArea component | Syncfusion
description: Adjusting the size of the React TextArea component of Syncfusion Essential JS 2 and more.
control: Rows and Columns Count
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rows and Columns in React TextArea control

Two essential attributes, `rows` and `columns`, play a pivotal role in customizing the TextArea's appearance and layout.
The `rows`attribute determines the initial visible number of lines within the TextArea, controlling its vertical size. Conversely, the `columns` attribute specifies the visible width of the TextArea in characters per line, determining its initial width.


* You can customize the TextArea control by setting the number of rows using the [rowsCount](https://ej2.syncfusion.com/react/documentation/api/textarea/#rowsCount) property and the number of columns using the [columnsCount](https://ej2.syncfusion.com/react/documentation/api/textarea/#columnsCount) property. These properties allow precise control over the dimensions of the TextArea, ensuring it fits seamlessly within the layout of the application.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/row-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/row-column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/row-column-cs1" %}
