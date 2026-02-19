import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Bajpai | Product & Technology Consultant",
  description: "I help early-stage startups design the right product and choose the right technology to scale faster. Expert in product strategy, MVP planning, and tech stack selection.",
  keywords: ["product consultant", "technology consultant", "startup advisor", "MVP strategy", "tech stack selection", "product roadmap"],
  openGraph: {
    title: "Abhishek Bajpai | Product & Technology Consultant",
    description: "Helping founders turn ideas into scalable products with the right tech stack.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Bajpai | Product & Technology Consultant",
    description: "Helping founders turn ideas into scalable products with the right tech stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
