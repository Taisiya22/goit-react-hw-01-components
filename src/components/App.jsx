// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Profile } from '../components/Profile/Profile'
import { Statistics } from '../components/Statistic/Statistic'
import { FriendList } from './Friends/FriendList'
import { TransactionHistory } from './Transaction/Transaction'
import user from 'json/user.json'
import data from 'json/data.json'
import friends from 'json/friends.json'
import transaction from 'json/transaction.json'
export function App() { 
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />;
</>
  )
}