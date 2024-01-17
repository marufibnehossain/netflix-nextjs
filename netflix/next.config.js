/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add a rule for video files
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|vtt|mkv)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'static/videos/', // or any other desired output path
                publicPath: '/_next/static/videos/', // Adjust based on your project structure
              },
            },
          ],
        });
    
        // This is to prevent webpack from complaining about using a server-only module on the client
        if (!isServer) {
          config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
          };
        }
    
        return config;
      },
};
  
  module.exports = nextConfig;
  