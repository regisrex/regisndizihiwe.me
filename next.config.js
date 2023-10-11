const withMdx = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [require("remark-prism")],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions : ["js", "jsx", "ts", "tsx", "mdx"],
    images : {
        domains : ["github.com"]
    }
}

module.exports = withMdx(nextConfig);
