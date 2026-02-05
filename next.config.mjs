const CONFIG = {
  protocol: "http",
  hostname: "localhost",
  port: "1337",
}

const strapiUrlEnv = process.env.STRAPI_URL;
let imageProtocol = CONFIG.protocol;
let imageHostname = CONFIG.hostname;
let imagePort = CONFIG.port;
if (strapiUrlEnv) {
  try {
    const parsed = new URL(strapiUrlEnv);
    imageProtocol = parsed.protocol.replace(":", "") || imageProtocol;
    imageHostname = parsed.hostname || imageHostname;
    imagePort = parsed.port || imagePort;
  } catch {
    // If STRAPI_URL is invalid, fall back to defaults.
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: imageProtocol,
        hostname: imageHostname,
        port: imagePort,
        pathname: "/**",
      },
    ],
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
  },
};

export default nextConfig;
