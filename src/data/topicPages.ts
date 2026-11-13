import type { TopicSlug } from "./topics";

export interface TopicPage {
  headline: string;
  intro: string[];
  learn: { title: string; text: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

export const topicPages: Record<TopicSlug, TopicPage> = {
  iphone: {
    headline: "Your iPhone and iPad, finally made simple.",
    intro: [
      "Apple devices are wonderful, but they don't come with a manual. Settings hide in menus, updates move buttons around, and the text is often too small to read comfortably.",
      "Our iPhone and iPad guides walk you through everything in plain English, one step at a time, so you can get the most out of the device you already own.",
    ],
    learn: [
      { title: "Make it easier to see", text: "Bigger text, bold fonts, brighter screens and zoom." },
      { title: "Manage storage", text: "Clear space without losing a single photo." },
      { title: "Photos & videos", text: "Take, organize and share your pictures with family." },
      { title: "Stay secure", text: "Passcodes, Face ID and keeping your Apple Account safe." },
    ],
    tips: [
      "Swipe down from the middle of your Home Screen to search for any app or setting.",
      "Can't find a setting? Open Settings and type what you're looking for in the search bar at the top.",
      "Keep your iPhone updated. Go to Settings → General → Software Update.",
    ],
    faqs: [
      { q: "Do these guides work on iPad too?", a: "Yes. iPhone and iPad share the same system, so almost every step works the same way. We point out any differences." },
      { q: "Which iOS version do you cover?", a: "We write for the latest version of iOS and mention older versions when menus are different." },
      { q: "My screen looks a bit different. Why?", a: "Apple changes small details with each update. Look for the same words in bold, or use the search bar in Settings." },
    ],
  },
  android: {
    headline: "Android help for every phone, from Samsung to Pixel.",
    intro: [
      "Android powers phones from Samsung, Google, Motorola and many other brands. That's great for choice, but it also means menus can look a little different from phone to phone.",
      "Our Android guides explain things clearly and point out where Samsung or other brands do it differently, so you're never stuck.",
    ],
    learn: [
      { title: "Free up space", text: "Clean up junk files and old downloads safely." },
      { title: "Make it readable", text: "Larger text, simpler home screens and better contrast." },
      { title: "Apps & the Play Store", text: "Install, update and remove apps with confidence." },
      { title: "Battery life", text: "Simple changes that keep your phone going all day." },
    ],
    tips: [
      "Swipe down from the top of the screen to reach Wi-Fi, flashlight and brightness quickly.",
      "Not sure where a setting is? Open Settings and tap the magnifying glass to search.",
      "Restart your phone once a week to keep it running smoothly.",
    ],
    faqs: [
      { q: "Will these guides work on my Samsung?", a: "Yes. We write for most Android phones and add notes whenever Samsung uses a different menu name." },
      { q: "How do I know which Android version I have?", a: "Open Settings, tap About phone, and look for Android version. On Samsung, tap Software information." },
      { q: "Is the Google Play Store safe?", a: "It's the safest place to get apps. Still, check reviews and the developer name before installing." },
    ],
  },
  windows: {
    headline: "Windows help without the headaches.",
    intro: [
      "Windows runs on more computers than any other system, and it can do a lot. But slow startups, confusing updates and pop-ups can make it feel like hard work.",
      "Our Windows guides cover Windows 11 and Windows 10, with clear steps and safe fixes that anyone can follow.",
    ],
    learn: [
      { title: "Speed things up", text: "Easy, safe fixes for a slow computer." },
      { title: "Updates made easy", text: "What to install, when, and why it matters." },
      { title: "Files & folders", text: "Find, organize and back up your documents and photos." },
      { title: "Stay protected", text: "Use Windows Security to keep viruses away, for free." },
    ],
    tips: [
      "Press the Windows key and start typing to find any program or setting instantly.",
      "Press Ctrl + Z to undo almost anything, including accidentally deleted text.",
      "Restart (not shut down) your PC once a week to clear out problems.",
    ],
    faqs: [
      { q: "Should I upgrade from Windows 10?", a: "Microsoft stopped free security updates for Windows 10 in October 2025. If your PC is eligible, upgrading to Windows 11 is free through Windows Update." },
      { q: "Do I need to buy an antivirus?", a: "For most people, no. Windows Security is built in, free and does a good job when kept up to date." },
      { q: "Which Windows do I have?", a: "Press the Windows key, type 'About your PC' and open it. You'll see the edition and version." },
    ],
  },
  mac: {
    headline: "Get comfortable with your Mac.",
    intro: [
      "Macs are known for being simple, but switching from Windows or learning one for the first time still comes with questions. Where are my files? How do I right-click? What's the Dock?",
      "Our Mac guides answer those questions and more, with clear steps for macOS on MacBook, iMac and Mac mini.",
    ],
    learn: [
      { title: "Mac basics", text: "The Dock, Finder, menus and windows, explained." },
      { title: "Back up your memories", text: "Set up Time Machine and iCloud the easy way." },
      { title: "Work with iPhone", text: "Share photos, messages and calls between your devices." },
      { title: "Keep it fast", text: "Storage, updates and simple maintenance." },
    ],
    tips: [
      "Press Command + Space to open Spotlight and search for anything on your Mac.",
      "To right-click on a trackpad, tap with two fingers at the same time.",
      "Press Command + Q to fully close an app, not just its window.",
    ],
    faqs: [
      { q: "Is it hard to switch from Windows to Mac?", a: "Not at all. Most things work similarly, and a few keyboard shortcuts are all you need to learn. Our guides help you through it." },
      { q: "Do Macs need antivirus?", a: "macOS has strong built-in protection. Keep it updated and only install apps from the App Store or trusted websites." },
      { q: "Which macOS version do I have?", a: "Click the Apple menu in the top-left corner and choose About This Mac." },
    ],
  },
  linux: {
    headline: "Linux, for people who never thought they'd try Linux.",
    intro: [
      "Linux is a free operating system that runs on everything from old laptops to the world's biggest websites. It has a reputation for being complicated, but modern versions like Linux Mint and Ubuntu are friendly and easy to use.",
      "Our Linux guides are written for complete beginners. No command lines unless absolutely needed, and every step explained.",
    ],
    learn: [
      { title: "Revive an old computer", text: "Turn a slow laptop into a fast, useful machine." },
      { title: "Choose a version", text: "Linux Mint, Ubuntu and others, compared simply." },
      { title: "Everyday use", text: "Browsing, email, documents and photos on Linux." },
      { title: "Install apps", text: "Use the Software Manager, as easy as an app store." },
    ],
    tips: [
      "Try Linux from a USB drive first. It runs without changing anything on your computer.",
      "Linux Mint's Software Manager works like an app store. No need to search the web for downloads.",
      "Updates are free forever. Just click the shield icon when it appears.",
    ],
    faqs: [
      { q: "Is Linux really free?", a: "Yes. Linux Mint, Ubuntu and most other versions are completely free, including updates." },
      { q: "Do I need to know programming?", a: "No. Modern Linux works with a mouse and menus, just like Windows or Mac." },
      { q: "Can I use Microsoft Word on Linux?", a: "Linux comes with LibreOffice, which opens Word files. You can also use Microsoft 365 in your web browser." },
    ],
  },
  "scam-safety": {
    headline: "Stay one step ahead of scammers.",
    intro: [
      "Scam texts, fake calls and phishing emails are more convincing than ever, and they target people of every age and background. Falling for one isn't about being careless. Scammers are professionals.",
      "Our scam safety guides teach you the warning signs, what to do in the moment, and how to recover if something goes wrong. Share them with the people you care about.",
    ],
    learn: [
      { title: "Spot fake messages", text: "Texts, emails and social media scams, decoded." },
      { title: "Phone scams", text: "Fake bank, IRS, tech support and grandchild calls." },
      { title: "Protect your accounts", text: "Strong passwords and two-step verification, made easy." },
      { title: "If it happens to you", text: "Clear steps to take right away." },
    ],
    tips: [
      "Never share a code that was sent to your phone. Not with anyone, ever.",
      "If a message creates panic, pause. Call the company using a number you already trust.",
      "No real company or agency asks to be paid in gift cards.",
    ],
    faqs: [
      { q: "Where do I report a scam in the US?", a: "Forward scam texts to 7726 (SPAM) and report fraud to the FTC at ReportFraud.ftc.gov." },
      { q: "I clicked a link. What now?", a: "Don't enter any information. If you already did, change your password right away and call your bank using the number on your card." },
      { q: "Can my bank call me and ask for my PIN?", a: "No. A real bank will never ask for your PIN, full password or a code sent to your phone." },
    ],
  },
  "everyday-apps": {
    headline: "The apps you use every day, explained kindly.",
    intro: [
      "WhatsApp, Zoom, Facebook, email, photo apps: they keep us connected to the people we love. But each one has its own buttons, settings and surprises.",
      "Our everyday app guides show you how to do the things that matter most, like video calls, sharing photos and keeping your privacy, without the confusion.",
    ],
    learn: [
      { title: "Video calls", text: "WhatsApp, FaceTime and Zoom, step by step." },
      { title: "Messaging", text: "Send photos, voice notes and group messages." },
      { title: "Social media", text: "Use Facebook safely and control who sees your posts." },
      { title: "Email", text: "Gmail and Outlook basics, and how to beat spam." },
    ],
    tips: [
      "Use Wi-Fi for video calls when you can. They use a lot of mobile data.",
      "Keep your apps updated for the newest features and security fixes.",
      "Check privacy settings in each app. You decide who sees your information.",
    ],
    faqs: [
      { q: "Are WhatsApp calls really free?", a: "Yes. They use your internet connection instead of phone minutes. On mobile data, they count toward your data plan." },
      { q: "Is it safe to use Facebook?", a: "Yes, with the right settings. Our guides show you how to make your profile private and spot fake friend requests." },
      { q: "Can I use these apps on my computer?", a: "Most of them, including WhatsApp, Zoom and Facebook, work on computers through an app or the web browser." },
    ],
  },
  "home-internet": {
    headline: "Better Wi-Fi and a smarter home, without calling for help.",
    intro: [
      "Slow Wi-Fi, a printer that won't connect, a smart TV that keeps asking for passwords. Home tech problems can be maddening, and calling for support can take forever.",
      "Our home internet guides help you fix the most common problems yourself, usually in a few minutes and with no special tools.",
    ],
    learn: [
      { title: "Faster Wi-Fi", text: "Simple fixes for slow or dropping internet." },
      { title: "Smart TVs & streaming", text: "Set up Netflix, YouTube and more on your TV." },
      { title: "Printers", text: "Connect and print from your phone or computer." },
      { title: "Home network safety", text: "Protect your Wi-Fi with a strong password." },
    ],
    tips: [
      "When in doubt, restart the router: unplug it for 30 seconds, then plug it back in.",
      "Keep your router in the middle of your home and up high, not in a cabinet.",
      "Write your Wi-Fi name and password on a card and keep it near the router.",
    ],
    faqs: [
      { q: "How fast should my internet be?", a: "Run a free test at fast.com and compare it with the speed on your bill. If it's much lower near the router, call your provider." },
      { q: "Do I need a new router?", a: "If yours is more than 5 years old, a newer one can make a big difference. Many providers replace them for free." },
      { q: "What's the difference between Wi-Fi and internet?", a: "The internet comes into your home through a cable. Wi-Fi is the wireless signal that shares it with your devices around the house." },
    ],
  },
};
