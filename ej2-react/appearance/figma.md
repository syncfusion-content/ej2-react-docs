---
layout: post
title: Introduction to the Figma UI Kit | Syncfusion
description: Check out and learn about the introduction to the Figma UI Kit of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Figma 
documentation: ug
domainurl: ##DomainURL##
---

# Figma UI Kits for Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Syncfusion<sup style="font-size:70%">&reg;</sup> offers [Figma UI kits](https://www.figma.com/@syncfusion) to facilitate efficient collaboration between designers and developers. The Figma UI kits are available in four themes: [Material 3](https://www.figma.com/community/file/1385969023252455137), [Fluent](https://www.figma.com/community/file/1385969120047188707), [Tailwind](https://www.figma.com/community/file/1385969065626384098), and [Bootstrap 5](https://www.figma.com/community/file/1385968977953858272). These kits reflect the themes used in Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

Each kit provides reusable design components with multiple states and variants, along with detailed figures, measurements, and icons that accurately represent the Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

![Material 3](./images/material3.png)

## Advantages of UI kits

The Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kit offers these key benefits:
- Comprehensive documentation of Syncfusion<sup style="font-size:70%">&reg;</sup> React components, including control lists with available states and variants for easy reference.
- Design components leverage the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/), enabling straightforward and efficient customization.
- Developers can align Syncfusion<sup style="font-size:70%">&reg;</sup> React components precisely with project requirements, ensuring design consistency.
- Standardized components and themes in the UI kit maintain visual uniformity across projects.

## Downloading the UI kits

Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kits are provided through the [Figma community](https://www.figma.com/@syncfusion). Theme-specific Figma UI kits can be accessed from these links:

- [Material 3](https://www.figma.com/community/file/1385969023252455137)
- [Fluent](https://www.figma.com/community/file/1385969120047188707)
- [Tailwind](https://www.figma.com/community/file/1385969065626384098)
- [Bootstrap 5](https://www.figma.com/community/file/1385968977953858272)

## Structure of the UI kits

Syncfusion’s Figma UI kit features a well-organized layout to enhance navigation and exploration of components. The structure includes:

- **Thumbnail**: This page serves as the cover page for the UI kit.
- **Index**: Here, users can find a detailed list of all control names, making it simple to identify and locate specific components within the UI kit.
- **Icons**: Contains a collection of all icons used in the design components.
- **UI Components**: At the core of the UI kit, this section features a wide range of essential UI components. Each control is meticulously designed with detailed figures, measurements, and icons, showcasing various states and variants.

![Layout](./images/layout.png)

## Customizing the UI kits

Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kits support effortless customization to align with specific branding or design needs. Leveraging the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/), customizations are efficiently reflected across relevant components and their variants.

To customize the primary button color in the Material 3 theme layout:

1. Visit the [UI kits](#downloading-the-ui-kits) and select your preferred theme, such as Material 3.
2. Open the theme in the Figma web application by clicking **Open in Figma**.
3. For the desktop application, click **Import** in the top-right corner. Choose the downloaded Syncfusion<sup style="font-size:70%">&reg;</sup> `.fig` file and click **Open**.
4. Locate the button you want to customize within your layout.
5. On the right panel in Figma, locate the color variable options. For example, a primary button color may be labeled as `$primary-bg-color` and is derived from the primary color variable.
6. To update the primary button color, click outside the button to display the **Local variables** option in the Figma interface. This panel contains design tokens for the color variables. Click **Local variables**.
7. In the popup, browse the design token list and select a new primary color using the provided color palette.
8. After choosing the new color (e.g., pink), the primary button style updates immediately, reflecting your change in the design.

![Customization](./images/customize.png)

In addition to updating button color, further customization options are available, including font, spacing, shadows, and more. Adjust these settings to develop a design that suits your specific requirements.

## Downloading the customized styles

Download your customized styles as tokens and CSS variables using the `Syncfusion<sup style="font-size:70%">&reg;</sup> Design Tokens` plugin. This plugin enables seamless conversion of Figma design variables into Syncfusion<sup style="font-size:70%">&reg;</sup> tokens for direct use in your applications, ensuring a consistent transition from design to implementation.

### Exporting design tokens

To download customized styles from the Figma UI Kit:

- Open a [Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI Kit](https://www.figma.com/@syncfusion).
- Navigate to the `Plugins & widgets` section in Figma and search for `Syncfusion<sup style="font-size:70%">&reg;</sup> Design Tokens`.
- Launch the plugin. When the popup appears, click the `Export` button.
- This action generates a zip file containing the design tokens.
- Choose a directory to save the exported files.
- Extract the downloaded zip file to access its contents.

![export-design-tokens](./images/syncfusion-design-tokens.png)

### Utilizing design tokens

The exported zip file includes the following files:

  - `css-variables.css`: The css-variables.css file contains CSS variables for both light and dark themes, directly derived from your Figma designs. You can easily import this file into your application alongside the component styles to reflect your custom designs. For more detailed usage instructions, consult the [CSS variables](./css-variables) documentation.
  - `<theme-name>-tokens.json`: This file (e.g., material3-tokens.json) contains style variables and values in a JSON format compatible with [Theme Studio](./theme-studio). This file, prefixed with the corresponding theme name, can be [imported](./theme-studio#import-previously-changed-settings-into-the-theme-studio) into [Theme Studio](./theme-studio) for further customization. After processing in [Theme Studio](./theme-studio), you can [download](./theme-studio#download-the-customized-theme) the updated styles file and integrate it into your application, bringing your custom themes to life.

This streamlined process ensures that your unique design vision, crafted in Figma, is accurately translated into your final application, maintaining consistency between design and implementation.

## Upgrading the UI kits

To upgrade your UI kits, download the latest version from the provided links. Follow these guidelines for a seamless upgrade process:

- Keep track of updates or new versions of UI kits from Syncfusion.
- Before upgrading, back up your ongoing projects to prevent data loss or compatibility issues.
- Share your experience with Syncfusion<sup style="font-size:70%">&reg;</sup> regarding the upgraded UI kits, including any issues encountered or suggestions for improvement.

## See also

* [Available themes](https://ej2.syncfusion.com/documentation/appearance/theme)
* [Customizing themes](https://ej2.syncfusion.com/documentation/appearance/theme-studio#customizing-theme-color-from-theme-studio)
