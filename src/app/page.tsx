// page.tsx
"use client"

import * as React from "react"
import { FC } from "react"

const HomePage: FC = () => {
  return (
      <div>
      {/* Header Section */}
      <div className="container-header my-8">
        <div className="header bg-red-500 w-120 h-40  rounded-lg opacity-40"></div>
      </div>

      {/* Hero Section */}
      <div className="container-hero my-8">
          <div className="hero bg-red-500 w-100 h-96 rounded-lg opacity-40"></div>
      </div>

      {/* Experience Section */}
      <div className="container-exp my-8">
        <div className="exp bg-red-500 w-80 h-60 rounded-lg opacity-40"></div>
      </div>
    </div>
  )
}

export default HomePage
