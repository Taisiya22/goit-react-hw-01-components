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
import user from 'json/user.json'
import data from 'json/data.json'

export function App() { 
  return (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
     
</div>
  )
}