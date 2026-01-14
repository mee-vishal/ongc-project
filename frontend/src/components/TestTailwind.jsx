export default function TestTailwind() {
  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
      <div className="flex-shrink-0">
        <svg className="h-12 w-12 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test Component</div>
        <p className="text-gray-500">If you see this styling, Tailwind is working!</p>
      </div>
    </div>
  );
}
