import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugiin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugiin({ API_URL: "http://localhost:5555" })],
});
