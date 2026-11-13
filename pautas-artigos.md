# Pautas de artigos | Tech for Grownups

80 artigos (10 por tópico) + prompt para gerar no ChatGPT.

## Como usar

1. Abra um chat novo no ChatGPT e cole o **Prompt mestre** abaixo. Ele vai responder "Ready".
2. Copie a linha `GUIDE:` do artigo e mande no mesmo chat. Pode mandar várias linhas de uma vez (até umas 5): ele gera um `.md` para cada e um `.zip` com todos.
3. Baixe os arquivos e coloque em `~/techforgrownups/rascunhos/` (se vier .zip, extraia lá dentro).
4. Avise o Claude: "tem artigos novos nos rascunhos". Ele confere, move para o site, roda o build e marca `[x]` aqui.
5. Guarde os textos de Pinterest e Facebook que aparecem no chat.
6. Depois, tire os prints marcados com `[SCREENSHOT: ...]` e **teste os passos no aparelho**. A IA erra nome de menu.

> Dica: depois de uns 10 artigos no mesmo chat, abra um chat novo e cole o prompt mestre de novo. Chats muito longos começam a ignorar as regras.

## Prompt mestre

````text
You are a senior writer for "Tech for Grownups" (techforgrownups.com), a website of friendly, patient tech guides for adults aged 40+ in the US and UK.

From now on, every time I send a line starting with "GUIDE:", write one complete guide following ALL the rules below.

## Audience and tone
- Readers are smart adults who are not "tech people". Many are 50, 60, 70+.
- Warm, calm, respectful. Never condescending, never "for seniors" or "for dummies".
- Plain American English, short sentences, short paragraphs (2 to 3 sentences max).
- Explain any technical word in one short sentence the first time it appears.

## Accuracy (very important)
- Use the CURRENT menu names for the latest versions (iOS, Android, Windows 11, macOS, Linux Mint). If older versions differ, add a short note.
- Never invent buttons, menus or features. If you are not sure a menu name is exact, tell the reader to search for it in Settings.
- For Android, mention when Samsung uses different menu names.

## Structure
1. Intro (2 short paragraphs): the problem in the reader's words + reassurance that it's easy.
2. "What you'll need" list, only if needed.
3. Numbered steps as H2 headings: "## Step 1: ...". Inside each step, a short numbered list of actions.
4. Put the exact names of buttons and menus in **bold**.
5. Use these callouts (as blockquotes), 3 to 5 in total:
   > **Tip:** ...
   > **Careful:** ...
   > **Good to know:** ...
6. After each step where a picture helps, add a line: [SCREENSHOT: short description of what the screenshot should show]
7. A short "Troubleshooting" or "Still not working?" section when relevant.
8. A short, encouraging ending (H2), 1 to 2 sentences.

## SEO
- Use the target keyword naturally in the title, the first paragraph and one H2.
- 900 to 1,400 words. No filler, no fluff, no repeating the same idea.
- Do NOT use H1 inside the text (the title is already the H1).

## Output format
For each guide, CREATE A DOWNLOADABLE FILE named exactly <slug I give you>.md (use your file/code tool to generate it). Do not paste the article in the chat.

The file must contain ONLY the article, starting with this frontmatter on the very first line:

---
title: "<exact title I give you>"
description: "<one sentence, max 155 characters, benefit-focused>"
topic: <topic slug I give you>
pubDate: <today's date, YYYY-MM-DD>
readTime: "<X min>"
level: Beginner
---

(use "level: Intermediate" only if the guide really needs it)

If I send several GUIDE lines in one message, create one .md file per guide and also a single .zip with all of them.

In the chat, after the download link(s), write only this for each guide (in one code block):
- 3 Pinterest pin titles (max 60 characters each)
- 1 Pinterest pin description (max 300 characters, with the keyword)
- 1 Facebook post (2 to 3 short sentences + a question to spark comments)

Reply "Ready" if you understand, and wait for my first GUIDE line.
````

## iPhone & iPad (`iphone`)

- [x] **How to Back Up Your iPhone to iCloud**

```text
GUIDE: How to Back Up Your iPhone to iCloud | topic: iphone | slug: iphone-backup-icloud | keyword: back up iphone to icloud
```

- [x] **How to Stop Spam Calls on Your iPhone**

```text
GUIDE: How to Stop Spam Calls on Your iPhone | topic: iphone | slug: stop-spam-calls-iphone | keyword: stop spam calls iphone
```

