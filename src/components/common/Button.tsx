
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', children, className = '', href, isExternal = false, ...props }, ref) => {
    
    const baseStyles = "rounded-full font-bold transition-all duration-300";
    
    const variantStyles = {
      default: "bg-[#e4ff1a] hover:bg-[#eeff70] text-black hover:shadow-[0_0_25px_5px_rgba(228,255,26,0.4)]",
      outline: "bg-transparent border-2 border-[#e4ff1a] text-[#e4ff1a] hover:bg-[#e4ff1a]/10"
    };
    
    const sizeStyles = {
      sm: "px-6 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-12 py-6 text-xl"
    };
    
    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    
    // If href is provided, render as an anchor tag
    if (href) {
      return (
        <a 
          href={href} 
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    
    // Default behavior - scroll to booking section unless specified otherwise
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.onClick) {
        props.onClick(e);
      } else {
        // Scroll to booking section smoothly
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return (
      <button 
        ref={ref}
        className={combinedClasses}
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
