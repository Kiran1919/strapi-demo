/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:"192.168.2.47"
            }
        ]
    },
    env:{
        API_TOKEN:"2e9a5acc793d28aae57b885d1c0079e535b8343b1c4467f7d7516d59986a46c8657ef35296f58007e799a8f06549f1498f3aff6767b0c36b65101cc83db0fdeeead355d81708b12c472bf1ddee414ec07f570e664e5c222492ad12fb23af4f16c7bb56e8fad50891599b385a48b6769c7c9ac8bb2b2206dc13bfc07a25efe046"
    }
};

export default nextConfig;
