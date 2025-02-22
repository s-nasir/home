import React from "react";

interface OverlayProps {
  onBegin: () => void;
}

export default function Overlay({ onBegin }: OverlayProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#d7d9d4]">
      <div className="max-w-sm mx-auto text-center">
        <h1 className="text-9xl font-bold mb-8">Hello</h1>
        <button
          onClick={onBegin}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Begin
        </button>
      </div>
    </div>
  );
}
