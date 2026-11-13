export const topics = [
  { slug: "iphone", name: "iPhone & iPad", desc: "iOS settings, storage, photos, bigger text and more.", color: "var(--sky)", icon: "phone" },
  { slug: "android", name: "Android", desc: "Samsung, Pixel, Motorola and more, made simple.", color: "var(--mint)", icon: "android" },
  { slug: "windows", name: "Windows", desc: "Windows 10 & 11 basics, updates and slow PCs.", color: "var(--sun)", icon: "windows" },
  { slug: "mac", name: "Mac", desc: "macOS made easy: Finder, settings, backups and more.", color: "var(--lilac)", icon: "laptop" },
  { slug: "linux", name: "Linux", desc: "Ubuntu, Mint and friends, explained without the jargon.", color: "var(--mint)", icon: "terminal" },
  { slug: "scam-safety", name: "Scam Safety", desc: "Spot fake texts, calls and emails before they fool you.", color: "var(--accent-soft)", icon: "shield" },
  { slug: "everyday-apps", name: "Everyday Apps", desc: "WhatsApp, Zoom, Facebook, email and photos.", color: "var(--sky)", icon: "chat" },
  { slug: "home-internet", name: "Home Internet", desc: "Wi-Fi, smart TVs, printers and streaming.", color: "var(--sun)", icon: "wifi" },
] as const;

export type TopicSlug = (typeof topics)[number]["slug"];

export const topicSlugs = topics.map((t) => t.slug) as [TopicSlug, ...TopicSlug[]];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug)!;

export const icons: Record<string, string> = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  android: '<rect x="5" y="9" width="14" height="11" rx="2"/><path d="M8 9a4 4 0 0 1 8 0M9 13h.01M15 13h.01M7 5l1.5 2M17 5l-1.5 2"/>',
  windows: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M12 4v13M3 10.5h18"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
};
