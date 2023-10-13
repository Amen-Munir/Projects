// eslint-disable-next-line no-unused-vars
import React from "react"

import PropTypes from 'prop-types';

export default function Die(props) {
    const styles = {
        // eslint-disable-next-line react/prop-types
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
        className="die-face" 
        style={styles}
        // eslint-disable-next-line react/prop-types
        onClick={props.holdDice}
    >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

Die.propTypes = {
    value: PropTypes.number.isRequired
}