import { LoginFormData, loginSchema, SignupFormData, signupSchema } from "@/src/lib/authSchema";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useLoginMutation, useSignupMutation } from "@/src/redux/apis/authApi";
import { setUser } from "@/src/redux/features/authSlice";
import { useRouter } from "next/navigation";

type AuthTab = "signup" | "login";

function AuthCard({ tab, onTabChange }: { tab: AuthTab; onTabChange: (tab: AuthTab) => void }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [signup, { isLoading }] =
    useSignupMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();


  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  useEffect(() => {
    loginForm.reset();
    signupForm.reset();
  }, [tab]);

  const onLogin = async (data: LoginFormData) => {
    try {
      const response = await login({ email: data.email, password: data.password }).unwrap();
      dispatch(setUser(response.user));
      router.push("/dashboard");
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  const onSignup = async (data: SignupFormData) => {
    try {
      const response = await signup({
        username: data.fullName,
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setUser(response.user));
      router.push("/dashboard");
    } catch (e) {
      console.error("Signup error:", e);
    }
  };

  return (
    <section id="auth" className="border-t border-hairline">
      <div className="mx-auto max-w-md px-6 py-20">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-teal">
          Start here
        </p>
        <h2 className="mt-4 text-center font-display text-3xl text-ink">
          Your page is two minutes away.
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-10 rounded-2xl border border-hairline bg-white p-8 shadow-sm">
              <div className="flex rounded-full bg-paper p-1">
                <button
                  type="button"
                  onClick={() => onTabChange("signup")}
                  className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${tab === "signup" ? "bg-amber text-ink" : "text-ink-soft"
                    }`}
                >
                  Sign up
                </button>
                <button
                  type="button"
                  onClick={() => onTabChange("login")}
                  className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${tab === "login" ? "bg-amber text-ink" : "text-ink-soft"
                    }`}
                >
                  Log in
                </button>
              </div>

              <form
                onSubmit={
                  tab === "signup"
                    ? signupForm.handleSubmit(onSignup)
                    : loginForm.handleSubmit(onLogin)
                }
                className="mt-6 space-y-4"
              >

                {tab === "signup" && (
                  <>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                        Full name
                      </label>

                      <input
                        {...signupForm.register("fullName")}
                        placeholder="Jasmine Taylor"
                        className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                      />

                      <p className="mt-1 text-xs text-red-500">
                        {signupForm.formState.errors.fullName?.message}
                      </p>
                    </div>
                  </>
                )}

                <div>
                  <label className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...(tab === "signup"
                      ? signupForm.register("email")
                      : loginForm.register("email"))}
                    className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                  />

                  <p className="mt-1 text-xs text-red-500">
                    {tab === "signup"
                      ? signupForm.formState.errors.email?.message
                      : loginForm.formState.errors.email?.message}
                  </p>
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    {...(tab === "signup"
                      ? signupForm.register("password")
                      : loginForm.register("password"))}
                    className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                  />

                  <p className="mt-1 text-xs text-red-500">
                    {tab === "signup"
                      ? signupForm.formState.errors.password?.message
                      : loginForm.formState.errors.password?.message}
                  </p>
                </div>

                {tab === "signup" && (
                  <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      placeholder="••••••••"
                      {...signupForm.register("confirmPassword")}
                      className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                    />

                    <p className="mt-1 text-xs text-red-500">
                      {signupForm.formState.errors.confirmPassword?.message}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber py-3 font-semibold text-ink transition hover:brightness-95"
                >
                  {tab === "signup" ? "Create my page" : "Log in"}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-ink-soft">
                Front-end preview — connect your backend to activate.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AuthCard;