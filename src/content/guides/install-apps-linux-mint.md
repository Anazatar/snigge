---
title: "How to Install Apps on Linux Mint"
description: "Learn three straightforward ways to install apps on Linux Mint, using Software Manager, trusted app packages, or the Terminal."
topic: linux
pubDate: 2026-11-13
readTime: "6 min"
level: Beginner
---

If you have recently started using Linux Mint, you may be wondering where to find and install the apps you need. Unlike some computers, Linux Mint does not rely on one online store for every program, but it does provide a simple built-in way to browse and install software.

The easiest way to install apps on Linux Mint is usually through Software Manager. You can also install some programs from trusted sources or use the Terminal if you are comfortable typing a command. This guide explains the options and how to choose a safe one.

## What you'll need

- A computer running Linux Mint.
- An internet connection for downloading apps and updates.
- Your administrator password, which Linux Mint may request when installing software.

## Step 1: Open Software Manager

Software Manager is Linux Mint's built-in app store. It lets you browse available programs, read descriptions, and install many common applications without needing to use commands.

1. Click the **Menu** button in the bottom-left corner of your screen.
2. Open **Software Manager**. You may find it in the administration or system section, depending on your desktop layout.
3. If you cannot see it, start typing “Software Manager” in the Menu search box.
4. Open the app and wait for its catalog to load. The first launch may take a little longer.

[SCREENSHOT: Linux Mint Menu with Software Manager shown in the search results]

Software Manager may ask for your password when it first opens or when you install something. This is normal: Linux Mint uses administrator permission to make changes to the system.

> **Good to know:** Linux Mint's desktop layout can differ depending on whether you use Cinnamon, MATE, or Xfce. The Menu and Software Manager are still available, although their positions and appearance may vary.

## Step 2: Find an app and check its details

You can search for a program by name or browse categories to discover something new. Before installing, take a moment to check that you have selected the app you actually want.

1. In **Software Manager**, click the search box.
2. Type the name of the app, such as “VLC” or “GIMP”.
3. Select the matching result to open its information page.
4. Read the description and check the app name. Look at any screenshots or details provided.
5. If several similar results appear, compare their descriptions before choosing one.

An app may have more than one version or packaging format. You do not need to understand every technical detail to get started; choose the standard recommended option shown by Software Manager unless the app's official instructions say otherwise.

[SCREENSHOT: Software Manager search results for an example app, with one result selected]

> **Tip:** If you are unsure which app to choose, search for its official website and compare the name and description. Be cautious of unfamiliar programs with similar names.

## Step 3: Install the app through Software Manager

Once you have chosen the app, installing it is usually just a matter of clicking a button and confirming the change.

1. On the app's information page, click **Install**.
2. If Linux Mint asks for your password, enter the password for your account and confirm.
3. Wait while the app downloads and installs. Keep your internet connection active.
4. When the button changes to **Launch** or the installation is complete, the app is ready to use.
5. Close Software Manager when you are finished.

[SCREENSHOT: An app information page in Software Manager showing the Install button]

> **Careful:** Only install software you trust. Software can access files and other parts of your computer, so avoid installing programs from unknown websites or sources you cannot verify.

## Step 4: Open the app you installed

New apps are usually added to the Menu automatically. You can search for the app rather than trying to remember which category it belongs to.

1. Click the **Menu** button.
2. Start typing the app's name in the search box.
3. Select the app when it appears.
4. If you expect to use it often, right-click its Menu entry and look for an option such as **Add to panel** or **Add to desktop**. The available choices depend on your Linux Mint edition and desktop.

You can also return to Software Manager and click **Launch** on the app's page if that button is available.

[SCREENSHOT: Linux Mint Menu search showing the newly installed app]

## Step 5: Install apps using the Terminal (optional)

The Terminal is an app where you type text commands to ask Linux to carry out tasks. It can be useful when a trusted app's official instructions provide a command, but you do not need it for everyday installations through Software Manager.

For many apps available in Linux Mint's configured software repositories, you can use the `apt` package manager. A package manager is a tool that downloads and installs software while handling required supporting components.

1. Open the **Terminal** from the Menu. You can also use the keyboard shortcut **Ctrl-Alt-T** on standard Linux Mint desktop setups.
2. To refresh the list of available software, type:

   `sudo apt update`

3. Press **Enter**. If prompted, type your account password and press **Enter** again. For security, the password characters may not appear as you type.
4. To install an app, use this format, replacing `package-name` with the package name given by a trusted source:

   `sudo apt install package-name`

5. Read the list of changes before confirming. If it looks right, type `Y` when asked and press **Enter**.

Do not copy commands from random websites or run a command if you do not understand what it is asking your computer to do. For most beginners, Software Manager is the simpler choice.

[SCREENSHOT: Linux Mint Terminal showing an apt install command and its confirmation prompt]

> **Good to know:** The app's display name and its package name are not always identical. Check the official app instructions or search the package in Software Manager rather than guessing.

## Troubleshooting: If an app will not install

**Software Manager is not loading.** Check that your internet connection is working, then close and reopen Software Manager. If it still does not load, restart your computer and try again.

**Linux Mint asks for a password.** Enter the password you use for your Linux Mint account. If your account does not have administrator privileges, you may need help from the person who manages the computer.

**The Install button is unavailable.** The app may not be available for your version of Linux Mint, or there may be a temporary software-source problem. Check the app's official Linux installation instructions.

**The app does not appear in the Menu.** Wait a moment, then open the Menu and search for its name again. You can also return to Software Manager to check whether installation completed.

**You see an error about software sources or packages.** Avoid trying random Terminal commands to fix it. Check Linux Mint's official documentation or ask for help with the exact error message.

## Enjoy exploring Linux Mint

For most people, **Software Manager** is the easiest way to install apps on Linux Mint. Search for the program you need, check its details, and select **Install**. Once you are comfortable with that, you can explore other trusted installation methods at your own pace.