- [x] **How to Free Up Storage on Your iPhone**

```text
GUIDE: How to Free Up Storage on Your iPhone | topic: iphone | slug: free-up-storage-iphone | keyword: iphone storage full
```

- [x] **How to Transfer Photos from iPhone to Computer**

```text
GUIDE: How to Transfer Photos from iPhone to Computer | topic: iphone | slug: transfer-photos-iphone-to-computer | keyword: transfer photos from iphone to computer
```

- [x] **How to Take a Screenshot on iPhone and iPad**

```text
GUIDE: How to Take a Screenshot on iPhone and iPad | topic: iphone | slug: screenshot-iphone-ipad | keyword: how to screenshot on iphone
```

- [x] **How to Set Up Medical ID and Emergency SOS on iPhone**

```text
GUIDE: How to Set Up Medical ID and Emergency SOS on iPhone | topic: iphone | slug: iphone-medical-id-emergency-sos | keyword: iphone medical id
```

- [x] **How to Make Your iPhone Battery Last Longer**

```text
GUIDE: How to Make Your iPhone Battery Last Longer | topic: iphone | slug: iphone-battery-last-longer | keyword: iphone battery drains fast
```

- [x] **How to Find a Lost iPhone with Find My**

```text
GUIDE: How to Find a Lost iPhone with Find My | topic: iphone | slug: find-lost-iphone-find-my | keyword: find my lost iphone
```

- [x] **How to Share Photos with Family Using iCloud Shared Albums**

```text
GUIDE: How to Share Photos with Family Using iCloud Shared Albums | topic: iphone | slug: iphone-shared-albums-family | keyword: share photos with family iphone
```

- [x] **How to Use Your iPhone as a Magnifying Glass**

```text
GUIDE: How to Use Your iPhone as a Magnifying Glass | topic: iphone | slug: iphone-magnifier-reading | keyword: iphone magnifier
```

## Android (`android`)

- [x] **How to Back Up Your Android Phone to Google**

```text
GUIDE: How to Back Up Your Android Phone to Google | topic: android | slug: backup-android-google | keyword: back up android phone
```

- [x] **How to Block Spam Calls on Android**

```text
GUIDE: How to Block Spam Calls on Android | topic: android | slug: block-spam-calls-android | keyword: block spam calls android
```

- [x] **How to Take a Screenshot on Android**

```text
GUIDE: How to Take a Screenshot on Android | topic: android | slug: screenshot-android | keyword: how to screenshot on android
```

- [x] **How to Make Your Android Battery Last Longer**

```text
GUIDE: How to Make Your Android Battery Last Longer | topic: android | slug: android-battery-last-longer | keyword: android battery drains fast
```

- [x] **How to Find a Lost Android Phone**

```text
GUIDE: How to Find a Lost Android Phone | topic: android | slug: find-lost-android-phone | keyword: find my lost android phone
```

- [x] **How to Transfer Photos from Android to Computer**

```text
GUIDE: How to Transfer Photos from Android to Computer | topic: android | slug: transfer-photos-android-to-computer | keyword: transfer photos from android to pc
```

- [x] **How to Turn On Easy Mode on a Samsung Phone**

```text
GUIDE: How to Turn On Easy Mode on a Samsung Phone | topic: android | slug: samsung-easy-mode | keyword: samsung easy mode
```

- [x] **How to Update Apps on Android**

```text
GUIDE: How to Update Apps on Android | topic: android | slug: update-apps-android | keyword: how to update apps on android
```

- [x] **How to Set Up Emergency SOS on Android**

```text
GUIDE: How to Set Up Emergency SOS on Android | topic: android | slug: android-emergency-sos | keyword: android emergency sos
```

- [x] **How to Move Your Contacts to a New Android Phone**

```text
GUIDE: How to Move Your Contacts to a New Android Phone | topic: android | slug: move-contacts-new-android | keyword: transfer contacts to new android phone
```

## Windows (`windows`)

- [x] **How to Take a Screenshot on Windows**

```text
GUIDE: How to Take a Screenshot on Windows | topic: windows | slug: screenshot-windows | keyword: how to screenshot on windows
```

- [x] **How to Back Up Your Files in Windows 11**

```text
GUIDE: How to Back Up Your Files in Windows 11 | topic: windows | slug: backup-files-windows-11 | keyword: back up files windows 11
```

- [x] **How to Make Text and Icons Bigger in Windows**

