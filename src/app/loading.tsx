export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        id="loadingBox"
        className=" w-32 h-32 rounded-full   border-solid border-4 border-slate-800 border-r-transparent animate-spin"
      ></div>
    </div>
  );
}
