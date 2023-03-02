import PropTypes from 'prop-types';
export function FriendItem({ friends: { avatar, name, isOnline } }) { 
    return (
       <div> 
            <li className="item">
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
</li>
      </div> 
    )
}

FriendItem.propTypes = {
    friends: PropTypes.shape(
        { avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }
    )
}