const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">

      <div className="flex flex-col items-center gap-5">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-200 border-t-green-600"></div>

        <h2 className="text-xl font-bold text-slate-700">
          Loading Pets...
        </h2>

        <p className="text-sm text-slate-500">
          Please wait a moment
        </p>
      </div>
    </div>
  );
};

export default Loading;