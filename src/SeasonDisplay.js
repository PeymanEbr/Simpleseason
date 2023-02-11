import React from "react";

const findSeason = (lat,month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'winter';
    }else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = (props) => {
    const season = findSeason(props.lat,new Date().getMonth());
    return <div>Season: {season}</div>
};

export default SeasonDisplay;