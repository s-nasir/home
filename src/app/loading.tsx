export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#d7d9d4]">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
