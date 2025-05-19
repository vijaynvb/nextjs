type ContainerProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Container({ children, className = '' }: ContainerProps) {
    return (
      <div className={`max-w-3xl mx-auto px-4 ${className}`}>
        {children}
      </div>
    );
  }
  