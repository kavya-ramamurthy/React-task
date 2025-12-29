import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    alert(`Account created successfully!\n\nWelcome ${data.name}`);
    console.log("Register Data:", data);
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>

      {/* Name */}
      <div>
        <label>Name</label>
        <input
          {...register("name", {
            required: "Name is required"
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/,
              message: "Enter a valid email"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: value =>
              value === password || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </div>

      <button disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}

export default RegisterForm;
