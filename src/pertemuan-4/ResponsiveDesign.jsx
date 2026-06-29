// Child Component 1 - ResponsiveText
function ResponsiveText() {
  return (
    <div className="p-5 border border-gray-200 rounded-xl bg-white">
      <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="bg-purple-100 text-purple-600 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
        Responsive Text
      </h3>
      {/* text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl → ukuran teks berubah sesuai breakpoint */}
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3 text-gray-700 leading-relaxed">
        Coba lakukan zoom in atau zoom out pada browser. Perhatikan bahwa ukuran teks ini akan menyesuaikan dengan ukuran layar secara otomatis berkat breakpoint prefix dari TailwindCSS.
      </p>
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-xs text-gray-500 mb-1 font-medium">Class yang digunakan:</p>
        <code className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl</code>
        <p className="text-xs text-gray-400 mt-2 italic">
          Coba hapus class yang menggunakan prefix breakpoint (sm:, md:, lg:, xl:) dan lihat perbedaannya!
        </p>
      </div>
    </div>
  )
}

// Child Component 2 - ResponsiveWidth
function ResponsiveWidth() {
  return (
    <div className="p-5 border border-gray-200 rounded-xl bg-white">
      <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="bg-purple-100 text-purple-600 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">2</span>
        Responsive Width &amp; Flex Direction
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Pada layar kecil (mobile) dua kolom ini tersusun <strong>vertikal</strong>. Pada layar tablet ke atas (md: ≥768px), tersusun <strong>horizontal</strong> sejajar.
      </p>
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-xs text-gray-500 mb-1">Class parent: <code className="bg-white px-1.5 py-0.5 rounded text-purple-700">flex flex-col md:flex-row</code></p>
        <p className="text-xs text-gray-500">Class child: <code className="bg-white px-1.5 py-0.5 rounded text-purple-700">w-full md:w-1/2</code></p>
      </div>
      {/* flex flex-col md:flex-row → mengubah arah flex dari vertikal ke horizontal sesuai layar */}
      <div className="flex flex-col md:flex-row gap-2">
        {/* w-full md:w-1/2 → lebar elemen berubah dari penuh menjadi setengah di tablet */}
        <div className="bg-red-400 text-white w-full md:w-1/2 p-4 rounded-lg text-center font-medium">
          Kolom 1 <span className="opacity-75 text-sm">(md:w-1/2)</span>
        </div>
        <div className="bg-blue-400 text-white w-full md:w-1/2 p-4 rounded-lg text-center font-medium">
          Kolom 2 <span className="opacity-75 text-sm">(md:w-1/2)</span>
        </div>
      </div>
    </div>
  )
}

