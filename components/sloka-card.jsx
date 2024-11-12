'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import LayoutToggle from './layout-toggle';
import SlokaDetails from './sloka-details';

export default function SlokaCard({ sloka, language, isPreview = false, variant = 'default' }) {
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  if (variant === 'compact') {
    return (
      <Card className="relative overflow-hidden transition-all duration-300 hover:bg-muted/50 p-3 hover:shadow-sm">
        <h3 className="text-sm font-medium text-primary mb-1">
          {sloka.title[language]}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {sloka.text[language]}
        </p>
      </Card>
    );
  }

  if (variant === 'full') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-7xl mx-auto">
        <div className="lg:contents">
          <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 h-full lg:min-h-[70vh]">
            <div 
              className="absolute inset-0 pointer-events-none bg-repeat opacity-5"                    
              style={{
                backgroundImage: 'url("/assets/pattern.jpg")',
                backgroundSize: '64px 64px'
              }}
            />

            <div className="relative h-full flex flex-col justify-between">
              <div className="space-y-4 text-center flex-1">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-primary">
                    {sloka.title[language]}
                  </h3>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden">
                    <LayoutToggle 
                      showDetails={showMobileDetails}
                      onToggle={() => setShowMobileDetails(!showMobileDetails)}
                    />
                  </div>
                </div>

                <div className="relative bg-white/30 dark:bg-white/5 px-2 py-6 rounded-lg backdrop-blur-md shadow-inner flex-1">
                  <p className="text-md font-medium leading-relaxed whitespace-pre-line">
                    {sloka.text[language]}
                  </p>
                </div>
              </div>

              {/* Image aligned at the bottom */}
              {sloka.deityImage && (
                <div className="flex justify-center mt-8">
                  <div className="relative w-48 h-48 rounded-full">
                    <Image
                      src={sloka.deityImage}
                      alt={`${sloka.title[language]} Deity`}
                      fill
                      className="object-cover dark:brightness-90 dark:contrast-125"
                    />
                  </div>
                </div>
              )}

              {/* Mobile Details */}
              {showMobileDetails && (
                <div className="lg:hidden mt-6">
                  <SlokaDetails 
                    sloka={sloka} 
                    language={language}
                    isMobile={true}
                  />
                </div>
              )}
            </div>
          </Card>

          {/* Desktop Details */}
          <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 hidden lg:block lg:sticky lg:top-24 h-full lg:min-h-[70vh]">
            <div 
              className="absolute inset-0 pointer-events-none bg-repeat opacity-5"                    
              style={{
                backgroundImage: 'url("/assets/pattern.jpg")',
                backgroundSize: '64px 64px'
              }}
            />

            <div className="relative h-full flex flex-col">
              <SlokaDetails 
                sloka={sloka} 
                language={language}
                isMobile={false}
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}