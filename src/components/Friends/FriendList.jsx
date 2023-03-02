import PropTypes from 'prop-types';
import { FriendItem } from "./FriendItem";

export function FriendList({ friends }) {
  return (<ul className="friend-list">
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