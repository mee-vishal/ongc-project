  import { useState, useEffect } from "react";
  import { Activity, Gauge, TrendingUp, Loader2, CheckCircle, AlertCircle, Zap } from "lucide-react";

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
        const API_URL = "https://ongc-project-2.onrender.com";

        const res = await fetch(API_URL + "/recommend-params", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Depth: parseFloat(depth),
            Target_ROP: parseFloat(targetROP)
          }),
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

    const getRankBadge = (index) => {
      const badges = [
        { label: "1st Best", bg: "bg-gradient-to-r from-yellow-400 to-amber-500", text: "text-white" },
        { label: "2nd Best", bg: "bg-gradient-to-r from-gray-300 to-gray-400", text: "text-gray-900" },
        { label: "3rd Best", bg: "bg-gradient-to-r from-orange-400 to-amber-600", text: "text-white" }
      ];
      return badges[index] || badges[2];
    };

    return (
      <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden min-h-screen">
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
              Get the best drilling parameter from each well - top 3 unique well recommendations.
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
                      Enter depth and target ROP to see the best parameter from each well.
                    </p>
                  </div>
                </div>
              )}

              {loading && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-12 border-2 border-blue-200 text-center animate-pulse">
                  <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Fetching Recommendations...</h3>
                  <p className="text-sm text-amber-600 font-medium mt-3">
                    ⏳ First prediction may take 80–100 seconds as the server wakes up from idle.
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-4 animate-slide-in">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Top 3 Well Recommendations</h3>
                  </div>

                  {/* Desktop View - Cards */}
                  {!isMobile && (
                    <div className="space-y-4">
                      {results.map((row, index) => {
                        const badge = getRankBadge(index);
                        return (
                          <div key={index} className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                            <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-slate-100 px-6 py-4 border-b border-gray-200">
                              <div className="flex items-center gap-4">
                                <div className={`px-4 py-2 rounded-lg ${badge.bg} ${badge.text} font-bold text-sm shadow-md`}>
                                  {badge.label}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Zap className="h-5 w-5 text-orange-500" />
                                  <h4 className="text-xl font-bold text-gray-900">{row.well}</h4>
                                </div>
                              </div>
                            </div>
   
                            <div className="grid grid-cols-5 gap-6 p-6">
                              <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Depth</p>
                                <p className="text-lg font-bold text-gray-900">{row.Depth} m</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Bit Weight</p>
                                <p className="text-lg font-bold text-blue-600">{row["Bit Weight(klb)"]} klb</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">RPM</p>
                                <p className="text-lg font-bold text-purple-600">{row["RPM(RPM)"]} RPM</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Flow Rate</p>
                                <p className="text-lg font-bold text-cyan-600">{row["Flow In Rate(galUS/min)"]} gal/min</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">ROP</p>
                                <p className="text-lg font-bold text-green-600">{row["ROP - Average(m/hr)"]} m/hr</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Mobile View - Compact Cards */}
                  {isMobile && (
                    <div className="space-y-4">
                      {results.map((row, index) => {
                        const badge = getRankBadge(index);
                        return (
                          <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-gray-50 to-slate-100 px-4 py-3 border-b border-gray-200">
                              <div className={`inline-block px-3 py-1 rounded-lg ${badge.bg} ${badge.text} font-bold text-xs mb-2`}>
                                {badge.label}
                              </div>
                              <div className="flex items-center gap-2">
                                <Zap className="h-4 w-4 text-orange-500" />
                                <h4 className="text-lg font-bold text-gray-900">{row.well}</h4>
                              </div>
                            </div>
                            
                            <div className="p-4 space-y-3">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <p className="text-xs text-gray-500 font-semibold mb-1">Depth</p>
                                  <p className="text-base font-bold text-gray-900">{row.Depth} m</p>
                                </div>
                                <div className="bg-green-50 rounded-lg p-3">
                                  <p className="text-xs text-green-700 font-semibold mb-1">ROP</p>
                                  <p className="text-base font-bold text-green-600">{row["ROP - Average(m/hr)"]} m/hr</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-blue-50 rounded-lg p-2 text-center">
                                  <p className="text-xs text-blue-700 font-semibold mb-1">Bit Wt</p>
                                  <p className="text-sm font-bold text-blue-600">{row["Bit Weight(klb)"]}</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-2 text-center">
                                  <p className="text-xs text-purple-700 font-semibold mb-1">RPM</p>
                                  <p className="text-sm font-bold text-purple-600">{row["RPM(RPM)"]}</p>
                                </div>
                                <div className="bg-cyan-50 rounded-lg p-2 text-center">
                                  <p className="text-xs text-cyan-700 font-semibold mb-1">Flow</p>
                                  <p className="text-sm font-bold text-cyan-600">{row["Flow In Rate(galUS/min)"]}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
