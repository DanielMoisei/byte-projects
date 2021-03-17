import React from "react"
import useGame from "./useGame"

import "./style.css"

function SpeedtypingGame() {

    const {
        text,
        timeRemaining,
        isTimeRunning,
        wordCount,
        textBoxRef,
        handleChange,
        startGame
    } = useGame(20)

    return (
        <div id="speed-game">
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
                spellcheck="false"
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isTimeRunning}
                className="typeGameButton"
            >
                Start
            </button>
            <h2>Word count: {wordCount}</h2>
        </div>
    )
}

export default SpeedtypingGame
