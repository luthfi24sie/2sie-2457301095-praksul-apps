import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="px-6 md:px-12 pt-12 md:pt-20 pb-8 text-center">
        <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          Pemrograman Framework Lanjutan
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
          Portal Praktikum Susulan
        </h1>
        <p className="text-gray-500 text-base md:text-lg font-medium">
          2SIE &nbsp;|&nbsp; 2457301095 &nbsp;|&nbsp; Luthfi
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Pertemuan 4 Card */}
          <Link
            to="/pertemuan-4"
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-indigo-200 transition-all p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
                Pertemuan 4
              </span>
              <span className="text-gray-300 group-hover:text-indigo-400 transition-colors text-lg">→</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
              Pertemuan 4
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              Data JSON, Search &amp; Filter, Best Practice State, Responsive &amp; Grid Design
            </p>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <span className="text-indigo-600 group-hover:text-indigo-700 text-sm font-semibold transition-colors">
                Masuk →
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default App
