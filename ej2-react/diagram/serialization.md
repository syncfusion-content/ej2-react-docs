---
layout: post
title: Serialization in React Diagram component | Syncfusion®
description: Learn here all about Serialization in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Serialization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in React Diagram component

**Serialization** is the process of converting the state of the diagram into a format that can be saved and later restored. This ensures that the diagram's current state, including its nodes, connectors, and configurations, can be persisted across sessions.

Serialization involves saving the diagram's state as a JSON string, which can then be stored in a database, file, or other storage medium. When needed, the serialized string can be deserialized to recreate the diagram in its previous state.

To easily save the contents of the diagram as a JSON string or file stream, and load it from the saved file, refer to the video link below.

{% youtube "https://www.youtube.com/watch?v=IkWXjhRE-o0" %}

## Save

The diagram is serialized as string while saving. The client-side method, [`saveDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/#savediagram), helps to serialize the diagram as a string. This method captures the entire diagram's configuration and content, converting it into a string representation.

The following code illustrates how to save the diagram:

```ts

let saveData: string;
//returns serialized string of the Diagram
saveData = diagramInstance.saveDiagram();

```

This JSON string can be stored in local storage for future use. The following code illustrates how to save the serialized string into local storage and how to retrieve it:

```ts
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);

// Retrieve the saved string from local storage
saveData = localStorage.getItem('fileName');

```

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) section.

## Load

The diagram can be loaded from serialized string data using the [`loadDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/#loaddiagram) method. The saved string should be passed as the parameter of the loadDiagram method. The following code illustrates how to load the diagram from serialized string data:

```ts

/*
 * Loads the diagram from saved JSON data.
 * parameter 1 - The string representing the diagram model JSON to be loaded.
 * parameter 2 - Whether it is ej1 data or not (optional)
 */
diagramInstance.loadDiagram(saveData);

```

>Note: Before loading a new diagram, existing diagram is cleared.

## Loaded Event

The [`loaded`](https://ej2.syncfusion.com/react/documentation/api/diagram/#loaded) event triggers when all diagram elements are loaded using [`loadDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/#loaddiagram) method. You can use this event to customize diagram elements during the loading process.

```ts
  return (
    loaded={(args) => {
            //You can use this event to customize diagram elements during the loading process
        }}/>
  )

```


The event has two arguments such as name, diagram

**name**

Type: String

Description: Returns the event name.

**diagram**

Type: Diagram

Description: Returns the diagram model properties.

Users can perform customizations or modifications to the diagram elements once the loading process is complete.


## Prevent Default Values

The [`preventDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram/serializationSettingsModel/#preventdefaults) property of [`serializationSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/serializationSettingsModel/) is used to simplify the saved JSON object by excluding default properties that are inherent to the diagram. This helps reduce the size of the serialized data and improves efficiency when saving and loading diagrams.

By enabling preventDefaults, only properties that you set in diagram are included in the serialized JSON object. This optimization is useful for scenarios where minimizing data size is crucial, such as in applications with large diagrams or when optimizing network transfers.

The following code illustrates how to enable the preventDefaults property to simplify the JSON object:


```ts
  return (
    <div>
      <DiagramComponent
        serializationSettings = {{ preventDefaults: true }}
      ></DiagramComponent>
    </div>
  )

```

## Save and load diagram using uploader control

The JSON files can be uploaded using the uploader component, where they are parsed to extract the JSON data they contain. To achieve this, configure the uploader component with the saveUrl property to receive uploaded files and store them on the server. Similarly, use the removeUrl property to handle file removal operations on the server.

When a JSON file is uploaded, it undergoes parsing to extract its JSON data. This data is then loaded into the diagram using the [`loadDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/#loaddiagram) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs1" %}

 ## Importing and Exporting Diagrams using Mermaid Syntax

The [`Diagram`](https://ej2.syncfusion.com/react/documentation/api/diagram/) supports saving diagrams in Mermaid syntax format. Mermaid is a Markdown-inspired syntax that automatically generates diagrams. With this functionality, you can easily create mind maps, flowcharts, and UML sequence diagrams from Mermaid syntax data, simplifying the visualization of complex ideas and processes without manual drawing. Additionally, you can export your mind maps, flowcharts, and UML sequence diagrams to Mermaid syntax, allowing for easy sharing, editing, and use across different platforms.

### Save diagram as Mermaid syntax

 The `saveDiagramAsMermaid` method serializes the diagram into a Mermaid-compatible string format. This method is specifically designed for diagrams that utilize Flowchart and Mind map layouts. The following code illustrates how to save the diagram in Mermaid string format.

 ```javascript
//returns the serialized Mermaid string of the Diagram
let data = diagramInstance.saveDiagramAsMermaid();

```

### Load diagram from Mermaid syntax

You can load a [diagram](https://ej2.syncfusion.com/react/documentation/api/diagram/) from the serialized Mermaid syntax data using the `loadDiagramFromMermaid` method. The following code illustrates how to load a diagram from a Mermaid string data.

#### Load flowchart layout

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

#### Load mindmap layout

The following example shows how to load mind map diagram from mermaid syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs3/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs3" %}
 
#### Load Uml Sequence diagram

The following example shows how to load Uml Sequence diagram from mermaid syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/serialization/serialization-cs4/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/serialization/serialization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/serialization/serialization-cs4" %}

N> Mermaid syntax-based serialization and deserialization is supported only for Flowchart layout, Mind map layout, and UML Sequence Diagram. Ensure that your Mermaid data aligns with one of these supported layouts to enable successful diagram loading.