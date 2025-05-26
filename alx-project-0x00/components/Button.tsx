import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return <div className={styles}>{title}</div>;
};
export default Button;
