import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AuthAPI } from "../../api/auth";

type LoginFormData = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setServerError("");
    try {
      const res = await AuthAPI.login(data.username, data.password);
      localStorage.setItem("token", res.token);
      navigate("/list");
    } catch {
      setServerError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Logowanie</h2>

        {/* login */}
        <input
          type="text"
          placeholder="Login"
          {...register("username", {
            required: "Login jest wymagany",
            minLength: { value: 3, message: "Minimum 3 znaki" },
          })}
          className="border p-2 rounded w-full mb-2"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>
        )}

        {/* hasło */}
        <input
          type="password"
          placeholder="Hasło"
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: { value: 4, message: "Minimum 4 znaki" },
          })}
          className="border p-2 rounded w-full mb-2"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        {/* błędy z backendu */}
        {serverError && (
          <p className="text-red-500 text-sm mb-2">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition disabled:opacity-60"
        >
          {isSubmitting ? "Logowanie..." : "Zaloguj się"}
        </button>
      </form>
    </div>
  );
};
