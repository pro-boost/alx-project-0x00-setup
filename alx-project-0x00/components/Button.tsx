import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return <div className={style}>{title}</div>;
};
export default Button;
