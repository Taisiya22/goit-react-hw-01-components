import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export function FriendItem({ friends: { avatar, name, isOnline } }) {
  return (
    <>
      <li className={css.item}>
        <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
