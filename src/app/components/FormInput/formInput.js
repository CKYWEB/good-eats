export default function FormInput (props) {
    const { errors, register, label, ...rest } = props;
    const name = register.name;

    return (
      <>
        <label
          htmlFor={name}
          className="form-label fw-bold"
        >
          {label}
        </label>
        <input
          id={name}
          className={`form-control ${errors[name] ? "is-invalid": ""}`}
          aria-invalid={errors[name] ? "true" : "false"}
          {...register}
          {...rest}
        />
        {errors[name] && (
        <div
          role="alert"
          className="invalid-feedback"
        >
          {errors[name].message}
        </div>)}
      </>
    );
}