export default function Hero() {
  return (
    <section className="container-m3 bg-figma-linear">
      <div className="grid-m3 min-h-screen items-center py-20">
        <div className="col-span-m3-12 md:col-span-m3-6">
          <h1 className="text-5xl font-bold text-primary-800 font-primary mb-6">
            Welcome to Your App
          </h1>
          <p className="text-xl text-base-text mb-8">
            Build amazing experiences with Next.js and Tailwind CSS
          </p>
          <button className="bg-primary-600 text-base-text-on-color px-8 py-3 rounded-lg font-primary font-semibold hover:bg-primary-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
