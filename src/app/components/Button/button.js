import styles from "./button.module.scss";

export default function Button(props) {
    const {loading, className, onClick, type="primary"} = props;
    const buttonStyle = `btn-${type}`;

    return (
      <button
        className={`mb-3 btn ${styles[buttonStyle]} w-100 ${className}`}
        type="button"
        onClick={onClick}
      >
        <span
          className={`spinner-border spinner-border-sm me-2 ${loading ? "" : "visually-hidden"}`}
          role="status" 
        />
        <span>
          Continue
        </span>
      </button>
    );
}