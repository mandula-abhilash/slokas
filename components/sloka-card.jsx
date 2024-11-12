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
        <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 h-fit">
          <div 
            className="absolute inset-0 pointer-events-none bg-repeat opacity-5"                    
            style={{
              backgroundImage: 'url("/pattern.jpg")',
              backgroundSize: '64px 64px'
            }}
          />

          <div className="relative space-y-6">
            <div className="space-y-4 text-center">
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

              <div className="relative bg-white/30 dark:bg-white/20 p-6 rounded-lg backdrop-blur-md shadow-inner">
                <p className="text-lg font-medium leading-relaxed whitespace-pre-line">
                  {sloka.text[language]}
                </p>
              </div>

              {sloka.deityImage && (
                <div className="flex justify-center mt-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-xl">
                    <Image
                      src={`https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/612dc8120ab9cb0abc81b689.jpeg?etag=ef104f05a0e865f18af7cc651a73d93f`}
                      alt={`${sloka.title[language]} Deity`}
                      fill
                      className="object-cover dark:brightness-90 dark:contrast-125"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Details */}
            {showMobileDetails && (
              <div className="lg:hidden">
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
        <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 hidden lg:block lg:sticky lg:top-24 h-fit">
          <div 
            className="absolute inset-0 pointer-events-none bg-repeat opacity-5"                    
            style={{
              backgroundImage: 'url("/pattern.jpg")',
              backgroundSize: '64px 64px'
            }}
          />

          <div className="relative space-y-8">
            <SlokaDetails 
              sloka={sloka} 
              language={language}
              isMobile={false}
            />
          </div>
        </Card>
      </div>
    );
  }

  return null;
}