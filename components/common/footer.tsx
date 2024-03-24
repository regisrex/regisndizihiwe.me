export default function Footer() {
    return (
        <div className="border-t border-bluish-200/10 py-3 text-center">
            <p className=" text-bluish-100 opacity-40 "><a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> {new Date().getFullYear()} &copy; R&eacute;gis NDIZIHIWE</p>
            <p className="text-[14px] text-bluish-200/60">Made with ✌️ by @regisrex</p>
            <p className="text-[14px] text-bluish-200/60">Crafted with Next.js and MDX</p>
        </div>
    )
}