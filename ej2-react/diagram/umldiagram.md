---
layout: post
title: UML Diagram in React Diagram | Syncfusion®
description: Model software in the React Diagram with UML Class and Activity diagram shapes — class attributes, methods, lifelines, and decisions — for object-oriented design.
control: Umldiagram 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# UML Diagram in React Diagram

This guide demonstrates how to create and customize UML (Unified Modeling Language) diagrams using the [React Diagram](https://www.syncfusion.com/diagram-sdk/react-diagram) component. You'll learn to build UML Class diagrams for object-oriented system modeling and UML Activity diagrams for workflow visualization.

N> Before working with UML diagrams, ensure you have set up the React Diagram component by following the [getting started](./getting-started.md) guide.

## UML Class Diagram

A class diagram visually depicts the static structure of an application and is extensively employed in modeling object-oriented systems. It holds a unique position in UML diagrams, as it directly aligns with object-oriented languages. The diagram also facilitates automatic generation of class diagram shapes based on business logic, streamlining the translation from conceptual models to practical implementation.

## UML Class Diagram Shapes

The UML class diagram shapes are explained as follows.

### Class

* A class defines a group of objects that share common specifications, features, constraints, and semantics. To create a class object, the [`classifier`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlclassifiershapemodel) should be defined using the [`class`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlclassmodel) notation. This notation serves as a foundational element in object-oriented programming, encapsulating the essential characteristics and behavior that objects belonging to the class will exhibit.

* Also, define the [`name`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassModel#name), [`attributes`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassModel#attributes), and [`methods`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassModel#methods) of the class using the class property of the node.

* The attribute’s [`name`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassAttributeModel#name), [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassAttributeModel#type), and [`scope`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassAttributeModel#scope) properties allow you to define the name, data type, and visibility of the attribute.

* The method’s [`name`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel#name), [`parameters`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel#parameters), [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel#type), and [`scope`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel#scope) properties allow you to define the name, parameter, return type, and visibility of the methods.

* The method [`parameters`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel#parameters)  property allow you to define the name ,type and style of the parameter.

* The following code example illustrates how to create a class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5class-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5class-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5class-cs1" %}

### Interface

An [`interface`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlinterfacemodel) is a specific type of classifier that represents a declaration of a cohesive set of public features and obligations. When creating an interface, define the classifier property using the interface notation. This concept in object-oriented programming outlines a contract for classes to implement, specifying the required methods and behaviors without providing implementation details.

Additionally, you can define the [`name`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlinterfacemodel#name), [`attributes`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlinterfacemodel#attributes), and [`methods`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlinterfacemodel#methods) of the interface using the interface property of the node.

The attributes' name, type, and scope properties allow you to specify the name, data type, and visibility of each attribute.

Similarly, the methods' name, parameters, type, and scope properties enable you to define the name, parameters, return type, and visibility of the methods.

The parameters object within methods allows you to specify the name and type of each parameter.

The following code example illustrates how to create an interface:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5interface-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5interface-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5interface-cs1" %}

### Enumeration

To establish an enumeration, designate the classifier property of the node as [enumeration](https://ej2.syncfusion.com/react/documentation/api/diagram/umlenumerationmodel). Additionally, define the `name` and enumerate the [members](https://ej2.syncfusion.com/react/documentation/api/diagram/umlEnumerationMemberModel) of the enumeration using the appropriate enumeration property of the node. An enumeration encapsulates a set of distinct values, allowing for a clear representation of specific and named constants within a system.

You can set a name for the enumeration members collection using the `name` property of members collection.

The following code example illustrates how to create an enumeration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5enumeration-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5enumeration-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5enumeration-cs1" %}

## UML Class Relationships

A class may be involved in one or more relationships with other classes. The relationship types available are as follows:

| Shape       | Image                                |
| ----------- | ------------------------------------ |
| Association | ![Association relationship directional arrow connecting two classes](images/Association.png) |
| Aggregation | ![Aggregation relationship hollow diamond at the whole-class end pointing to the part class](images/Aggregation.png)  |
| Composition | ![Composition relationship filled black diamond at the composite end pointing to the component class](images/Composition.png) |
| Inheritance | ![Inheritance relationship hollow triangle at the superclass end pointing from the subclass](images/Inheritance.png)   |
| Dependency  | ![Dependency relationship dashed arrow from the dependent class pointing to the supplier class](images/Dependency.png)|

### Association

`Association` is basically a set of links that connects elements of a UML model. The type of association is as follows.

1. Directional
2. BiDirectional

The association property allows you to define the type of association. The default value of association is **Directional**. The following code example illustrates how to create an association.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5association-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5association-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5association-cs1" %}

### Aggregation

`Aggregation` is a binary association between a property and one or more composite objects that group together a set of instances. Aggregation is decorated with a hollow diamond. To create an aggregation shape, define the [`relationship`](https://ej2.syncfusion.com/react/documentation/api/diagram/relationShipModel#relationship) as "Aggregation".

The following code example illustrates how to create an aggregation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5aggregation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5aggregation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5aggregation-cs1" %}

### Composition

Composition is a strong form of `aggregation`. The composition is decorated with a black diamond. To create a composition shape, define the `relationship` property of the connector as "Composition".

The following code example illustrates how to create a composition.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5composition-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5composition-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5composition-cs1" %}

### Inheritance

Inheritance is also called a "generalization". Inheritance is a binary taxonomic directed relationship between a more general classifier (superclass) and a more specific classifier (subclass). Inheritance is shown as a line with a hollow triangle.

To create an inheritance, define the `relationship` as "Inheritance".

The following code example illustrates how to create an inheritance.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5inheritance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5inheritance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5inheritance-cs1" %}

### Dependency

Dependency is a directed relationship, which is used to show that some UML elements need or depend on other model elements for specifications. Dependency is shown as a dashed line with an open arrow. To create a dependency, define the `relationship` property of the connector as "Dependency".

The following code example illustrates how to create a dependency.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5dependency-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5dependency-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5dependency-cs1" %}



### Multiplicity

Multiplicity defines an inclusive interval of non-negative integers to specify the allowable number of instances of the described element. The types of multiplicity are as follows:

1. OneToOne
2. ManyToOne
3. OneToMany
4. ManyToMany

By default, the multiplicity is considered as **OneToOne**.

The multiplicity property in UML allows you to specify a large number of elements or some collection of elements.

The multiplicity shape's [`source`](https://ej2.syncfusion.com/react/documentation/api/diagram/classifierMultiplicityModel#source) property sets the source label to the connector and the [`target`](https://ej2.syncfusion.com/react/documentation/api/diagram/classifierMultiplicityModel#target) property is used to set the target label to the connector.

To set an optionality or cardinality for the connector source label, use the [`optional`](https://ej2.syncfusion.com/react/documentation/api/diagram/multiplicitylabelmodel#optional) property.

The [`lowerBounds`](https://ej2.syncfusion.com/react/documentation/api/diagram/multiplicityLabelModel#lowerBounds) and [`upperBounds`](https://ej2.syncfusion.com/react/documentation/api/diagram/multiplicityLabelModel#upperBounds) can be natural constants or constant expressions evaluated to natural (non-negative) numbers. Upper bound can also be specified as asterisk '*' which denotes unlimited number of elements. Upper bound should be greater than or equal to the lower bound.

The following code example illustrates how to customize the multiplicity.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5multiplicity-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5multiplicity-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5multiplicity-cs1" %}

## How to Add UML Child at Runtime

In UML nodes, child elements such as members, methods and attributes can be added either programmatically or interactively.

### Adding UML Child Through Code

The [addChildToUmlNode](https://ej2.syncfusion.com/react/documentation/api/diagram#addchildtoumlnode) method is employed for dynamically adding a child to the UML node during runtime, providing flexibility in modifying the diagram structure programmatically.

**Method signature**

```
addChildToUmlNode(node: NodeModel, child: UmlClassMethodModel | UmlClassAttributeModel | UmlEnumerationMemberModel, umlChildType: UmlClassChildType): void
```

**Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `node` | [`NodeModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeModel) | Specifies the existing UmlClass node in the diagram to which you intend to add child elements. |
| `child` | [`UmlClassMethodModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassMethodModel) \| [`UmlClassAttributeModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassAttributeModel) \| [`UmlEnumerationMemberModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlEnumerationMemberModel) | Specify the child elements, such as attributes, members, or methods, to be added to the UML class. |
| `umlChildType` | [`UmlClassChildType`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlClassChildType) | Specifies the type of child (Method, Attribute, or Member) being added to the UML class. |

**Return value**

Returns void.

The following code example illustrates how to add members, methods and attributes to UML node at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5Method-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5Method-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5Method-cs1" %}

### Adding UML Child Through User Interaction

To include a child, select a node, move the mouse outside it, and position the pointer near the right side. A highlighter emerges between the two child elements. Click the highlighter to add a child type to the chosen UML node seamlessly. The following gif illustrates how to add a Child through user interaction.

![Adding a UML child element by selecting a node, hovering to reveal the highlighter between existing child elements, and clicking to insert the new child](images/UMLChild.gif)

## Adding UML Nodes in Symbol Palette

UML built-in shapes are efficiently rendered in a symbol palette. The [`symbols`](https://ej2.syncfusion.com/react/documentation/api/diagram/palettemodel#symbols) property of [`palettes`](https://ej2.syncfusion.com/react/documentation/api/diagram/palettemodel) is used to define UML symbols with the necessary classes and methods. This feature allows you to add a collection of predefined UML symbols to the palette, making your UML diagramming application more versatile.

The following code example showcases the rendering of UML built-in shapes in a symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5preview-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5preview-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5preview-cs4" %}

## Editing in UML Nodes

You can edit the name, attributes, and methods of the class diagram shapes just double clicking, similar to editing a node annotation.

The following image illustrates how the text editor looks in an edit mode.

![Editing Class Diagram](images/Editing.gif)

## UML Activity Diagram

An Activity diagram functions as a visual flowchart, illustrating the progression from one activity to the next within a system. Each activity corresponds to a system operation, providing a clear depiction of the sequential flow in a dynamic process.

The purpose of an activity diagram can be described as follows.

    1. Draw the activity flow of a system.

    2. Describe the sequence from one activity to another.

    3. Describe the parallel, branched, and concurrent flow of the system.
    
### UML Activity Diagram Shapes

To create a UmlActivity, define the `type` as "UmlActivity" and set the list of built-in shapes in the `shape` property as demonstrated below.

| Shape          | Image                                    |
| -------------- | ---------------------------------------- |
| Action         | ![Action](images/Action.png)          |
| Decision       | ![Decision](images/Decision.png)         |
| MergeNode      | ![MergeNode](images/MergeNode.png)       |
| InitialNode    | ![InitialNode](images/InitialNode.png)       |
| FinalNode      | ![FinalNode](images/FinalNode.png)      |
| ForkNode       | ![ForkNode](images/ForkNode.png)       |
| JoinNode       | ![JoinNode](images/JoinNode.png)       |
| TimeEvent      | ![TimeEvent](images/TimeEvent.png)      |
| AcceptingEvent | ![AcceptingEvent](images/AcceptingEvent.png) |
| SendSignal     | ![SendSignal](images/SendSignal.png)     |
| ReceiveSignal  | ![ReceiveSignal](images/ReceiveSignal.png)  |
| StructuredNode | ![StructuredNode](images/StructuredNode.png) |
| Note           | ![Note](images/Note.png)           |

The following code illustrates how to create a UmlActivity shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5UmlActivity-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5UmlActivity-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5UmlActivity-cs1" %}

### UML Activity Connector

To establish a UML Activity connector, specify the `type` of connector shape as "UmlActivity" and define the flow as either "Exception," "Control," or "Object." This configuration delineates the nature of the connection, allowing for a precise representation of the interaction within the activity diagram.

The following code illustrates how to create a UmlActivity connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5UmlActivityConnector-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umldiagramshapes/es5UmlActivityConnector-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umldiagramshapes/es5UmlActivityConnector-cs1" %}

## Troubleshooting

If the UML shapes or relationships do not render as expected:

1. Verify that you have set the correct UML `type` for each node/connector shape (for example, `UmlActivity` for activity shapes/connectors, or `UmlClassifier` for class shapes).
2. Ensure that the connector `relationship` value matches the expected strings (for example, `Aggregation`, `Composition`, `Inheritance`, or `Dependency`).
3. When adding UML children at runtime, confirm that the `node` is the target UmlClass node and that `umlChildType` matches the child you pass.
