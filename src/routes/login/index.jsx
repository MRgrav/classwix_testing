import { createSignal } from "solid-js";

const LoginPage = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login attempt", { email: email(), password: password() });
  };

  return (
    <div class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-t from-[#193ca5]/70 to-white/10">
      <div class="bg-white w-full max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden">
        <div class="p-8 space-y-6">
          <div class="flex items-center justify-center">
            <img src="/color-logo-wide-notm.png" alt="classwix logo" class="h-12" />
          </div>
          <h2 class="text-center text-3xl font-bold text-[#2b60ff]">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b60ff]"
                placeholder="Enter your password"
              />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  class="h-4 w-4 text-[#2b60ff] focus:ring-[#2b60ff] border-gray-300 rounded"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" class="text-sm text-[#e46030]">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              class="w-full py-3 rounded-md bg-[#2b60ff] text-white font-semibold shadow-md transition-colors duration-300 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-600"
            >
              Sign In
            </button>
          </form>

          <div class="text-center">
            <p class="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" class="font-medium text-[#e46030]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;