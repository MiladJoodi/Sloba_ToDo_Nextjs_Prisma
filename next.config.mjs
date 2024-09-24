/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.squarespace-cdn.com",
                port: "",
                pathname: "/content/**"
            },
            {
                protocol: "https",
                hostname: "www.thecocktaildb.com",
                port: "",
                pathname: "/images/**"
            }
        ]
    }
};

export default nextConfig;