// Child Component 3 - ResponsiveLayout
function ResponsiveLayout() {
  return (
    <div className="p-5 border border-gray-200 rounded-xl bg-white">
      <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="bg-purple-100 text-purple-600 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">3</span>
        Responsive Grid Layout
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        Jumlah kolom grid berubah secara otomatis sesuai ukuran layar menggunakan <code className="bg-gray-100 px-1 rounded text-xs">grid-cols-*</code>:
      </p>
      <ul className="text-sm text-gray-500 mb-4 space-y-1 list-disc list-inside">
        <li><strong className="text-gray-700">grid-cols-1</strong> → Mobile: 1 kolom</li>
        <li><strong className="text-gray-700">sm:grid-cols-2</strong> → Tablet kecil (≥640px): 2 kolom</li>
        <li><strong className="text-gray-700">md:grid-cols-3</strong> → Tablet besar (≥768px): 3 kolom</li>
        <li><strong className="text-gray-700">lg:grid-cols-4</strong> → Laptop/Desktop (≥1024px): 4 kolom</li>
      </ul>
      {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 → jumlah kolom berubah sesuai breakpoint */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-medium shadow-sm">Box 1</div>
        <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-medium shadow-sm">Box 2</div>
        <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-medium shadow-sm">Box 3</div>
        <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-medium shadow-sm">Box 4</div>
      </div>
    </div>
  )
}

// Parent Component
function ResponsiveDesign() {
  return (
    <div>
      {/* Breakpoint Reference Table from Module */}
      <div className="overflow-x-auto mb-6">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-purple-500 rounded-full inline-block"></span>
          Referensi Breakpoint TailwindCSS
        </h3>
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-purple-50 text-purple-800">
            <tr>
              <th className="px-4 py-2.5 border-b border-purple-200">Breakpoint</th>
              <th className="px-4 py-2.5 border-b border-purple-200">Class Prefix</th>
              <th className="px-4 py-2.5 border-b border-purple-200">Lebar Minimum</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">sm</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">sm:</code></td>
              <td className="px-4 py-2.5">640px (Tablet Kecil)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">md</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">md:</code></td>
              <td className="px-4 py-2.5">768px (Tablet Besar)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">lg</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">lg:</code></td>
              <td className="px-4 py-2.5">1024px (Laptop Kecil)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">xl</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">xl:</code></td>
              <td className="px-4 py-2.5">1280px (Desktop)</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium">2xl</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">2xl:</code></td>
              <td className="px-4 py-2.5">1536px (Layar Besar)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-2 italic">Jika tidak ada prefix, maka berlaku untuk semua ukuran layar (default: mobile).</p>
      </div>

      {/* Live Demo Components */}
      <div className="space-y-4 mb-8">
        <ResponsiveText />
        <ResponsiveWidth />
        <ResponsiveLayout />
      </div>

      {/* Concept Explanation Table */}
      <div className="overflow-x-auto mb-6">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-purple-500 rounded-full inline-block"></span>
          Penjelasan Konsep — Responsive &amp; Grid Design
        </h3>
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-purple-50 text-purple-800">
            <tr>
              <th className="px-4 py-2.5 border-b border-purple-200">Konsep</th>
              <th className="px-4 py-2.5 border-b border-purple-200">Penjelasan</th>
              <th className="px-4 py-2.5 border-b border-purple-200">Digunakan di mana</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">Breakpoint prefix</td>
              <td className="px-4 py-2.5">Menentukan tampilan berdasarkan lebar layar minimum</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">sm: md: lg: xl:</code> pada class TailwindCSS</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">grid-cols-*</td>
              <td className="px-4 py-2.5">Mengatur jumlah kolom dalam CSS Grid</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4</code></td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">flex-col md:flex-row</td>
              <td className="px-4 py-2.5">Mengubah arah flex dari vertikal ke horizontal sesuai layar</td>
              <td className="px-4 py-2.5">ResponsiveWidth component</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">text-xs md:text-lg</td>
              <td className="px-4 py-2.5">Ukuran teks yang berubah sesuai ukuran layar</td>
              <td className="px-4 py-2.5">ResponsiveText component</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium">w-full md:w-1/2</td>
              <td className="px-4 py-2.5">Lebar elemen berubah dari penuh menjadi setengah di tablet</td>
              <td className="px-4 py-2.5">Kolom di ResponsiveWidth</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bootstrap vs TailwindCSS Comparison */}
      <div className="overflow-x-auto">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-purple-500 rounded-full inline-block"></span>
          Perbandingan Bootstrap vs TailwindCSS
        </h3>
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2.5 border-b border-gray-200">Fitur</th>
              <th className="px-4 py-2.5 border-b border-gray-200">Bootstrap (col-md)</th>
              <th className="px-4 py-2.5 border-b border-gray-200">TailwindCSS (grid-cols)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">Sistem Layout</td>
              <td className="px-4 py-2.5">Flexbox 12 kolom</td>
              <td className="px-4 py-2.5">CSS Grid</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">Penulisan Struktur</td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">row + col-xx-*</code></td>
              <td className="px-4 py-2.5"><code className="bg-gray-100 px-1 rounded text-xs">grid + grid-cols-*</code></td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">Responsiveness</td>
              <td className="px-4 py-2.5">Kolom berubah ukuran berdasarkan <code className="bg-gray-100 px-1 rounded text-xs">col-xx-*</code></td>
              <td className="px-4 py-2.5">Kolom bertambah/berkurang sesuai <code className="bg-gray-100 px-1 rounded text-xs">grid-cols-*</code></td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium">Penyesuaian</td>
              <td className="px-4 py-2.5">Terbatas pada sistem 12 kolom</td>
              <td className="px-4 py-2.5">Fleksibel: grid-cols-3, grid-cols-7, dll</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResponsiveDesign
