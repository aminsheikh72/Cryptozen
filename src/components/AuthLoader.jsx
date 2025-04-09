const AuthLoader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-sm tracking-wide">Authenticating...</p>
        </div>
      </div>
    );
  };
  
  export default AuthLoader;
  