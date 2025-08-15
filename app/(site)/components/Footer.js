export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
