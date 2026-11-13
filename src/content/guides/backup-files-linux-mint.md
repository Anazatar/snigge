---
description: Protect your Linux Mint documents, photos, and personal
  files with a simple backup routine using an external drive.
level: Beginner
pubDate: 2026-11-13
readTime: 6 min
title: How to Back Up Your Files on Linux Mint
topic: linux
---

If you use Linux Mint for everyday tasks, your computer may contain
years of documents, photos, downloads, and other important files.
Learning how to backup Linux Mint files is a simple way to protect those
items if your computer stops working or you accidentally delete
something.

Linux Mint includes a tool called **Backup Tool** that can help copy
personal files from your home folder. You can also use **Timeshift** to
save snapshots of the operating system itself. The important thing is to
understand that these tools do different jobs.

## What you'll need

-   An external USB hard drive or USB flash drive with enough free
    space.
-   Your Linux Mint computer.
-   A safe place to store the backup drive when you are not using it.

An external hard drive is usually a better choice than a small USB flash
drive if you have lots of photos or videos. Choose a drive with more
free space than the files you plan to copy.

## Step 1: Decide which files you want to protect

Before starting a backup, take a moment to think about what you would
miss if your computer stopped working. Personal files are usually stored
in your home folder, which is named after your Linux Mint account.

1.  Open the **Home** folder from the desktop or file manager.
2.  Look through folders such as **Documents**, **Pictures**,
    **Videos**, **Music**, and **Downloads**.
3.  Identify any other folders where you keep important personal files.
4.  Check whether you have files saved outside your home folder, such as
    on another drive.
5.  Remove nothing just to make the backup smaller unless you are
    certain you no longer need it.

You may also want to preserve certain hidden files and folders. Hidden
items are files whose names begin with a dot; they can contain personal
application settings. Linux Mint's Backup Tool provides an option to
include hidden items.

\[SCREENSHOT: Linux Mint Home folder showing Documents, Pictures,
Downloads, Music, and Videos\]

> **Tip:** Make a short list of the folders that matter most to you. It
> is easy to overlook a folder you use only occasionally, such as
> scanned documents or files saved by a particular app.

## Step 2: Connect an external backup drive

A backup should be stored somewhere other than the computer's main
drive. That way, it is still available if the computer's internal drive
fails.

1.  Connect your external USB drive to the computer.
2.  Wait a moment for Linux Mint to recognize it.
3.  Open the file manager and look for the drive in the sidebar.
4.  Click the drive to open it.
5.  Check that it has enough free space for your backup.

If the drive contains files you want to keep, do not format it.
Formatting erases the drive. If Linux Mint asks whether to format the
drive and you are not certain what to choose, cancel and ask for help
before continuing.

\[SCREENSHOT: Linux Mint file manager showing an external USB drive in
the sidebar\]

> **Careful:** Do not save your only backup on the same internal drive
> as your original files. A computer or drive failure could affect both
> copies.

## Step 3: Open Linux Mint Backup Tool

Linux Mint includes a graphical utility called **Backup Tool**. It can
create a backup of personal files from your home folder and save a list
of installed software.

1.  Click the **Menu** button.
2.  Open **Administration**.
3.  Select **Backup Tool**.
4.  If you cannot see it, open the Menu search field and type **Backup
    Tool**.
5.  Open the result when it appears.

The Backup Tool window has separate options for personal data and
software selection. For this guide, start with the personal data backup.

\[SCREENSHOT: Linux Mint application menu showing Administration and
Backup Tool\]

## Step 4: Choose the personal files to back up

The personal data section lets you choose the files and folders to
include. The exact wording or layout can vary slightly between Linux
Mint releases.

1.  In **Backup Tool**, find the **Personal data** section.
2.  Choose **Back Up Now**.
3.  When asked where to save the backup, browse to your external drive.
4.  Choose a folder on that drive, or create a new folder named
    something easy to recognize, such as `Mint Backup`.
