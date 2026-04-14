import "./empty-state.style.css";

const TYPE_CONFIG = {
  success: {
    className: "success",
    icon: "✅",
  },
  error: {
    className: "error",
    icon: "❌",
  },
  warning: {
    className: "warning",
    icon: "⚠️",
  },
  info: {
    className: "info",
    icon: "ℹ️",
  },
};

export default function EmptyState({ msg, type = "info" }) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.info;

  return (
    <div
      className={`container-msg container-msg-${config.className}`}
      role="status"
    >
      <p className={`msg msg-${config.className}`}>
        <span className="msg-icon">{config.icon}</span>
        {msg}
      </p>
    </div>
  );
}