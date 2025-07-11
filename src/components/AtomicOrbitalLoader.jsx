import React from 'react'
import './Loader.css'

const AtomicOrbitalLoader = () => {
  return (
    <div>
      <div className="atom-loader">
        <div className="nucleus"></div>
        <div className="orbit orbit-1">
          <div className="electron electron-1"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="electron electron-2"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="electron electron-3"></div>
        </div>
      </div>
    </div>
  )
}

export default AtomicOrbitalLoader