import IButton from "./button.props";

const Button = ({ classname, text }: IButton) => {
  return <button className={`cursor-pointer ${classname}`}>{text}</button>;
};

export default Button;
