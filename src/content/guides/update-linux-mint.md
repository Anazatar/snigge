---
title: "How to Update Linux Mint"
description: "Keep Linux Mint secure and running smoothly with a simple guide to checking, installing, and troubleshooting software updates."
topic: linux
pubDate: 2026-11-13
readTime: "5 min"
level: Beginner
---

If you use Linux Mint, you may occasionally see a shield icon near the clock or a message saying that updates are available. It is natural to wonder whether you should install them, and how to do it safely.

Updating Linux Mint is usually straightforward. The built-in **Update Manager** checks for software and security updates, then helps you install them without needing to type commands. This guide walks you through the process and explains when you may need to restart your computer.

## What you'll need

- Your Linux Mint computer.
- An internet connection.
- Your administrator password, which may be requested when you install updates.

## Step 1: Open the Update Manager

The Update Manager is the built-in tool Linux Mint uses to find and install updates for the system and many installed programs.

1. Click the **Menu** button in the bottom-left corner of your desktop.
2. Open **Administration**.
3. Select **Update Manager**.
4. If a password window appears, enter your administrator password and continue.

You can also click the shield-shaped Update Manager icon near the clock if it is visible. The icon may change appearance to let you know that updates are available or that the system is up to date.

[SCREENSHOT: Linux Mint desktop with the Menu open to Administration and Update Manager highlighted]

> **Tip:** If you cannot find Update Manager in the menu, open the Menu and type **Update Manager** in its search box.

## Step 2: Refresh the list of available updates

Before installing updates, ask Linux Mint to check its software sources for the latest available information. This is called refreshing the package information.

1. In the Update Manager window, click **Refresh**.
2. Wait while Linux Mint checks its software sources and downloads the latest update information.
3. If a password is requested, enter your administrator password.
4. When the check finishes, look at the list of available updates.

If the list is empty and the window says your system is up to date, there is nothing you need to install right now.

If Update Manager itself needs an update, install that first. It may close or restart; if so, open it again and click **Refresh** once more.

[SCREENSHOT: Linux Mint Update Manager window with the Refresh button highlighted and an available updates list]

> **Good to know:** Refresh checks which updates are available. It does not install them by itself.

## Step 3: Select and install the updates

When updates appear in the list, you can review them and install them.

1. Look through the updates shown in the main Update Manager window.
2. Click **Select All** to select the available updates. If the updates are already selected, you can leave them as they are.
3. Click **Install Updates**.
4. Enter your administrator password if Linux Mint asks for it.
5. Read any confirmation message, then allow the installation to finish.

You may see a progress bar while the updates download and install. The time needed depends on the number and size of the updates and the speed of your internet connection.

Avoid switching off your computer while updates are being installed. If Update Manager asks you to confirm an action, read the message before continuing.

[SCREENSHOT: Update Manager showing the Select All and Install Updates buttons above a list of updates]

## Step 4: Restart your computer if needed

Some updates take effect straight away. Others, particularly updates to important system components such as the Linux kernel, may need a restart.

The **kernel** is the central part of Linux that helps the operating system communicate with your computer's hardware.

1. When the installation finishes, look for a message asking you to restart.
2. Save any open documents and close programs.
3. If a restart is requested, use the restart option shown by Linux Mint.
4. Wait for the computer to shut down and start again.
5. Once you are back at the desktop, open Update Manager and click **Refresh** to check whether more updates are waiting.

If no restart message appears, you can usually continue using your computer. If you have installed a kernel update, restarting is a sensible way to begin using the new kernel.

> **Careful:** Do not interrupt an update or turn off the computer while the installation is in progress. Wait until Update Manager has finished and any restart prompt appears.

[SCREENSHOT: Linux Mint notification or Update Manager message asking the user to restart after updates]

## Step 5: Make updating a regular habit

You do not need to check for updates every few minutes. A regular check helps you receive security fixes and bug fixes without letting a long list build up.

1. Open **Update Manager** from the Menu or the shield icon.
2. Click **Refresh**.
3. If updates are listed, review them and use **Select All** and **Install Updates**.
4. Restart if Linux Mint asks you to.

Linux Mint may show update notifications in the system tray. The Update Manager also includes preferences for how it checks for updates and displays notifications. If you want to change those settings, open Update Manager and look under **Edit > Preferences**. The options shown can vary by Linux Mint edition and release.

It is also sensible to have a recent system snapshot before significant changes. Linux Mint includes a tool called **Timeshift** on supported installations. A snapshot saves information about system files so you can roll the system back if a change causes trouble. It is not a replacement for backing up your personal documents, photos, and other files.

[SCREENSHOT: Linux Mint Update Manager showing the system up-to-date message and its Preferences menu]

## Troubleshooting: What if Linux Mint will not update?

If an update fails or Update Manager cannot find updates, try these checks.

**Check your internet connection.** Open a website in your browser to make sure your computer is online, then return to Update Manager and click **Refresh** again.

**Try Refresh once more.** A temporary problem contacting a software server can sometimes clear when you repeat the check after a short wait.

**Check the software sources.** If Update Manager reports that a repository cannot be reached, open **Software Sources** from the Menu and check the selected download mirror. Choose a different nearby mirror if the current one is unavailable, then return to Update Manager and click **Refresh**. Avoid changing repository addresses or settings unless you know why they need changing.

**Read any error message.** If an update fails, make a note of the package name and the full message. Searching for that exact message in the Linux Mint community forums can help you find advice for your particular release.

**Restart and check again.** If the installation completed but Update Manager still shows pending updates, restart your computer and run **Refresh** again.

If the problem continues, do not repeatedly force the installation or remove system packages to try to clear the error. Ask for help in the Linux Mint community and include your Linux Mint version and the exact error message.

## Is updating Linux Mint the same as upgrading to a new version?

No. Regular updates install newer versions of the software and fixes within the Linux Mint release you already use. A major version upgrade moves your computer to a newer Linux Mint release.

For example, Linux Mint 22.3 is a separate release from Linux Mint 22, 22.1, and 22.2. The Linux Mint team provides specific upgrade instructions for supported starting versions. A major upgrade needs more preparation than an ordinary update, so do not expect it to appear as a routine item in the updates list.

Before a major version upgrade, back up your personal files and create a Timeshift snapshot. Follow the official instructions for your exact starting version rather than trying to change release repositories yourself.

## Keep Linux Mint up to date

Regular updates help Linux Mint stay secure, reliable, and compatible with newer software. Open Update Manager, click **Refresh**, install the updates it lists, and restart when asked. Once you have done it a few times, the process will feel routine.
