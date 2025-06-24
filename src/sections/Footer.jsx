const Footer = () => {
  return (
    <section
      className="c-space pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center gap-5 flex-wrap">
      <div className="text-[#62646C] flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="Github" className="w-1/2 h-1/2"/>
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="Github" className="w-1/2 h-1/2"/>
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="Github" className="w-1/2 h-1/2"/>
        </div>
      </div>
      <p className="text-[#62646C]">© 2025 Oleksandr All rights reserved</p>
    </section>
  )
}
export default Footer
