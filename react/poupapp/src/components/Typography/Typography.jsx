import styles from "./Typography.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  p: "p",
};

export const Typography = ({ children, variant }) => {

  const Component = TAGS[variant] || "p";
  const variantClassName = styles[variant] || styles.p

  return (
    <>
      <Component className={variantClassName}>{children}</Component>
    </>
  );
};
