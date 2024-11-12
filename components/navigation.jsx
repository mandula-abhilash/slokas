'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useLanguage } from './language-provider';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, languages } = useLanguage();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Home page link */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/pattern.jpg" 
              alt="Shlokas Logo"
              width={40} 
              height={40}
              className="rounded-full" 
            />
            <h1 className="text-xl font-semibold">Shlokas</h1>
          </Link>

          <div className="flex items-center gap-2">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-9 h-9 hover:bg-muted/50 hover:text-foreground"
                >
                  <Languages className="h-4 w-4" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.value}
                    onClick={() => setLanguage(lang.value)}
                    className="hover:bg-muted/50 hover:text-foreground"
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 hover:bg-muted/50 hover:text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* About Us Button */}
            <Link href="/about-us">
              <Button 
                variant="ghost" 
                className="hover:bg-muted/50 hover:text-foreground"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
