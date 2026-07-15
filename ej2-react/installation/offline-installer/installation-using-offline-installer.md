---
layout: post
title: Installing React Components Using Offline Installer | Syncfusion
description: Step-by-step guide to installing Syncfusion React (JavaScript - EJ2) components using the offline installer, including UI and silent mode installation.
control: Installation using offline installer 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installing React Components using the Offline Installer

The Syncfusion<sup style="font-size:70%">&reg;</sup> React (JavaScript - EJ2) offline installer is a single Windows distributable that ships samples and resources for all supported frameworks. Once installed, you can access the React-specific content and demos from the same installation directory.

The installer is available in two formats:

* **Graphical (UI) installer** — interactive setup wizard.
* **Silent (command-line) installer** — for automated, scripted deployments.

## System Requirements

Before installation, ensure the system meets these requirements:

- **Operating System**: Windows 7 SP1 or later
- **Disk space**: At least 2 GB of free disk space
- **Node.js**: Version 18.x or later (LTS recommended), required to run the demos
- **Privileges**: Administrator privileges are required to run the installer

## Installing with UI (Windows)

These steps describe installing the Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 offline installer using the graphical interface on Windows.

### Step 1: Launch the installer

1. Double-click the downloaded Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 offline installer (.exe) to open the Installer Wizard; the package is extracted automatically. If prompted by Windows User Account Control, click **Yes** to allow the installer to run with administrator privileges.

    ![Installer extraction](images/offline1.png)

    > The installer displays an extraction progress dialog while unpacking the installation files.

### Step 2: Unlock the Installer

2. To unlock the installer, choose one of the following options:

    **Option 1: Log in to install**

    Enter the Syncfusion<sup style="font-size:70%">&reg;</sup> account email and password. If an account is not available, select **Create an account**. Use **Forgot Password** to reset credentials if necessary, then click **Next**.

    ![Login to install](images/offline2.png)

    **Option 2: Use an unlock key**

    Unlock keys are platform- and version-specific. Provide a licensed or trial unlock key to proceed; trial keys are valid for 30 days.

    For instructions on generating an unlock key, see the Knowledge Base article: [How to generate an unlock key for Essential Studio products](https://www.syncfusion.com/kb/8069/how-to-generate-unlock-key-for-essentials-studio-products).

    ![Unlock key entry](images/offline3.png)

### Step 3: Accept License Agreement

3. After reading the License Terms and Privacy Policy, check the **"I agree to the License Terms and Privacy Policy"** checkbox and click **Next**.

### Step 4: Configure Installation Settings

4. Specify the installation and sample locations, or accept the defaults. Click **Next** or **Install** to continue.

    ![Installation settings](images/offline4.png)

    **Additional settings:**

    * **Install Demos**: Installs sample projects and demos when checked; uncheck to skip demo installation.
    * **Create Desktop Shortcut**: Adds a Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel shortcut to the desktop.
    * **Create Start Menu Shortcut**: Adds a Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel shortcut to the Start Menu.

### Step 5: Uninstall Previous Versions (Optional)

5. If previous versions are detected, the **Uninstall Previous Version(s)** wizard appears; select versions to remove and click **Proceed**.

    ![Uninstall previous versions](images/offline5.png)

    > Starting with the 2021 Volume 1 release, Syncfusion<sup style="font-size:70%">&reg;</sup> offers the option to uninstall versions 18.1 and later during installation.

    **Confirmation dialog:**

    ![Uninstall confirmation](images/offline6.png)

    **Uninstall progress:**

    ![Uninstall progress](images/offline7.png)

### Step 6: Monitor Installation Progress

6. The installer displays progress for uninstallation (if selected) and for installation.

    **Installation progress:**

    ![Installation progress](images/offline8.png)

### Step 7: Complete Installation

7. After installation completes, the completion screen displays the status.

    ![Installation complete](images/offline9.png)

8. Click **Launch Control Panel** to open the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel, or click **Finish** to exit.

### Verify the installation

1. Open the installation directory (default: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\x.x.x.x`) and confirm the `Samples`, `Packages`, and `Build` folders are present.
2. Open the Syncfusion Control Panel from the desktop or Start Menu shortcut to view the installed version and license status.

## Installing in Silent Mode (Windows)

The Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 installer supports silent installation and uninstallation via the command line on Windows.

### Silent mode installation

1. Run the installer by double-clicking it; the installer extracts files to the Temp directory.
2. Open the Temp folder by typing `%temp%` in File Explorer or the Run dialog.
3. Locate the extracted `syncfusionejs2_x.x.x.x.exe` file and copy it to a local drive (for example, `D:\Temp`).
4. Exit the Installer Wizard.
5. Open an elevated Command Prompt (Run as administrator) and run the command using this syntax:

    **Syntax:**
    ```
    "installer_path\\syncfusionejs2_x.x.x.x.exe" /Install silent /UNLOCKKEY:"your_unlock_key" [/log "log_file_path"] [/InstallPath:"install_location"] [/InstallSamples:true|false]
    ```

    **Example:**
    ```
    "D:\Temp\\syncfusionejs2_27.1.0.50.exe" /Install silent /UNLOCKKEY:"ABC123XYZ456" /log "C:\Temp\\install.log" /InstallPath:"C:\Syncfusion\\27.1.0.50" /InstallSamples:true
    ```

    **Parameters:**
    * `/Install silent`: Runs the installer in silent mode.
    * `/UNLOCKKEY`: Specifies the unlock key for the version being installed.
    * `/log`: (Optional) Specifies the log file path.
    * `/InstallPath`: (Optional) Specifies the installation directory.
    * `/InstallSamples`: (Optional) Install samples using `/InstallSamples:true` or `/InstallSamples:false`.

6. The installation completes silently. Check the log file (if specified) for details.

### Silent mode uninstallation

1. Follow steps 1–4 from the silent installation procedure to locate the installer executable.
2. Open Command Prompt in administrator mode and run the uninstallation command:

    **Syntax:**
    ```
    "installer_path\\syncfusionejs2_x.x.x.x.exe" /Uninstall silent
    ```

    **Example:**
    ```
    "D:\Temp\\syncfusionejs2_27.1.0.50.exe" /Uninstall silent
    ```

3. The uninstallation completes silently.

## Post-Installation

After installation:

- **Access demos**: Navigate to the installation directory (default: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\\x.x.x.x`) to find sample projects.
- **Launch Control Panel**: Use the desktop or Start Menu shortcut to open the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel for utilities and documentation.
- **Register license key**: For licensed installations, register the license key in React projects. See the [license key registration guide](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).

## Next steps

* [Syncfusion React Sample Browser](https://ej2.syncfusion.com/react/demos/) — online demos of all components
* [Syncfusion NPM registration](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration) — register the license key for NPM-based projects
* [Syncfusion system requirements](https://ej2.syncfusion.com/react/documentation/system-requirements) — supported platforms, Node.js, and browser versions