```text
GUIDE: How to Make Text and Icons Bigger in Windows | topic: windows | slug: bigger-text-icons-windows | keyword: make text bigger windows 11
```

- [x] **How to Upgrade from Windows 10 to Windows 11**

```text
GUIDE: How to Upgrade from Windows 10 to Windows 11 | topic: windows | slug: upgrade-windows-10-to-11 | keyword: upgrade windows 10 to 11
```

- [x] **How to Connect a Printer to Your Windows PC**

```text
GUIDE: How to Connect a Printer to Your Windows PC | topic: windows | slug: connect-printer-windows | keyword: add printer windows 11
```

- [x] **How to Find a Lost File on Your PC**

```text
GUIDE: How to Find a Lost File on Your PC | topic: windows | slug: find-lost-file-windows | keyword: find lost file windows
```

- [x] **How to Get Rid of Fake Virus Pop-Ups**

```text
GUIDE: How to Get Rid of Fake Virus Pop-Ups | topic: windows | slug: fake-virus-popups-windows | keyword: fake virus warning pop up
```

- [x] **How to Change Your Windows Password or PIN**

```text
GUIDE: How to Change Your Windows Password or PIN | topic: windows | slug: change-windows-password-pin | keyword: change windows password
```

- [x] **10 Windows Keyboard Shortcuts Every Beginner Should Know**

```text
GUIDE: 10 Windows Keyboard Shortcuts Every Beginner Should Know | topic: windows | slug: windows-keyboard-shortcuts-beginners | keyword: windows keyboard shortcuts
```

- [x] **How to Connect to Wi-Fi on Windows**

```text
GUIDE: How to Connect to Wi-Fi on Windows | topic: windows | slug: connect-wifi-windows | keyword: connect to wifi windows 11
```

## Mac (`mac`)

- [x] **How to Take a Screenshot on a Mac**

```text
GUIDE: How to Take a Screenshot on a Mac | topic: mac | slug: screenshot-mac | keyword: how to screenshot on mac
```

- [x] **How to Right-Click on a Mac**

```text
GUIDE: How to Right-Click on a Mac | topic: mac | slug: right-click-mac | keyword: how to right click on mac
```

- [x] **How to Make Text Bigger on Your Mac**

```text
GUIDE: How to Make Text Bigger on Your Mac | topic: mac | slug: bigger-text-mac | keyword: make text bigger on mac
```

- [x] **How to Update macOS Safely**

```text
GUIDE: How to Update macOS Safely | topic: mac | slug: update-macos | keyword: how to update mac
```

- [x] **How to Free Up Storage on Your Mac**

```text
GUIDE: How to Free Up Storage on Your Mac | topic: mac | slug: free-up-storage-mac | keyword: mac storage full
```

- [x] **How to Use AirDrop Between iPhone and Mac**

```text
GUIDE: How to Use AirDrop Between iPhone and Mac | topic: mac | slug: airdrop-iphone-to-mac | keyword: airdrop from iphone to mac
```

- [x] **10 Mac Keyboard Shortcuts Every Beginner Should Know**

```text
GUIDE: 10 Mac Keyboard Shortcuts Every Beginner Should Know | topic: mac | slug: mac-keyboard-shortcuts-beginners | keyword: mac keyboard shortcuts
```

- [x] **How to Uninstall Apps on a Mac**

```text
GUIDE: How to Uninstall Apps on a Mac | topic: mac | slug: uninstall-apps-mac | keyword: how to uninstall apps on mac
```

- [x] **Switching from Windows to Mac: A Beginner's Guide**

```text
GUIDE: Switching from Windows to Mac: A Beginner's Guide | topic: mac | slug: switch-windows-to-mac | keyword: switching from windows to mac
```

- [x] **How to Force Quit a Frozen App on a Mac**

```text
GUIDE: How to Force Quit a Frozen App on a Mac | topic: mac | slug: force-quit-mac | keyword: force quit mac
```

## Linux (`linux`)

- [x] **Linux Mint vs Ubuntu: Which Is Better for Beginners?**

```text
GUIDE: Linux Mint vs Ubuntu: Which Is Better for Beginners? | topic: linux | slug: linux-mint-vs-ubuntu | keyword: linux mint vs ubuntu
```

- [x] **How to Install Apps on Linux Mint**

```text
GUIDE: How to Install Apps on Linux Mint | topic: linux | slug: install-apps-linux-mint | keyword: install apps linux mint
```

