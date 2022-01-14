
export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    console.info(props.item)

    return (
        <div className="card">
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
            {badgeText ? <div className="card--badge">{badgeText}</div> : null}
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <img className='card--figure' src={props.item.coverImg} alt="figure" />
            <div className='card--stars'>
                <img className='card--rating' src="./images/Star.png" alt="rating" />
                <span className='card--point'>{props.item.point}</span>
                <span className='gray'>{props.item.rating}</span>
                <span className='gray'>{props.item.country} | </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <div className='card--title'>
                <p>{props.item.title}</p>
                <p><span className='bold'>{props.item.price}</span>{props.item.person}</p>
            </div>
        </div>
    )
}