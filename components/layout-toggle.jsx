'use client';

import { Button } from '@/components/ui/button';
import { LayoutGrid, LayoutList } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LayoutToggle({ showDetails, onToggle }) {
  return (
    <div className="fixed top-20 right-4 z-50 lg:hidden">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg ring-2 ring-background"
            onClick={onToggle}
          >
            {showDetails ? (
              <LayoutGrid className="h-4 w-4" />
            ) : (
              <LayoutList className="h-4 w-4" />
            )}
            <span className="sr-only text-sm">
              {showDetails ? 'Hide details' : 'Show details'}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-background/95 backdrop-blur-sm text-sm">
          <p>{showDetails ? 'Hide details' : 'Show details'}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}