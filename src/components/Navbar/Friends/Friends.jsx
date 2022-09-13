import React from 'react';
import s from "./Friends.module.css";



const Friends = (props) => {
    let arr = props.friends.map ( (el) => <div>{el.name}</div>)
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsRow}>
                <div className={s.friend}>
                    {arr}
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'/>
                    <span>{props.name}</span>
                </div>
                <div className={s.friend}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'/>
                    <span>Nastya</span>
                </div>
                <div className={s.friend}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'/>
                    <span>Vitaliy</span>
                </div>
            </div>

        </div>
    )
}

export default Friends;