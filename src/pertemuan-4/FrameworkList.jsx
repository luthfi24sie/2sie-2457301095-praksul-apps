// import JSON: Mengambil data dari file .json menggunakan import ES module
import frameworkData from "./framework.json"

function FrameworkList() {
  return (
    <div>
      {/* Info: bagaimana data JSON diakses */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-emerald-800 font-medium mb-1">Cara Mengakses Data JSON</p>
        <ul className="text-xs text-emerald-700 space-y-1 list-disc list-inside">
          <li>Data diawali <strong>array []</strong> → langsung panggil <code className="bg-white px-1 rounded">.map()</code></li>
          <li>Data diawali <strong>object {"{}"}</strong> → akses array-nya dulu, baru <code className="bg-white px-1 rounded">.map()</code></li>
        </ul>
      </div>

      {/* Framework Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* .map() → iterasi array untuk render komponen React */}
        {frameworkData.map((item) => (
          // key prop → identitas unik tiap elemen dalam list, mencegah warning React
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all bg-white"
          >
            {/* item.name → akses properti langsung dari objek */}
            <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
            {/* item.description → akses properti langsung dari objek */}
            <p className="text-sm text-gray-600 mb-3">{item.description}</p>

            {/* Nested data → akses properti bersarang menggunakan dot notation */}
            <div className="text-sm text-gray-500 space-y-1 mb-3">
              <p>
                <span className="font-medium text-gray-700">Developer:</span>{" "}
                {/* item.details.developer → dot notation untuk nested object */}
                {item.details.developer}
              </p>
              <p>
                <span className="font-medium text-gray-700">Release Year:</span>{" "}
                {/* item.details.releaseYear → dot notation untuk nested object */}
                {item.details.releaseYear}
              </p>
              <p className="truncate">
                <span className="font-medium text-gray-700">Website:</span>{" "}
                {/* item.details.officialWebsite → dot notation untuk nested object */}
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline truncate"
                >
                  {item.details.officialWebsite}
                </a>
              </p>
            </div>

            {/* tags.map() → map kedua untuk render array tags sebagai badge */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Concept Explanation Table */}
      <div className="overflow-x-auto">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          Penjelasan Konsep — Data JSON (List)
        </h3>
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-emerald-50 text-emerald-800">
            <tr>
              <th className="px-4 py-2.5 border-b border-emerald-200">Konsep</th>
              <th className="px-4 py-2.5 border-b border-emerald-200">Penjelasan</th>
              <th className="px-4 py-2.5 border-b border-emerald-200">Digunakan di mana</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">import JSON</td>
              <td className="px-4 py-2.5">Mengambil data dari file .json menggunakan import ES module</td>
              <td className="px-4 py-2.5">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">import frameworkData from "./framework.json"</code>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">.map()</td>
              <td className="px-4 py-2.5">Iterasi array untuk render komponen React. Data JSON diawali array bisa langsung map()</td>
              <td className="px-4 py-2.5">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">frameworkData.map((item) =&gt; ...)</code>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">key prop</td>
              <td className="px-4 py-2.5">Identitas unik tiap elemen dalam list. React butuh key untuk optimasi rendering dan mencegah re-render tidak perlu</td>
              <td className="px-4 py-2.5">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">key={"{item.id}"} di setiap card</code>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-2.5 font-medium">Nested data</td>
              <td className="px-4 py-2.5">Akses properti bersarang menggunakan dot notation (.)</td>
              <td className="px-4 py-2.5">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">item.details.developer</code>,{" "}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">item.details.officialWebsite</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2.5 font-medium">tags.map()</td>
              <td className="px-4 py-2.5">Map kedua untuk render array tags sebagai badge. Tags adalah array di dalam setiap item</td>
              <td className="px-4 py-2.5">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">item.tags.map((tag, index) =&gt; ...)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrameworkList
