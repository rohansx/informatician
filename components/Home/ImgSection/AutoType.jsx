'use client'

export default function AutoType(props) {
    const changeText = (element) => {
        let a = document.querySelector('.nameAnimation div');
        if (element.elapsedTime % 10 === 0) {
            a.innerText = props.txt[0];
        } else if (element.elapsedTime % 5 === 0) {
            a.innerText = props.txt[1];
        }
    };
    return (
        <div className="nameAnimation" onAnimationIteration={(element) => { changeText(element) }}>
            <div>{props.txt[0]}</div>
        </div>
    )
}
