import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.gromatic.co"),
  title: { default: "Gromatic — Growth on Autopilot", template: "%s | Gromatic" },
  description: "Gromatic installs simple, automated growth systems for local businesses — capture more leads, follow up automatically, and convert faster.",
  openGraph: {
    title: "Gromatic — Growth on Autopilot",
    description: "Automation-powered growth systems for local businesses.",
    url: "https://www.gromatic.co",
    siteName: "Gromatic",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Gromatic — Growth on Autopilot" }],
    locale: "en_AU",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Gromatic — Growth on Autopilot", description: "Automation-powered growth systems for local businesses.", images: ["/og-cover.png"] },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
