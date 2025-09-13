export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">AWS Fullstack</h1>
      <div className="space-x-4">
        <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
        <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
      </div>
    </nav>
  );
}
