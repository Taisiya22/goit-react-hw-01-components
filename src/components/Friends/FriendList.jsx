import PropTypes from 'prop-types';
import { FriendItem } from "./FriendItem";
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (<ul className={css.friendlist}>
    {friends.map((friend) => (<FriendItem key={friend.id} friends={friend} />))}
  
</ul>)
}
 
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired, 
   }) 
  )
}