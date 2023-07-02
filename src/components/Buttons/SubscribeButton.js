import React from 'react';
import anime from 'animejs';
import "./SubscribeButton.css"

class SubscribeButton extends React.Component {
  componentDidMount() {
    const basicTimeline = anime.timeline({
      autoplay: false,
    });

    const pathEls = document.querySelectorAll(".check");
    for (let i = 0; i < pathEls.length; i++) {
      const pathEl = pathEls[i];
      const offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
    }

    basicTimeline
      .add({
        targets: ".text",
        duration: 1,
        opacity: "0",
      })
      .add({
        targets: ".button",
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: "#2B2D2F",
        border: "0",
        borderRadius: 100,
      })
      .add({
        targets: ".progress-bar",
        duration: 2000,
        width: 300,
        easing: "linear",
      })
      .add({
        targets: ".button",
        width: 0,
        duration: 1,
      })
      .add({
        targets: ".progress-bar",
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: "#ff4d4d",
      })
      .add({
        targets: pathEls,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 200,
        easing: "easeInOutSine",
      });

    this.basicTimeline = basicTimeline;
  }
  handleClick = async (e) => {
    this.basicTimeline.play();
    e.preventDefault();
    const emailInput = document.getElementById("simple-search");
    const email = emailInput.value;
    console.log(email);

    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email }),
        };

        const response = await fetch(
            "http://localhost:5000/api/addUser",
            requestOptions
        );
        console.log(response)

        if (response.status === 200) {
            alert("Subscribed");
            emailInput = "";
        }
        else alert("Already Subscribed")
    }

    catch (error) {
        console.error(error);
        alert("There was a problem with server, Please try again!")
    }
};
  render() {
    return (
      <main className='main'>
        <div className="button" onClick={this.handleClick}>
          <div className="text">Subscribe</div>
        </div>
        <div className="progress-bar"></div>
        <svg
          className='svg'
          x="0px"
          y="0px"
          viewBox="0 0 25 30"
          style={{ enableBackground: "new 0 0 0 0" }}
        >
          <path className="check st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
        </svg>
      </main>
    );
  }
}

export default SubscribeButton;
