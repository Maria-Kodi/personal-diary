export default function Footer() {
    return (
      <footer className="footer footer-center p-6 bg-[#AECBA4] text-base-content mt-10">
  
        <div>
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Personal Diary App — All rights reserved
          </p>
        </div>
  
      </footer>
    );
  }