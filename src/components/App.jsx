import React, { Component } from 'react';
import S3Uploader from 'react-aws-s3-uploader';
import '../styles/components/App.styl';

class App extends Component {
  state = {
    file: '',
  };

  handleFile = file => {
    this.setState({
      file,
    });
  };

  render() {
    const { file } = this.state;
    return (
      <div className="App">
        <h1>Uploading Photos to Amazon S3</h1>
        <a href="https://www.npmjs.com/package/react-aws-s3-uploader">
          react-aws-s3-uploader
        </a>
        <div className="App-example">
          <S3Uploader
            buttonName="Upload File"
            bucketRegion="us-east-1"
            albumBucketName="arepa"
            IdentityPoolId="us-east-1:2fc911ef-0679-4339-bd17-dd9e5733893a"
            handleFile={this.handleFile}
          />
        </div>
        <div>{file ? <img src={file} alt="images" /> : null}</div>
      </div>
    );
  }
}

export default App;
