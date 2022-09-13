import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_400x400.jpg', followed: true, fullName: "Ruslan", status: 'I am a boss', location: {city: 'Lviv', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_400x400.jpg', followed: false, fullName: "Nastia", status: 'I am a boss', location: {city: 'Hmel', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_400x400.jpg', followed: true, fullName: "Alex", status: 'I am a boss', location: {city: 'Kyiev', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_400x400.jpg', followed: false, fullName: "Stas", status: 'I am a boss', location: {city: 'Rivne', country: 'Ukraine'}},
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img src={u.photoUrl} alt="ggg" className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id)}}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users