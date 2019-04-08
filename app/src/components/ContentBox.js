import React from 'react';
import User from './User'
import './contentBox.scss'
import image from '../assets/images/logo_matchbox_amarelo.png'

const ContentBox = (props) => {
  return (
    <div className="contentBox">
        <picture className="contentBox__logo">
            <img src={image} alt="Logo da MatchBox"/>
        </picture>
        <h2 className="contentBox__header contentBox__box">ranking</h2>
        <div className="contentBox__users contentBox__box">
            {props.users.length > 0 && props.users.map((user, i) => 
                <React.Fragment key={`user_${i}`}>
                    <User 
                        picture={user.picture}
                        name={user.name}
                        position={i + 1}
                        description={user.description}
                        positive={user.positive}
                        negative={user.negative}
                    />
                </React.Fragment>
            )}
        </div>
    </div>
  );
}

export default ContentBox;