- [x] **How to Update Linux Mint**

```text
GUIDE: How to Update Linux Mint | topic: linux | slug: update-linux-mint | keyword: how to update linux mint
```

- [x] **How to Install Google Chrome on Linux Mint**

```text
GUIDE: How to Install Google Chrome on Linux Mint | topic: linux | slug: install-chrome-linux-mint | keyword: install chrome linux mint
```

- [x] **How to Use LibreOffice Instead of Microsoft Word**

```text
GUIDE: How to Use LibreOffice Instead of Microsoft Word | topic: linux | slug: libreoffice-instead-of-word | keyword: libreoffice for beginners
```

- [x] **How to Connect a Printer on Linux Mint**

```text
GUIDE: How to Connect a Printer on Linux Mint | topic: linux | slug: printer-linux-mint | keyword: printer linux mint
```

- [x] **How to Back Up Your Files on Linux Mint**

```text
GUIDE: How to Back Up Your Files on Linux Mint | topic: linux | slug: backup-files-linux-mint | keyword: backup linux mint
```

- [x] **Is Linux Safe? Do You Need Antivirus on Linux?**

```text
GUIDE: Is Linux Safe? Do You Need Antivirus on Linux? | topic: linux | slug: is-linux-safe-antivirus | keyword: does linux need antivirus
```

- [x] **How to Make Text Bigger on Linux Mint**

```text
GUIDE: How to Make Text Bigger on Linux Mint | topic: linux | slug: bigger-text-linux-mint | keyword: linux mint bigger text
```

- [x] **How to Make Video Calls on Linux (Zoom, Meet and More)**

```text
GUIDE: How to Make Video Calls on Linux (Zoom, Meet and More) | topic: linux | slug: video-calls-linux | keyword: zoom on linux
```

## Scam Safety (`scam-safety`)

- [x] **How to Spot a Phishing Email**

```text
GUIDE: How to Spot a Phishing Email | topic: scam-safety | slug: spot-phishing-email | keyword: how to spot phishing email
```

- [x] **Tech Support Scams: How to Recognize and Avoid Them**

```text
GUIDE: Tech Support Scams: How to Recognize and Avoid Them | topic: scam-safety | slug: tech-support-scams | keyword: tech support scam
```

- [x] **The Grandparent Scam: How It Works and How to Protect Your Family**

```text
GUIDE: The Grandparent Scam: How It Works and How to Protect Your Family | topic: scam-safety | slug: grandparent-scam | keyword: grandparent scam
```

- [x] **How to Create Strong Passwords You Can Actually Remember**

```text
GUIDE: How to Create Strong Passwords You Can Actually Remember | topic: scam-safety | slug: strong-passwords-remember | keyword: how to create a strong password
```

- [x] **What Is Two-Factor Authentication and How to Turn It On**

```text
GUIDE: What Is Two-Factor Authentication and How to Turn It On | topic: scam-safety | slug: two-factor-authentication-guide | keyword: what is two factor authentication
```

- [x] **Romance Scams: Warning Signs to Watch For**

```text
GUIDE: Romance Scams: Warning Signs to Watch For | topic: scam-safety | slug: romance-scam-warning-signs | keyword: romance scam signs
```

- [x] **Fake Bank Calls: How to Tell If It's Really Your Bank**

```text
GUIDE: Fake Bank Calls: How to Tell If It's Really Your Bank | topic: scam-safety | slug: fake-bank-calls | keyword: fake bank call scam
```

- [x] **How to Use a Password Manager: A Beginner's Guide**

```text
GUIDE: How to Use a Password Manager: A Beginner's Guide | topic: scam-safety | slug: password-manager-beginners | keyword: password manager for beginners
```

- [x] **What to Do If You've Been Scammed: A Step-by-Step Checklist**

```text
GUIDE: What to Do If You've Been Scammed: A Step-by-Step Checklist | topic: scam-safety | slug: what-to-do-if-scammed | keyword: what to do if you've been scammed
```

- [x] **Facebook Marketplace Scams and How to Avoid Them**

```text
GUIDE: Facebook Marketplace Scams and How to Avoid Them | topic: scam-safety | slug: facebook-marketplace-scams | keyword: facebook marketplace scams
```

## Everyday Apps (`everyday-apps`)

- [x] **How to Use Zoom: A Beginner's Guide**

```text
GUIDE: How to Use Zoom: A Beginner's Guide | topic: everyday-apps | slug: zoom-beginners-guide | keyword: how to use zoom
```

