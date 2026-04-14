import "./button.style.css"

export function Button({children,...rest}) {
  return <button className="btn-add-item" {...rest}>{children}</button>;
}
