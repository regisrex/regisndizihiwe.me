const UnoCSS = require('@unocss/webpack').default
const withMdx = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [require("remark-prism")],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    images: {
        domains: ["github.com"]
    },
    webpack: (config) => {
        config.cache = false
        config.plugins.push(
            UnoCSS(),
        )
        return config
    },
}

module.exports = withMdx(nextConfig);
