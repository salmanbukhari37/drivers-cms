import React from 'react';

const Avatar = ({ avatar, width, height }) => (
    <div className="image">
        <img src={ avatar } className="img-circle elevation-2" alt="User Image" width={ width } height={ height } />
    </div>
)

const Name = ({ fullName }) => (
    <div className="info">
        <a href="#" className="d-block">{ fullName }</a>
    </div>
);
const UserInfo = ( props ) => {
    return(
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            { props.children }
        </div>
    );
}

UserInfo.Avatar = Avatar;
UserInfo.Name = Name;

export default UserInfo;