// import HeroImg from '../images/hero-img.png';

export default function Hero() {
    return (
        <div className="hero">
            <div className='img--wrapper'>
                <img className='hero--img' src='./images/hero-img.png' alt='hero-img' />
            </div>
            <h2 className='hero--title'>Online Experiences</h2>
            <p className='hero--paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}