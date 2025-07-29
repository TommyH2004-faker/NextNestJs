// src/app/layout.tsx
import "./globals.css";
import "./antd-reset.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "NextJS + Ant Design App",
    description: "Demo app with NextJS and Ant Design",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.variable}>
        <AntdRegistry>{children}</AntdRegistry>
        </body>
        </html>
    );
}
