//This notification component is shown on dashboard WITH Project List
import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className='secton'>
            <div className='card z-depth-0'>
                <div className='card content'>
                    <div className='card-titlee center-align '>Notifications</div>
                    <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return(
                                <li key={item.id} className='leftspace'>
                                    <span className='pink-text'>{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className='grey-text note-date'>
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;