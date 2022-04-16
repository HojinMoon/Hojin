import React from "react"

const Project = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project</h1>
      <project className="Projects">
        <button
          onClick={() =>
            window.open("http://hojinmoon.github.io/hojin-nwitter", "_blank")
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
        <button
          onClick={() =>
            window.open("http://hojinmoon.github.io/LocalToDo", "_blank")
          }
          className="LocalToDo"
        >
          LocalToDo
        </button>
      </project>
    </div>
  )
}

export default Project
