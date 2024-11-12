import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Slokas for Children',
  description: 'Learn timeless Sanskrit verses through interactive learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}