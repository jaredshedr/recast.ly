import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      currentVideo: exampleVideoData[0], // method that handles someone clicking a video and sends that video to VideoPlayer
      q: 'pokemon'
    };

    this.handleClick = this.handleClick.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.updateVideos = _.debounce(this.updateVideos, 500);
  }

  handleClick (event, video) {
    // event.persist();
    // handle a user clicking a link
    // on click get the video object
    this.setState({
      currentVideo: video
    });
    // reset state for current video
    // pass state.currentvideo to videoplayer
  }

  componentDidMount () {
    // handle searching for a string on window
    // create a function to change the state
    var changeState = function (data) {
      this.setState({
        allVideos: data
      });
    };

    searchYouTube(this.state.q, changeState.bind(this));
  }

  searchBar (event, currentText) {
    // console.log(event.target.value);
    // gets sent down to Search.jsx
    // ran in search.jsx based on input
    // calls component did mount with a text variable
    this.setState({
      q: event.target.value
    });
    this.updateVideos();
  }

  updateVideos () {
    var changeState = function (data) {
      this.setState({
        allVideos: data,
      });
    };

    searchYouTube(this.state.q, changeState.bind(this));
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchBar = {this.searchBar} componentDidMount = {this.componentDidMount}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.allVideos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;