- [x] **How to Use FaceTime on iPhone and iPad**

```text
GUIDE: How to Use FaceTime on iPhone and iPad | topic: everyday-apps | slug: facetime-guide | keyword: how to use facetime
```

- [x] **How to Make Your Facebook Profile Private**

```text
GUIDE: How to Make Your Facebook Profile Private | topic: everyday-apps | slug: facebook-profile-private | keyword: make facebook private
```

- [x] **How to Send a Voice Message on WhatsApp**

```text
GUIDE: How to Send a Voice Message on WhatsApp | topic: everyday-apps | slug: whatsapp-voice-message | keyword: send voice message whatsapp
```

- [x] **How to Create a Gmail Account**

```text
GUIDE: How to Create a Gmail Account | topic: everyday-apps | slug: create-gmail-account | keyword: create gmail account
```

- [x] **How to Stop Spam Emails in Gmail**

```text
GUIDE: How to Stop Spam Emails in Gmail | topic: everyday-apps | slug: stop-spam-gmail | keyword: stop spam emails gmail
```

- [x] **How to Back Up Your WhatsApp Chats**

```text
GUIDE: How to Back Up Your WhatsApp Chats | topic: everyday-apps | slug: backup-whatsapp-chats | keyword: backup whatsapp
```

- [x] **How to Use Google Maps for Directions**

```text
GUIDE: How to Use Google Maps for Directions | topic: everyday-apps | slug: google-maps-directions | keyword: how to use google maps
```

- [x] **How to Use Google Photos to Store and Share Pictures**

```text
GUIDE: How to Use Google Photos to Store and Share Pictures | topic: everyday-apps | slug: google-photos-guide | keyword: how to use google photos
```

- [x] **How to Use YouTube: A Beginner's Guide**

```text
GUIDE: How to Use YouTube: A Beginner's Guide | topic: everyday-apps | slug: youtube-beginners-guide | keyword: how to use youtube
```

## Home Internet (`home-internet`)

- [x] **How to Change Your Wi-Fi Password**

```text
GUIDE: How to Change Your Wi-Fi Password | topic: home-internet | slug: change-wifi-password | keyword: change wifi password
```

- [x] **How to Connect a Wireless Printer to Wi-Fi**

```text
GUIDE: How to Connect a Wireless Printer to Wi-Fi | topic: home-internet | slug: connect-wireless-printer-wifi | keyword: connect printer to wifi
```

- [x] **How to Set Up a Smart TV for the First Time**

```text
GUIDE: How to Set Up a Smart TV for the First Time | topic: home-internet | slug: setup-smart-tv | keyword: set up smart tv
```

- [x] **How to Show Your Phone Screen on Your TV**

```text
GUIDE: How to Show Your Phone Screen on Your TV | topic: home-internet | slug: cast-phone-to-tv | keyword: mirror phone to tv
```

- [x] **Mesh Wi-Fi vs Wi-Fi Extender: Which Do You Need?**

```text
GUIDE: Mesh Wi-Fi vs Wi-Fi Extender: Which Do You Need? | topic: home-internet | slug: mesh-wifi-vs-extender | keyword: mesh wifi vs extender
```

- [x] **How to Cut the Cord: Switching from Cable to Streaming**

```text
GUIDE: How to Cut the Cord: Switching from Cable to Streaming | topic: home-internet | slug: cancel-cable-switch-streaming | keyword: cut the cord streaming
```

- [x] **How to Set Up an Amazon Echo (Alexa)**

```text
GUIDE: How to Set Up an Amazon Echo (Alexa) | topic: home-internet | slug: setup-amazon-echo-alexa | keyword: set up alexa
```

- [x] **How to Find Your Wi-Fi Password on Your Phone or Computer**

```text
GUIDE: How to Find Your Wi-Fi Password on Your Phone or Computer | topic: home-internet | slug: find-wifi-password | keyword: find wifi password
```

- [x] **How to Secure Your Home Wi-Fi Network**

```text
GUIDE: How to Secure Your Home Wi-Fi Network | topic: home-internet | slug: secure-home-wifi | keyword: secure home wifi
```

- [x] **How to Watch Free TV: Antennas and Free Streaming Apps**

```text
GUIDE: How to Watch Free TV: Antennas and Free Streaming Apps | topic: home-internet | slug: watch-free-tv | keyword: watch tv for free
```
