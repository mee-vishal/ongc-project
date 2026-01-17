import { useState, useEffect } from "react";
import { Activity, Gauge, TrendingUp, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function RecommendParams() {
  const [depth, setDepth] = useState(2500);
  const [targetROP, setTargetROP] = useState(10);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const res = await fetch("https://ongc-project-2.onrender.com/recommend-params", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Depth: parseFloat(depth), Target_ROP: parseFloat(targetROP) }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setResults(data.best_3_parameters);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: "Depth", value: depth, setter: setDepth, label: "Depth", unit: "m", icon: Activity, min: 0, max: 10000, color: "from-blue-500 to-cyan-500" },
    { name: "Target_ROP", value: targetROP, setter: setTargetROP, label: "Target ROP", unit: "m/hr", icon: Gauge, min: 0, max: 50, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20 mb-3">
            <TrendingUp className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-gray-700">Drilling Analytics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Drilling <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">Recommendations</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Enter Depth and Target ROP to get the top 3 drilling parameter sets from historical data.
          </p>
          <p className="text-sm text-amber-600 font-medium mt-2 max-w-2xl mx-auto">
            ⏳ First prediction may take 80–100 seconds as the server wakes up from idle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Input Form */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-3xl lg:sticky lg:top-24">
            <div className="space-y-4">
              {inputFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name}>
                    <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                      <div className={`p-1.5 bg-gradient-to-br ${field.color} rounded-lg shadow-lg`}>
                        <Icon className="h-3.5 w-3.5 text-white" />
                      </div>
                      {field.label} <span className="text-xs font-normal text-gray-500">({field.unit})</span>
                    </label>
                    <input
                      type="number"
                      value={field.value}
                      min={field.min}
                      max={field.max}
                      onChange={(e) => field.setter(parseFloat(e.target.value))}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-500 transition-all duration-300 text-base font-medium text-gray-900 bg-gray-50 hover:bg-white"
                    />
                  </div>
                );
              })}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4" />
                      Get Recommendations
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {!loading && results.length === 0 && !error && (
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl shadow-xl p-12 border border-gray-200 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Recommend</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enter depth and target ROP to see the top 3 parameter sets instantly.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-12 border-2 border-blue-200 text-center animate-pulse">
                <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fetching Recommendations...</h3>
              </div>
            )}

            {results.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-6 border-2 border-green-200 animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-500 rounded-xl shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Top 3 Recommendations</h3>
                </div>

                {/* Desktop Table */}
                {!isMobile && (
                  <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-green-100 text-gray-900 font-semibold">
                      <tr>
                        <th className="py-3 px-4">Well</th>
                        <th className="py-3 px-4">Depth</th>
                        <th className="py-3 px-4">Bit Weight</th>
                        <th className="py-3 px-4">RPM</th>
                        <th className="py-3 px-4">Flow</th>
                        <th className="py-3 px-4">ROP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((row, index) => (
                        <tr key={index} className="hover:bg-green-50 bg-white">
                          <td className="py-3 px-4 border-t border-gray-200">{row.well}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{row.Depth}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{row["Bit Weight(klb)"]}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{row["RPM(RPM)"]}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{row["Flow In Rate(galUS/min)"]}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{row["ROP - Average(m/hr)"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {/* Mobile Cards */}
                {isMobile && (
                  <div className="space-y-4">
                    {results.map((row, index) => (
                      <div key={index} className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
                        <h4 className="font-bold text-lg text-green-700 mb-2">{row.well}</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div><b>Depth:</b> {row.Depth}</div>
                          <div><b>ROP:</b> {row["ROP - Average(m/hr)"]}</div>
                          <div><b>Bit Wt:</b> {row["Bit Weight(klb)"]}</div>
                          <div><b>RPM:</b> {row["RPM(RPM)"]}</div>
                          <div className="col-span-2"><b>Flow:</b> {row["Flow In Rate(galUS/min)"]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {error && (
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-2xl p-6 border-2 border-red-200 animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-500 rounded-xl shadow-lg">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Error Occurred</h3>
                </div>
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(30px,-50px) scale(1.1);} 66%{transform:translate(-20px,20px) scale(0.9);} }
        @keyframes slide-in { from{opacity:0; transform:translateY(20px);} to{opacity:1; transform:translateY(0);} }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
      `}</style>
    </section>
  );
}