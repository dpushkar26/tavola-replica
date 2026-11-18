'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface SheetContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextType>({
  open: false,
  setOpen: () => {},
});

export function Sheet({
  open: controlledOpen,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledOpen(value);
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
}

export function SheetTrigger({
  asChild,
  children,
  className,
  onClick,
  ...props
}: SheetTriggerProps) {
  const { setOpen } = React.useContext(SheetContext);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        (children as any).props?.onClick?.(e);
        onClick?.(e as any);
        setOpen(true);
      },
    });
  }

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        setOpen(true);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function SheetContent({
  side = 'right',
  className,
  children,
}: {
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  children: React.ReactNode;
}) {
  const { open, setOpen } = React.useContext(SheetContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || !mounted) return null;

  const content = (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop (Darkened blur overlay covering the entire viewport) */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={() => setOpen(false)}
      />

      {/* Sheet Panel (Full height, high z-index, escaping parent stacking contexts via portal) */}
      <div
        className={cn(
          'relative z-[101] h-[100dvh] w-[90vw] max-w-[390px] bg-[#FAF7EE] p-5 sm:p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between border-l border-[#0B3B24]/10 overflow-hidden',
          side === 'right' && 'animate-in slide-in-from-right duration-250',
          side === 'left' && 'animate-in slide-in-from-left duration-250',
          className
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-stone-600 hover:bg-stone-200/60 active:bg-stone-200 transition-colors cursor-pointer touch-manipulation"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5 text-[#0B3B24]" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
