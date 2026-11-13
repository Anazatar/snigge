---
title: "How to Connect a Printer on Linux Mint"
description: "Connect a USB or wireless printer to Linux Mint with clear setup steps, test printing, and fixes for common connection problems."
topic: linux
pubDate: 2026-11-13
readTime: "6 min"
level: Beginner
---

If you have a printer at home and want to use it with Linux Mint, the setup may look a little different from Windows or macOS. You might be connecting it with a USB cable, or you may want to print over your home Wi-Fi network.

Linux Mint can set up many printers using its built-in printer tools. This guide shows you how to connect a printer, add it if it is not detected automatically, and print a test page.

## What you'll need

- Your Linux Mint computer.
- Your printer, switched on and ready to use.
- A USB cable for a wired connection, or your home Wi-Fi network for a wireless printer.
- Your Wi-Fi password if the printer has not yet been connected to your network.
- The printer's model name, usually printed on the front or on a label.

## Step 1: Prepare your printer

First, make sure the printer is ready.

1. Switch on the printer.
2. Check its screen or indicator lights for any messages, such as paper needed, a cover left open, or an ink or toner warning.
3. If you are using Wi-Fi, connect the printer to your home wireless network using the printer's own screen or setup instructions.
4. If you are using USB, connect the cable directly to your computer where possible.
5. Give the printer a moment to start up.

For Wi-Fi, your computer and printer should normally be on the same home network. A guest network may prevent them from finding each other.

[SCREENSHOT: A home printer switched on, with its Wi-Fi indicator or network status visible]

> **Tip:** If the printer has a screen, look for a network or Wi-Fi status page. It can help confirm that the printer is connected to your home network before you begin.

## Step 2: Open Printers in Linux Mint

Use Linux Mint's printer settings tool to add and manage printers.

1. Click the **Menu** button in the bottom-left corner of the desktop.
2. Open **Administration**.
3. Select **Printers**.
4. If asked, enter your administrator password.
5. Wait for the Printers window to open and show any printers already configured.

You can also search the Menu for **Printers**.

[SCREENSHOT: Linux Mint Menu with Administration expanded and Printers highlighted]

> **Good to know:** Linux Mint's desktop editions can look slightly different, but searching the Menu for **Printers** is a reliable way to find the settings tool.

## Step 3: Add a USB printer

A USB printer is usually the simplest type to connect. Linux Mint may detect it automatically when you plug it in.

1. Make sure the printer is switched on.
2. Connect the printer to your computer with its USB cable.
3. Open **Printers** if it is not already open.
4. Wait a short time for Linux Mint to detect the printer.
5. If it appears in the list, select it. If it does not, look for the add-printer control, often shown as a **+** button or **Add** option.
6. Follow the prompts to add the printer. Choose the matching make and model if Linux Mint asks you to select a driver.
7. Confirm the details and finish the setup.

A printer driver is software that helps Linux Mint communicate with a printer. Some models need a driver from the manufacturer.

[SCREENSHOT: Linux Mint Printers window showing a detected USB printer and the Add Printer control]

## Step 4: Add a wireless or network printer

If your printer is connected to Wi-Fi or your home router by an Ethernet cable, you can try adding it through the same Printers window.

1. Check that the printer is switched on and connected to your home network.
2. Make sure your Linux Mint computer is on that same network.
3. Open **Menu > Administration > Printers**.
4. Click the **+** or **Add** control.
5. Wait while Linux Mint searches for available printers.
6. If your printer appears, select it and follow the setup prompts.
7. Check that the displayed make and model are correct, then finish adding it.

Some printers use network discovery services such as IPP or Bonjour. They may appear by model name or network name.

If automatic discovery does not find your printer, look in the add-printer window for network printer options. Some versions offer choices such as **Find Network Printer** or allow you to enter a printer's network address. The exact wording and available options depend on the installed printer tools.

[SCREENSHOT: Add Printer window showing a wireless or network printer in the available devices list]

> **Careful:** Only enter a network address if you know it belongs to your printer. You can usually find the printer's IP address on its network status page or in your router's connected-device list.

## Step 5: Choose a driver if Linux Mint asks

Some printers are ready to use as soon as they are detected. Others need you to choose a driver.

1. When prompted, look for the printer manufacturer in the list.
2. Select the exact printer model if it is available.
3. If the exact model is not listed, check the printer manufacturer's Linux support page for a driver for your model and Linux distribution.
4. Follow the manufacturer's installation instructions carefully.
5. Return to **Printers** and check whether the printer is now available.

Do not choose a different model's driver just because its name looks similar. Check the manufacturer's documentation or Linux Mint community guidance.

Some manufacturers provide a package or installation utility for Linux. Only download printer software from the manufacturer's official website, and make sure it is intended for your printer model and system.

[SCREENSHOT: Printer driver selection screen showing manufacturer and model choices]

## Step 6: Print a test page

Once the printer has been added, try a test print before relying on it for an important document.

1. Open **Printers**.
2. Select your printer from the list.
3. Open the printer's menu or right-click its entry to see the available options.
4. Choose **Print Test Page** if that option is available.
5. Wait for the printer to produce the page.

If there is no test-page option, open a document and choose **File > Print** in the app.

If the page prints correctly, your printer is ready to use. You can select it from the print window whenever you want to print a document, photo, or webpage.

[SCREENSHOT: Linux Mint Printers window with a printer selected and the Print Test Page option visible]

## Troubleshooting: What if Linux Mint cannot find the printer?

If the printer does not appear, or a print job stays in the queue, try these checks.

**Check the connection.** For USB, unplug and reconnect the cable, and try another USB port. For Wi-Fi, confirm that the printer and computer are on the same home network.

**Restart the printer.** Switch it off, wait a few seconds, then switch it on again. Give it time to reconnect to Wi-Fi before searching from Linux Mint.

**Check the printer queue.** Open **Printers**, select the printer, and look for paused or failed jobs. If the printer is paused, use the available menu option to resume it. Remove a stuck job only if you no longer need it.

**Check the driver.** If the printer is detected but does not print properly, confirm that the selected driver matches the printer model. Visit the manufacturer's official Linux support page if a separate driver is required.

**Check the printer's network status.** If it is wireless, use its screen or status report to confirm that it has joined the network. If it has an IP address, check that it has not changed since you added the printer.

**Restart Linux Mint.** Save your work and restart the computer, then open **Printers** and try again.

If it still will not print, note the model name, Linux Mint version, and error message before asking the Linux Mint community or manufacturer for help.

## Connect your printer and try a test page

Add most printers through Linux Mint's **Printers** tool, using USB or Wi-Fi. Check the driver if needed, then print a test page. You should be ready for everyday printing.
