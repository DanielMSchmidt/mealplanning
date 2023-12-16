import * as React from "react";

export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const className = props.className;
  const defaultClassNames =
    "bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm";
  const classNameToUse = className
    ? defaultClassNames + " " + className
    : defaultClassNames;
  return (
    <button {...props} className={classNameToUse}>
      {children}
    </button>
  );
};
