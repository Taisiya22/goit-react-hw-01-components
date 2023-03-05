

import { Profile } from '../components/Profile/Profile'
import { Statistics } from '../components/Statistic/Statistic'
import { FriendList } from './Friends/FriendList'
import { TransactionHistory } from './Transaction/Transaction'
import user from 'json/user.json'
import data from 'json/data.json'
import friends from 'json/friends.json'
import transaction from 'json/transaction.json'
import {Helmet} from "react-helmet";
export function App() { 
  return (
    <>
   
            <Helmet>
                <meta charSet="utf-8" />
                <title>Account</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Testing icons and title" />
            </Helmet>
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