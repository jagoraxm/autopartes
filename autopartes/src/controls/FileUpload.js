import React, { Component } from 'react';
import * as firebase from 'firebase-admin';

firebase.initializeApp({
    apiKey: "AIzaSyABcAJ7TB4I3hId6UJzUeK0F2idULLA24k",
    authDomain: "autopartes-e2100.firebaseapp.com",
    databaseURL: "https://autopartes-e2100.firebaseio.com",
    projectId: "autopartes-e2100",
    storageBucket: "autopartes-e2100.appspot.com",
    messagingSenderId: "999396382534"
})

class FileUpload extends Component {
  constructor () {
    super()
    this.state = {
      uploadValue: 0
    }
  }

  handleOnChange (e){
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(`Autopartes/${file.name}`)
    const task = storageRef.put(file)

    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadValue: percentage
      })
    }, (error) => {
      console.error(error.message)
    }, () => {
      // Upload complete
      this.setState({
        picture: task.snapshot.downloadURL
      })
    })
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'>
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type='file' onChange={(e) => {this.handleOnChange(e)}}/>
        <br />
        <img width='90' src={this.state.picture} alt="Imagen" />
      </div>
    )
  }
}

export default FileUpload;