import styles from "./button.module.scss";

export default function Button(props) {
    const {loading, className, onClick, type="primary"} = props;
    const buttonStyle = `btn-${type}`;

    return (
      <button
        className={`btn ${styles[buttonStyle]} ${className}`}
        type="button"
        onClick={onClick}
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