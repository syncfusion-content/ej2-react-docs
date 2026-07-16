---
layout: post
title: Installing Syncfusion React (JavaScript) Linux Installer | Syncfusion
description: Step-by-step guide to installing the Syncfusion React (JavaScript) Linux installer, extracting the contents, and registering the license key.
control: Installation using Linux installer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installing Syncfusion<sup style="font-size:70%">&reg;</sup> React (JavaScript) Linux Installer

The Linux distribution is provided as a `.zip` archive; installation consists of extracting the archive to a directory of your choice. There is no executable installer to run.

## System Requirements

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript/React Linux installer is compatible with:

* Node.js 14.x or later (LTS recommended) — required to run the included demos and to use NPM packages
* A tool such as `unzip` to extract the archive

For the latest system requirements, refer to the [Syncfusion system requirements documentation](https://ej2.syncfusion.com/react/documentation/system-requirement).

## Step-by-Step Installation

Follow the steps below to install the JavaScript/React Linux installer:

1. Extract the downloaded Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript/React Linux installer (`.zip`) file to your desired directory. For example:

   ```bash
   unzip SyncfusionEssentialJS2Linux.zip -d ~/Syncfusion
   ```

   ![Extracting the installer](images/Linux_Installer1.png)

2. Once extracted, the directory will typically contain the following folders:

   * **Samples**: Contains the local demos and source code for the components.
   * **Packages**: Contains the offline NPM package feed for the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript/React components.
   * **Build**: Contains the pre-built scripts and styles (CSS) for the components.
   * **Help**: Contains the offline documentation.

   ![Installer contents](images/Linux_Installer2.png)

   > An unlock key is not required to install or extract the Linux installer.

3. Launch the demo sources or use the included packages locally in a development environment. To run a sample, navigate to the corresponding sample folder, run `npm install` to restore dependencies, and then run `npm start` (or open `index.html` for static demos).

## License Key Registration in Samples

A license key is required to register and run the demo sources included with the Linux installer. For instructions on registering the license key, refer to the following topics:

* [Register Syncfusion<sup style="font-size:70%">&reg;</sup> License key in the project](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project)
* [Register the license key using the npx command](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration#register-syncfusion-license-key-using-the-npx-command)