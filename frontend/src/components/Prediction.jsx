import { useState } from "react";
import { Activity, Gauge, Zap, Droplet, TrendingUp, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

function Prediction() {
  const [formData, setFormData] = useState({
    Depth: 2500,
    WOB: 5,
    RPM: 75,
    Flow: 600,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Fetch from your Render backend using environment variable
      const res = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setResult(data.predicted_rop);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: "Depth", label: "Drilling Depth", icon: Activity, unit: "meters", min: 0, max: 10000, step: 1, color: "from-blue-500 to-cyan-500" },
    { name: "WOB", label: "Weight on Bit", icon: Gauge, unit: "klb", min: 0, max: 50, step: 0.1, color: "from-purple-500 to-pink-500" },
    { name: "RPM", label: "Rotary Speed", icon: Zap, unit: "RPM", min: 0, max: 200, step: 0.1, color: "from-yellow-500 to-orange-500" },
    { name: "Flow", label: "Flow Rate", icon: Droplet, unit: "gal/min", min: 0, max: 2000, step: 1, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="prediction" className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20 mb-3">
            <TrendingUp className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-gray-700">AI-Powered Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            ROP <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">Prediction Engine</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Enter drilling parameters to get real-time Rate of Penetration predictions powered by machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Input Form */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-3xl lg:sticky lg:top-24">
            <div className="space-y-4">
              {inputFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="group">
                    <label className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
                      <div className={`p-1.5 bg-gradient-to-br ${field.color} rounded-lg shadow-lg transform transition-transform group-hover:scale-110`}>
                        <Icon className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-sm">{field.label}</span>
                      <span className="text-xs font-normal text-gray-500">({field.unit})</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-500 transition-all duration-300 text-base font-medium text-gray-900 bg-gray-50 hover:bg-white"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        required
                      />
                      <div className="mt-1.5 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${field.color} transition-all duration-300`}
                          style={{
                            width: `${((formData[field.name] - field.min) / (field.max - field.min)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
       

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4" />
                      Predict ROP
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
                       <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed">
  ⏳ First prediction may take 80–100 seconds as the server wakes up from idle.
</p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {!result && !error && !loading && (
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl shadow-xl p-12 border border-gray-200 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Predict</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enter your drilling parameters on the left and click "Predict ROP" to get instant AI-powered predictions.
                  </p>
                  <p> ⏳ First prediction may take 80–100 seconds as the server wakes up from idle.</p>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-12 border-2 border-blue-200 text-center animate-pulse">
                <div className="max-w-md mx-auto">
                  <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Analyzing Parameters</h3>
                  <p className="text-gray-600">Processing drilling data with AI algorithms...</p>
                </div>
              </div>
            )}

            {result !== null && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 border-2 border-green-200 animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-500 rounded-xl shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Prediction Complete</h3>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                  <p className="text-sm text-gray-600 mb-2">Predicted Rate of Penetration</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                      {result.toFixed(2)}
                    </span>
                    <span className="text-2xl font-semibold text-gray-600">m/hr</span>
                  </div>
              
                </div>
              </div>
            )}



            {error && (
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-2xl p-8 border-2 border-red-200 animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-500 rounded-xl shadow-lg">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Error Occurred</h3>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
                  <p className="text-red-600 font-medium">{error}</p>
                  <p className="text-sm text-gray-600 mt-2">Please check your connection and try again.</p>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parameter Guidelines</h3>
              <div className="space-y-3">
                {inputFields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name} className="flex items-start gap-3 text-sm">
                      <div className={`p-1.5 bg-gradient-to-br ${field.color} rounded-lg mt-0.5`}>
                        <Icon className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{field.label}:</span>
                        <span className="text-gray-600 ml-1">Optimal range {field.min}-{field.max} {field.unit}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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

export default Prediction;

