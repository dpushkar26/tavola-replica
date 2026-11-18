'use client';

import * as React from 'react';
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setOpen(false)}
      />

      {/* Sheet Panel */}
      <div
        className={cn(
          'relative z-50 h-full w-[88vw] max-w-[360px] bg-[#FAF7EE] p-6 shadow-2xl transition-transform duration-300 ease-out',
          side === 'right' && 'animate-in slide-in-from-right',
          side === 'left' && 'animate-in slide-in-from-left',
          className
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-500 hover:bg-black/5 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
}
