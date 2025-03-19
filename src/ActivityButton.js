import React from "react";

function ActivityButton({ activity, onClick }) {
    return (
        <button className="activity-button" onClick={() => onClick(activity)}>
            {activity.name}
        </button>
    );
}

export default ActivityButton;
