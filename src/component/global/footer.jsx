import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  // Style Objects
  const styles = {
    footerContainer: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      paddingTop: '50px',
      fontFamily: "'Poppins', sans-serif",
    },
    footerContent: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 30px 20px',
    },
    footerSection: {
      flex: '1',
      padding: '20px',
      minWidth: '250px',
    },
    logoText: {
      fontSize: '1.8rem',
      marginBottom: '15px',
    },
    span: {
      color: '#00d2ff',
    },
    text: {
      lineHeight: '1.6',
      color: '#ccc',
      marginBottom: '15px',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '1.2rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
    },
    anchor: {
      color: '#ccc',
      textDecoration: 'none',
      transition: '0.3s',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      background: '#333',
      color: 'white',
      textAlign: 'center',
      lineHeight: '40px',
      borderRadius: '50%',
      textDecoration: 'none',
    },
    footerBottom: {
      backgroundColor: '#111',
      color: '#777',
      textCenter: 'center',
      padding: '20px 0',
      fontSize: '0.9rem',
      borderTop: '1px solid #333',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.footerContainer}>
      <footer className="footer-container">
        <div style={styles.footerContent}>
          {/* About Section */}
          <div style={styles.footerSection}>
            <h2 style={styles.logoText}>Ashir<span style={styles.span}>.</span></h2>
            <p style={styles.text}>
              A passionate Web Developer specializing in building high-quality backends and interactive user interfaces.
            </p>
            <div className="contact">
              <span style={{ color: '#ccc' }}>
                <i className="fas fa-envelope"></i> &nbsp; ashirnabeel5@gmail.com
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          {/* <div style={styles.footerSection}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
            <li style={styles.listItem}>Home</li> 
              <li style={styles.listItem}><a  href="#about" style={styles.anchor}>About</a></li>
              <li style={styles.listItem}><a href="#projects" style={styles.anchor}>Projects</a></li>
              <li style={styles.listItem}><a href="#contact" style={styles.anchor}>Contact</a></li>
            </ul>
          </div> */}

          {/* Social Links Section */}
          <div style={styles.footerSection}>
            <h3 style={styles.heading}>Follow Me</h3>
            <div style={styles.socialLinks}>
              <a href="https://github.com/nabeelajmeri0-maker" style={styles.socialIcon}><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ashir-nabeel-9622b7387/?trk=public-profile-join-page" style={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
              <a href="#" style={styles.socialIcon}><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Ashir | Designed with ❤️
        </div>
      </footer>
    </div>
  );
};

export default Footer;