function WelcomeBanner() {
  return (
    <div className="relative p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
          Code Your stage
        </h1>
        <p className="dark:text-indigo-200">
          Hi everyone 👋 Here is your remote assignment
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
