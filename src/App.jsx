function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-white px-4">
      {/* Header */}
      <header className="py-24">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Toronto Top Training</h1>
        <p className="text-xl max-w-xl mx-auto text-gray-700 mb-6">
          Personal training. Online programs. Trainer consulting.
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-90 transition">
          Get Started
        </button>
      </header>

      {/* Services Section */}
      <section className="w-full max-w-5xl py-16">
        <div className="grid gap-12 md:grid-cols-3 text-left px-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Training</h2>
            <p className="text-gray-600">
              1-on-1 sessions in-person or virtual. Customized, goal-driven, and always focused on progress.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Online Programming</h2>
            <p className="text-gray-600">
              Structured plans with workouts, nutrition, and supplementation for independent clients.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Trainer Consulting</h2>
            <p className="text-gray-600">
              Helping personal trainers get better results and convert more leads.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-sm text-gray-500">
        &copy; 2025 Toronto Top Training
      </footer>
    </main>
  );
}

export default App;
