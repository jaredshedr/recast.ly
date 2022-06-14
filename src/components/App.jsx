import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: 'blank' // method that handles someone clicking a video and sends that video to VideoPlayer
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    // event.persist();
    console.log(event.currentTarget);
    // handle a user clicking a link
    // on click get the video object
    // reset state for current video
    // pass state.currentvideo to videoplayer
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {exampleVideoData[0]}/>
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






{ /*
<div><h5><em>videoList</em> view goes here</h5></div> */ }

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video = {exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos = {exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );