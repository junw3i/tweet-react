var monkey = "hello";

// console.log(tweets[0].user.name);

class Tweet extends React.Component {
  render() {
    return (
      <div class="tweet">
        <p class="first-row">
          <b class="float-left">{this.props.tweet.user.name}</b>
          <div class="float-right">
          @{this.props.tweet.user.screen_name}
          </div>
        </p>

        <p>{this.props.tweet.text}</p>
      </div>
    )
  }
}

class Twitter extends React.Component {
  render() {
    let allTweets = this.props.tweets.map( (tweet) => {
                          return <Tweet tweet={tweet} />;
                        });

    return (
      <div>
        <h3>WELCOME TO TWITTER</h3>
        {allTweets}
      </div>
    )
  }
};

ReactDOM.render(
    <Twitter tweets={tweets}/>,
    document.getElementById('root')
);
