import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "let's hit the beach",
        iconName: "sun",
    },
    winter: {
        text: "Burr it's cold",
        iconName: "snowflake",
    }
}
const findSeason = (lat,month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = findSeason(props.lat,new Date().getMonth());
    const {text,iconName} = seasonConfig[season];
    return <div className={`season-display ${season}`}>
        <i className={`${iconName} icon-left massive icon`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon-right massive icon`} />
        </div>
};

export default SeasonDisplay;