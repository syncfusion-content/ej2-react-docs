---
layout: post
title: Serialization in React Diagram Component | Syncfusion®
description: Learn here all about Serialization in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Serialization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Save and Load Diagrams in React Diagram Component

**Serialization** is the process of converting the diagram's current state into a storage format that can be saved and later restored. This feature ensures that all diagram elements, including nodes, connectors, and their configurations, persist across application sessions.

The serialization process converts the diagram into a JSON string format, which can be stored in databases, files, or other storage systems. When needed, this serialized data can be deserialized to recreate the diagram exactly as it was previously configured.

Use serialization when you need to:
- Save user-created diagrams for future editing.
- Implement undo/redo functionality.
- Create diagram templates.
- Transfer diagrams between different sessions or users.

To save and load the diagram in React, refer to the below video link.
{% youtube "https://www.youtube.com/watch?v=IkWXjhRE-o0" %}

## Saving Diagrams

### Basic Save Operation

The [`saveDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#savediagram) method serializes the entire diagram configuration into a JSON string. This method captures all diagram elements, their properties, and the current state.

The following code illustrates how to save the diagram:

```ts

let saveData: string;
//returns serialized string of the Diagram
saveData = diagramInstance.saveDiagram();

```

The serialized JSON string can be stored in various storage systems. The following example demonstrates local storage implementation:

```ts
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);

// Retrieve the saved string from local storage
saveData = localStorage.getItem('fileName');

```

### Alternative Save Formats

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) sections.

## Loading Diagrams

### Basic Load Operation

The [`loadDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#loaddiagram) method recreates the diagram from serialized JSON data. This method accepts the previously saved JSON string as a parameter.

```ts

/*
 * Loads the diagram from saved JSON data.
 * parameter 1 - The string representing the diagram model JSON to be loaded.
 * parameter 2 - Whether it is ej1 data or not (optional)
 */
diagramInstance.loadDiagram(saveData);

```

>Note: Before loading a new diagram, the existing diagram content is automatically cleared.

### Handling Load Completion

The [`loaded`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#loaded) event triggers when all diagram elements finish loading through the [`loadDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#loaddiagram) method. Use this event to perform post-load customizations or validations.

```ts
  return (
    loaded={(args) => {
            //You can use this event to customize diagram elements during the loading process
        }}/>
  )

```


The loaded event provides the following arguments:

**name**

Type: String

Description: Returns the event name.

**diagram**

Type: Diagram

Description: Returns the diagram model properties.

Users can perform customizations or modifications to the diagram elements once the loading process is complete.


## Prevent Default Values

The [`preventDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram/serializationsettingsmodel#preventdefaults) property of [`serializationSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/serializationsettingsmodel) reduces the size of serialized data by excluding default properties. This optimization improves performance when handling large diagrams or frequent save operations.

When enabled, only explicitly set properties are included in the JSON output, significantly reducing file size and improving load times.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/serialization-cs1/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

## File-Based Save and Load Operations

### Using Uploader Component

JSON files can be uploaded and processed using the uploader component. Configure the uploader with appropriate server endpoints to handle file operations, then parse the uploaded JSON data to load diagrams.

The uploader requires:
- `saveUrl` property for receiving and storing uploaded files.
- `removeUrl` property for handling file deletion operations.
- File parsing logic to extract JSON data from uploaded files.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs1" %}

## Mermaid Syntax Integration

### Overview

The [`Diagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default) component supports importing and exporting diagrams using Mermaid syntax. Mermaid is a markdown-inspired syntax for creating diagrams programmatically, enabling easy diagram creation and sharing across different platforms.

This functionality supports:
- Mind maps
- Flowcharts  
- UML sequence diagrams

### Saving Diagrams as Mermaid Syntax

The [`saveDiagramAsMermaid`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#savediagramasmermaid) method converts compatible diagrams into Mermaid syntax format. This method works specifically with Flowchart and Mind map layouts.

 ```javascript
//returns the serialized Mermaid string of the Diagram
let data = diagramInstance.saveDiagramAsMermaid();

```

### Load Diagram from Mermaid Syntax

The [`loadDiagramFromMermaid`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#loaddiagramfrommermaid) method creates diagrams from Mermaid syntax data, automatically generating the appropriate layout and styling.
data.

#### Load Flowchart Layout

The following example shows how to load flowchart diagram from mermaid syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs2" %}

#### Loading Mind Map Layout

The following example demonstrates loading a mind map diagram from Mermaid syntax:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs3/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs3" %}
 
#### Loading UML Sequence Diagram

The following example demonstrates loading a UML Sequence diagram from Mermaid syntax:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs4/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs4" %}

N> Mermaid syntax-based serialization and deserialization supports only Flowchart layout, Mind map layout, and UML Sequence Diagram. Ensure that your Mermaid data aligns with one of these supported layouts for successful diagram loading.