import css from './footer.module.scss';

const Footer = () => (
  <footer className={css.footer}>
    <p>PhoneBook &copy; 2023 Created by </p>
    <a
      href="https://github.com/rizorno"
      target="_blank"
         rel="noreferrer noopener"
         className={css['footer-link']}
    >
      Mykhailo PASHKO
    </a>
  </footer>
);

export default Footer;