5.  Continue through the prompts using **Forward** where shown.
6.  Review the file and folder selection before starting the backup.

You can use the options to exclude files or folders you do not need. If
you want hidden personal settings included, review the hidden-files
option. In newer Linux Mint releases, an **Include All** button may be
available to add hidden files and folders to the selection.

\[SCREENSHOT: Linux Mint Backup Tool showing the Personal data backup
option and destination selection\]

> **Good to know:** Hidden files can contain application settings, but
> not everyone needs to copy all of them. If you are unsure, back up
> your important documents and photos first, and include hidden items if
> you also want to preserve more of your personal desktop configuration.

## Step 5: Start the backup and wait for it to finish

Once you have chosen the destination and files, review the summary
before continuing. Make sure the external drive is selected rather than
a folder on the computer's internal disk.

1.  Check the destination path shown in the Backup Tool.
2.  Confirm that the folders you want are included.
3.  Click **Forward** or **Apply** when the tool presents the
    confirmation.
4.  Wait while Linux Mint copies the files.
5.  Keep the external drive connected until the tool reports that the
    backup is complete.
6.  Close the Backup Tool when it has finished.

The time required depends on how many files you have and how quickly
your external drive can transfer them. A large photo or video collection
may take longer than a folder of documents.

\[SCREENSHOT: Linux Mint Backup Tool showing the backup progress or
completion message\]

## Step 6: Check that your backup is usable

A backup is only useful if the files are really there and can be opened.
Take a minute to check the result before disconnecting the drive.

1.  Open the external drive in the file manager.
2.  Find the folder or archive created by Backup Tool.
3.  Check that the backup has a sensible file size and a recent date.
4.  If the backup is stored as an archive, open it with the archive
    manager to inspect its contents.
5.  If practical, restore or open a copy of one unimportant test file in
    a separate folder.

Do not move or delete your original files just because the backup
appears to have completed. Keep the originals in place until you are
confident the backup contains what you need.

## Step 7: Create system snapshots with Timeshift too

Backing up personal files is not the same as protecting the operating
system. Linux Mint also includes **Timeshift**, a tool that creates
system snapshots. A snapshot is a saved state of system files and
settings that can help you undo a problem caused by an update or system
change.

1.  Click **Menu** and open **Administration**.
2.  Select **Timeshift**.
3.  Follow the setup wizard.
4.  Choose the recommended **RSYNC** method for a typical installation
    unless you know your system uses a supported BTRFS setup.
5.  Select a suitable location for snapshots and review the schedule.
6.  Finish the setup and create a first snapshot.

\[SCREENSHOT: Timeshift setup window showing the RSYNC option and
snapshot location\]

> **Important:** Timeshift is designed to protect system files and
> settings. It excludes personal files in your home folder by default,
> so it does not replace the personal-file backup you made with Backup
> Tool. Keep both protections separate.

## Troubleshooting: If the backup does not work

-   **The external drive is missing:** Unplug it, reconnect it, and
    check the file manager sidebar. Try another USB port if necessary.
-   **There is not enough space:** Choose a larger drive or review which
    folders you need to include. Do not delete files from the backup
    drive unless you know what they are.
-   **Backup Tool is not in the menu:** Search the Menu for **Backup
    Tool**. If it is still missing, check the Software Manager or Linux
    Mint documentation for your release.
-   **The backup takes a long time:** Large photo and video collections
    can take a while. Keep the computer powered on and the drive
    connected until the process finishes.
-   **You cannot open the backup:** Check whether it was saved as an
    archive or as a directory, and use the appropriate file manager or
    archive tool to inspect it.

## Make backups part of your routine

A backup does not need to be complicated. Use Linux Mint's Backup Tool
to copy your important personal files to an external drive, and use
Timeshift separately for system snapshots. Repeat your personal backup
regularly, check that the files can be opened, and store the external
drive somewhere safe when you are finished.
