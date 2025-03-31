
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
    
    const baseStyles = "rounded-full font-bold transition-all duration-300 relative overflow-hidden";
    
    const variantStyles = {
      default: "bg-[#e4ff1a] hover:bg-[#eeff70] text-black group",
      outline: "bg-transparent border-2 border-[#e4ff1a] text-[#e4ff1a] hover:bg-[#e4ff1a]/10 group"
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
          <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute inset-0 w-full h-full bg-[#e4ff1a] blur-md"></span>
          </span>
          <span className="relative z-10 inline-flex items-center">
            {children}
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
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
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 w-full h-full bg-[#e4ff1a] blur-md"></span>
        </span>
        <span className="relative z-10 inline-flex items-center">
          {children}
          <span className="ml-1 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">→</span>
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
