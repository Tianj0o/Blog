import './fonts/LXGWWenKaiGBScreen/result.css'
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`antialiased flex flex-col items-center font-lxgw`}
      >
        {children}
      </body>
    </html>
  );
}
