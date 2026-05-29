export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg font-semibold text-[#111]">CMG</p>
        <p className="text-xs text-[#6b7280]">
          © {new Date().getFullYear()} Chandramauli Govind · Copenhagen, Denmark
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/cmgovind/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6b7280] hover:text-[#111] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:cm.govind@gmail.com"
            className="text-xs text-[#6b7280] hover:text-[#111] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
