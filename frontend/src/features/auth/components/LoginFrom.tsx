"use client";

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuthModal } from "../store/useAuthModal.store";

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const open = useAuthModal((s) => s.open);
  const close = useAuthModal((s) => s.close);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login(
      { email, password },
      {
        onSuccess: () => close(),
      },
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
        <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-xs text-gray-500 hover:text-black transition"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          disabled={isPending}
          className="w-full rounded-lg bg-black text-white py-2.5 text-sm font-medium hover:bg-gray-900 active:scale-[0.99] transition disabled:opacity-50"
        >
          {isPending ? "Signing in..." : "Sign in"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* Secondary action */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => open("register")}
            className="text-black font-medium hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}
