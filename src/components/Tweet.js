import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const tweets = [];
  for (let i = 0; i < tweet.length; i++) {
    tweets.push(<div className="tweet">
                  <ProfileImage image={tweet[i].user.image} />

                  <div className="body">
                    <div className="top">
                      <User userData={tweet[i].user}/>
                      <Timestamp time={tweet[i].timestamp}/>
                    </div>

                    <Message message={tweet[i].message}/>

                    <Actions />
                  </div>

                  <i class="fas fa-ellipsis-h"></i>
                </div>);
  }

  return tweets;
}

export default Tweet;
