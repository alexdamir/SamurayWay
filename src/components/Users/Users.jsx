import React from 'react';
import css from './Users.module.css';

let Users = (props) => {

    if (props.state.users.length===0) {
        props.setUsers([
            {
                "name": "proshka",
                "id": 11298,
                "uniqueUrlName": null,
                "photos": {
                    "small": 'https://dbux0j2zzjqw9.cloudfront.net/user/6195/15931902314b.jpg',
                    "large": null
                },
                "status": 'Жопа!',
                "followed": true
            },
            {
                "name": "romadoter",
                "id": 11297,
                "uniqueUrlName": null,
                "photos": {
                    "small": 'https://www.crazypatterns.net/uploads/cache/items/2018/04/39020/preview/195-crochet-pattern-proshka-the-bear-amigurumi-toy-pdf-file-by-pertseva-cp-2222104147-450x450.jpg',
                    "large": null
                },
                "status": null,
                "followed": false
            }
    
        ])
    }


    return (
        <div>
            {props.state.users.map( u => {
                return(
                    <div keyName={u.id}>
                        <div><img src={u.photos.small} alt="" className={css.userPhoto}/></div>
                        {u.name}<br />
                        {u.status}
                        <div>
                            {u.followed ? 
                                <button onClick={ ()=>{props.unfollow(u.id)} }>Unfollow</button> : 
                                <button onClick={ ()=>{props.follow(u.id)} }>Follow</button> }
                        </div>
                        <div>&nbsp;</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;