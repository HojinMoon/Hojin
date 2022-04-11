import React from "react"

const Project = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project</h1>
      <project className="Projects">
        <button
          onClick={() =>
            window.open("http://hojinmoon.github.io/nwitter", "_blank")
          }
          className="Nwitter"
        >
          Nwitter
        </button>
        <button
          onClick={() =>
            window.open("http://hojinmoon.github.io/ToDo", "_blank")
          }
          className="ToDo"
        >
          ToDo
        </button>
      </project>
    </div>
  )
}

export default Project
