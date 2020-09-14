import React from "react";

export default class Typed extends React.Component {
  state = {
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 250,
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    const Sound = new Audio(process.env.PUBLIC_URL + "typing-sound.mp3");

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150,
    });

    if (!isDeleting && text === fullText) {
      Sound.pause();
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
      Sound.play();
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <div class="center">
        <h1>
          {this.props.heading}&nbsp;
          <span>{this.state.text}</span>
          <span id="cursor"></span>
        </h1>
      </div>
    );
  }
}
