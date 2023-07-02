import React from "react";
import "./NewsLetter.css";
import SubscribeButton from "../../Buttons/SubscribeButton"
class NewsLetter extends React.Component {
    render() {
        return (
            <>
                <div className="news">
                    <div className="black">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 subscribe">
                                    <h4 className="head">Subscribe To NewsLetter</h4>
                                    <div className="r-flex p-2">
                                        <input type="email" className="form-control" id="simple-search" placeholder="Email ID" required />
                                        <SubscribeButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default NewsLetter;