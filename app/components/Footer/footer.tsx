export default function Footer() {
  return (
    <footer className="bg-base-black text-base-text-on-color">
      <div className="container-m3 py-12">
        <div className="grid-m3">
          <div className="col-span-m3-12 md:col-span-m3-4">
            <h3 className="text-xl font-bold font-primary mb-4">Your Brand</h3>
            <p className="text-sm opacity-80">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="col-span-m3-6 md:col-span-m3-2">
            <h4 className="font-semibold font-primary mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Features</a></li>
              <li><a href="#" className="hover:opacity-100">Pricing</a></li>
              <li><a href="#" className="hover:opacity-100">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-m3-6 md:col-span-m3-2">
            <h4 className="font-semibold font-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">About</a></li>
              <li><a href="#" className="hover:opacity-100">Blog</a></li>
              <li><a href="#" className="hover:opacity-100">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-span-m3-12 md:col-span-m3-4">
            <h4 className="font-semibold font-primary mb-4">Stay Updated</h4>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded bg-base-white text-base-text"
            />
          </div>
        </div>
        
        <div className="border-t border-base-border mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
