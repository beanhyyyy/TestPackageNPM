import React from "react";

export interface ButtonProps {
  label: string;
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  if (props.primary) return <>"123"</>;
  return <button>{props.label}</button>;
};

export default Button;
