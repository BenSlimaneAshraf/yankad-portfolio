const Footer = () => {
  return (
    <footer className='app__footer'>
      <section>
        <span className='app__logo'>find me in:</span>
        <ul className='app__menu'>
          <li className='icon'>
            <i className='ri-twitter-fill ri-lg'></i>
          </li>
          <li className='icon'>
            <i className='ri-facebook-fill ri-lg'></i>
          </li>
        </ul>
      </section>
      <section>
        <ul className='app__menu'>
          <li className='github__link'>
            <span className='github__username'>@username</span>
            <i className='ri-github-fill ri-lg'></i>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
