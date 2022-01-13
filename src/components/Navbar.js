import Logo from '../images/airbnb.png';

export default function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={Logo} alt='logo' />
        </nav>
    )
}