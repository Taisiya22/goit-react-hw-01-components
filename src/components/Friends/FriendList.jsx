import { FriendItem } from "./FriendItem";

export function FriendList({ friends }) {
  return (<ul className="friend-list">
    {friends.map((friend) => (<FriendItem key={friend.id} friends={friend} />))}
  
</ul>)
 }