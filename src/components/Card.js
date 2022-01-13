import Star from '../images/Star.png';

export default function Card(props) {
    return (
        <div className="card">
            <img className='card--figure' src={props.figure} alt="figure" />
            <div className='card--stars'>
                <img className='card--rating' src={Star} alt="rating" />
                <span className='card--point'>{props.point}</span>
                <span className='gray'>{props.rating}</span>
                <span className='gray'>{props.country}</span>
            </div>
            <div className='card--title'>
                <p>{props.title}</p>
                <p><span className='bold'>{props.price}</span>{props.person}</p>
            </div>
        </div>
    )
}