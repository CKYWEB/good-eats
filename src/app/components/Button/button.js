import styles from "./button.module.scss";

export default function Button(props) {
    const {loading, className, styleType="primary", ...rest } = props;
    const buttonStyle = `btn-${styleType}`;

    return (
      <button
        type="button"
        disabled={loading}
        className={`btn ${styles[buttonStyle]} ${className}`}
        {...rest}
      >
        <span
          className={`spinner-border spinner-border-sm me-2 ${loading ? "" : "visually-hidden"}`}
          role="status" 
        />
        <span>
          {props.children}
        </span>
      </button>
    );
}