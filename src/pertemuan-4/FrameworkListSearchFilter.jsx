import { useState } from "react"
import frameworkData from "./framework.json"

function FrameworkListSearchFilter() {
  // Best Practice State: single state object untuk semua input
  // Menggabungkan searchTerm dan selectedTag dalam satu objek (bukan state terpisah)
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  })

  // Best Practice State: satu handleChange untuk semua input
  // Menggunakan computed property name [name] dan evt.target.name
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setDataForm({
      ...dataForm,       // Spread operator: salin state lama
      [name]: value,     // Computed property name: update key secara dinamis
    })
  }

  // Logic Search & Filter: menggunakan filter() dan includes()
  const _searchTerm = dataForm.searchTerm.toLowerCase()
  const filteredFrameworks = frameworkData.filter((framework) => {
    // includes() → cek name dan description mengandung keyword search
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm)
    // includes() → cek tags mengandung tag yang dipilih
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true
    return matchesSearch && matchesTag
  })

  // flatMap() + Set → mengambil semua tags lalu menghilangkan duplikat
  const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))]

  return (
    <div>
      {/* Info flatMap + Set */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-2">Cara Kerja flatMap() + Set</p>
        <div className="text-xs text-blue-700 space-y-1.5">
          <p><code className="bg-white px-1 rounded">flatMap()</code> → Mengambil semua tags dari setiap framework dan menggabungkan menjadi satu array datar.</p>
          <p><code className="bg-white px-1 rounded">new Set(...)</code> → Mengubah array menjadi Set (struktur data yang otomatis menghilangkan duplikasi).</p>
          <p><code className="bg-white px-1 rounded">[...new Set(...)]</code> → Mengubah Set kembali menjadi array dengan spread operator.</p>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Input search: name="searchTerm" terhubung ke state melalui handleChange */}
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={dataForm.searchTerm}
          placeholder="Search framework..."
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        {/* Select filter: name="selectedTag" terhubung ke state melalui handleChange */}
        <select
          name="selectedTag"
          onChange={handleChange}
          value={dataForm.selectedTag}
          className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
        >
          <option value="">All Tags</option>
          {/* allTags.map() → render unique tags sebagai option */}
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Info hasil pencarian */}
      <p className="text-sm text-gray-500 mb-4">
        Menampilkan <strong>{filteredFrameworks.length}</strong> dari{" "}
        <strong>{frameworkData.length}</strong> framework
        {dataForm.searchTerm && (
          <span> — keyword: <strong className="text-blue-600">"{dataForm.searchTerm}"</strong></span>
        )}
        {dataForm.selectedTag && (
          <span> — tag: <strong className="text-blue-600">"{dataForm.selectedTag}"</strong></span>
        )}
      </p>

      {/* Framework Cards — menggunakan filteredFrameworks (BUKAN frameworkData) */}
      {filteredFrameworks.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p className="text-lg font-medium mb-1">Tidak ada framework yang cocok</p>
          <p className="text-sm">Coba ubah kata kunci pencarian atau pilih tag lain.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white"
            >
              <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>

              <div className="text-sm text-gray-500 space-y-1 mb-3">
                <p>
                  <span className="font-medium text-gray-700">Developer:</span>{" "}
                  {item.details.developer}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Release Year:</span>{" "}
                  {item.details.releaseYear}
                </p>
                <p className="truncate">
                  <span className="font-medium text-gray-700">Website:</span>{" "}
                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {item.details.officialWebsite}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      tag === dataForm.selectedTag
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tabel Penjelasan - Search & Filter */}
      <div className="overflow-x-auto">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-blue-500 rounded-full inline-block"></span>
          Penjelasan Konsep — Search &amp; Filter
        </h3>
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-50 text-blue-800">
            <tr>
              <th className="px-4 py-2.5 border-b border-blue-200">Konsep</th>
              <th className="px-4 py-2.5 border-b border-blue-200">Penjelasan</th>
              <th className="px-4 py-2.5 border-b border-blue-200">Digunakan di mana</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">useState</td>
              <td className="px-4 py-2.5">Menyimpan nilai input form secara reaktif</td>
              <td className="px-4 py-2.5">state <code className="bg-gray-100 px-1 rounded text-xs">dataForm</code> untuk searchTerm dan selectedTag</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">filter()</td>
              <td className="px-4 py-2.5">Menyaring array berdasarkan kondisi yang ditentukan</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">filteredFrameworks</code> dari frameworkData</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">includes()</td>
              <td className="px-4 py-2.5">Mengecek apakah string/array mengandung nilai tertentu</td>
              <td className="px-4 py-2.5">Cek name, description, dan tags</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">flatMap() + Set</td>
              <td className="px-4 py-2.5">Mengambil semua tags lalu menghilangkan duplikat</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">const allTags = [...new Set(...flatMap(...))]</code></td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium">onChange + name</td>
              <td className="px-4 py-2.5">Menghubungkan setiap input ke state melalui satu handler</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">handleChange</code> dengan <code className="bg-gray-100 px-1 rounded text-xs">evt.target.name</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrameworkListSearchFilter
