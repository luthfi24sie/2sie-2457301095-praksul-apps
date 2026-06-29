import { useState } from "react"
import { Link } from "react-router-dom"
import FrameworkList from "./FrameworkList"
import FrameworkListSearchFilter from "./FrameworkListSearchFilter"
import ResponsiveDesign from "./ResponsiveDesign"

const sections = [
  { id: "json-list", number: "01", title: "Data JSON (List)", color: "emerald" },
  { id: "search-filter", number: "02", title: "Search & Filter", color: "blue" },
  { id: "best-state", number: "03", title: "Best Practice State", color: "amber" },
  { id: "responsive", number: "04", title: "Responsive & Grid", color: "purple" },
]

function Pertemuan4() {
  const [activeSection, setActiveSection] = useState("json-list")

  const handleNavClick = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const colorMap = {
    emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
    blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
    amber: { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-100 text-amber-700" },
    purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 mb-4">
            <span>←</span> Kembali ke Portal
          </Link>
          <h2 className="font-bold text-gray-800 text-lg leading-tight">Pertemuan 4</h2>
          <p className="text-xs text-gray-400 mt-1">Praktikum Susulan</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-1">
          {sections.map((sec) => {
            const c = colorMap[sec.color]
            const isActive = activeSection === sec.id
            return (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                  isActive ? `${c.light} ${c.text} font-semibold` : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${isActive ? `${c.bg} text-white` : "bg-gray-100 text-gray-400"}`}>
                  {sec.number}
                </span>
                <span className="text-sm">{sec.title}</span>
              </button>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-400">
            <p className="font-medium text-gray-600 mb-1">2SIE — 2457301095</p>
            <p>Luthfi — Pemrograman Framework Lanjutan</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 py-3 flex items-center justify-between">
            <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              ← Portal
            </Link>
            <span className="text-xs text-gray-400">Pertemuan 4</span>
          </div>
          {/* Mobile Section Tabs */}
          <div className="flex overflow-x-auto border-t border-gray-100 px-2 py-2 gap-1 no-scrollbar">
            {sections.map((sec) => {
              const c = colorMap[sec.color]
              const isActive = activeSection === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick(sec.id)}
                  className={`whitespace-nowrap text-xs px-3 py-1.5 rounded-full transition-all ${
                    isActive ? `${c.badge} font-semibold` : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {sec.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 md:px-10 py-10 md:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Pertemuan 4</span>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Praktikum Susulan</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
              Data JSON, Search &amp; Filter, Best Practice State, Responsive &amp; Grid Design
            </h1>
            <p className="text-indigo-100 text-sm md:text-base max-w-2xl">
              Implementasi lengkap materi Pertemuan 4 mata kuliah Pemrograman Framework Lanjutan menggunakan React + Vite + TailwindCSS.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-16">

          {/* Section 1: Data JSON (List) */}
          <section id="json-list">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-emerald-500 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">01</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Data JSON (List)</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-11">
              Menampilkan data dari file <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">framework.json</code> menggunakan import, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">.map()</code>, key prop, nested data (dot notation), dan tags badge.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-6">
              <FrameworkList />
            </div>
          </section>

          {/* Section 2: Search & Filter */}
          <section id="search-filter">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-500 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">02</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Data JSON (Search &amp; Filter)</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-11">
              Menambahkan fitur pencarian dan filter tag pada list framework menggunakan <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">filter()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">includes()</code>, dan <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">flatMap() + Set</code>.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-6">
              <FrameworkListSearchFilter />
            </div>
          </section>

          {/* Section 3: Best Practice State */}
          <section id="best-state">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-amber-500 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">03</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Best Practice State</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-11">
              Penerapan single state object dan satu handleChange sebagai best practice pengelolaan state pada form React.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-6">
              {/* Comparison: Before vs After */}
              <h3 className="font-bold text-gray-800 mb-4">Perbandingan: State Terpisah vs Single State Object</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Before */}
                <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">SEBELUM</span>
                    <span className="text-sm text-red-700 font-medium">State Terpisah</span>
                  </div>
                  <pre className="bg-white border border-red-100 rounded p-3 text-xs text-gray-700 overflow-x-auto whitespace-pre-wrap break-words">
{`const [searchTerm, setSearchTerm] = useState("")
const [selectedTag, setSelectedTag] = useState("")

// Butuh 2 handler terpisah:
<input onChange={(e) => setSearchTerm(e.target.value)} />
<select onChange={(e) => setSelectedTag(e.target.value)} />`}
                  </pre>
                  <p className="text-xs text-red-600 mt-2">
                    Tidak efisien jika form memiliki banyak input, select, checkbox, dll.
                  </p>
                </div>
                {/* After */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">SESUDAH</span>
                    <span className="text-sm text-green-700 font-medium">Single State Object</span>
                  </div>
                  <pre className="bg-white border border-green-100 rounded p-3 text-xs text-gray-700 overflow-x-auto whitespace-pre-wrap break-words">
{`const [dataForm, setDataForm] = useState({
  searchTerm: "",
  selectedTag: "",
})

const handleChange = (evt) => {
  const { name, value } = evt.target
  setDataForm({ ...dataForm, [name]: value })
}

<input name="searchTerm" onChange={handleChange} />
<select name="selectedTag" onChange={handleChange} />`}
                  </pre>
                  <p className="text-xs text-green-600 mt-2">
                    Satu handler untuk semua input. Lebih efisien dan scalable.
                  </p>
                </div>
              </div>

              {/* How it works */}
              <h4 className="font-bold text-gray-800 mb-3">Cara Kerja</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Single State Object</p>
                    <p className="text-xs text-gray-500">
                      Semua nilai form digabung dalam satu objek <code className="bg-gray-100 px-1 rounded">dataForm</code>, bukan menggunakan useState terpisah untuk setiap input.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Computed Property Name — <code className="bg-gray-100 px-1 rounded text-xs">[name]: value</code></p>
                    <p className="text-xs text-gray-500">
                      Menggunakan <code className="bg-gray-100 px-1 rounded text-xs">evt.target.name</code> sebagai key dinamis, sehingga key yang diupdate otomatis sesuai dengan atribut <code className="bg-gray-100 px-1 rounded text-xs">name</code> pada input.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Spread Operator — <code className="bg-gray-100 px-1 rounded text-xs">...dataForm</code></p>
                    <p className="text-xs text-gray-500">
                      Menyalin semua nilai state lama sebelum update, mencegah hilangnya nilai key lain saat hanya satu key yang diubah.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Name Attribute</p>
                    <p className="text-xs text-gray-500">
                      Setiap input HTML memiliki atribut <code className="bg-gray-100 px-1 rounded text-xs">name</code> yang sesuai dengan key di state object: <code className="bg-gray-100 px-1 rounded text-xs">name="searchTerm"</code>, <code className="bg-gray-100 px-1 rounded text-xs">name="selectedTag"</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Table */}
              <div className="overflow-x-auto">
                <h4 className="font-bold text-gray-800 mb-3">Ringkasan Konsep</h4>
                <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-amber-50 text-amber-800">
                    <tr>
                      <th className="px-4 py-2.5 border-b border-amber-200">Konsep</th>
                      <th className="px-4 py-2.5 border-b border-amber-200">Penjelasan</th>
                      <th className="px-4 py-2.5 border-b border-amber-200">Digunakan di mana</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5 font-medium">Single state object</td>
                      <td className="px-4 py-2.5">Menggabungkan banyak state dalam satu objek</td>
                      <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">useState({"{ searchTerm, selectedTag }"})</code></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5 font-medium">Computed property name</td>
                      <td className="px-4 py-2.5">Update key secara dinamis berdasarkan name attribute</td>
                      <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">[name]: value</code> di setDataForm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5 font-medium">Spread operator</td>
                      <td className="px-4 py-2.5">Menyalin state lama sebelum update</td>
                      <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">...dataForm</code></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-medium">name attribute</td>
                      <td className="px-4 py-2.5">Menghubungkan input HTML ke key di state</td>
                      <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">name="searchTerm"</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">
                Komponen FrameworkListSearchFilter pada Section 02 di atas sudah menerapkan best practice state ini. Coba ketik di kolom search atau pilih tag untuk melihat hasilnya.
              </p>
            </div>
          </section>

          {/* Section 4: Responsive & Grid Design */}
          <section id="responsive">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-500 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">04</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Responsive &amp; Grid Design</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6 ml-11">
              Demonstrasi breakpoint prefix, responsive text, responsive width &amp; flex direction, dan responsive grid layout menggunakan TailwindCSS.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-6">
              <ResponsiveDesign />
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default Pertemuan4
