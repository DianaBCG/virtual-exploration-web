import './about.css';
import lfel from '../../assets/images/lfelipe.jpg';
import aldaco from '../../assets/images/aldaco.jpg';
import jorge from '../../assets/images/jorgeCortes.jpg';
import diana from '../../assets/images/dbcg.jpg';

const About = () => {
  const us = [
    {
      name: 'Luis Felipe Camarena Pérez',
      src: lfel,
      initials: 'LC',
      link: 'linkedin.com/in/luis-felipe-camarena-pérez-3004b9128'
    },
    {
      name: 'José de Jesús Aldaco Arvizu',
      src: aldaco,
      initials: 'JA',
      link: 'https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-aldaco-arvizu-8b92a81bb'
    },
    {
      name: 'Jorge Enrique Cortes',
      src: jorge,
      initials: 'JC',
      link: 'https://www.linkedin.com/mwlite/in/jorge-enrique-cort%C3%A9s-san-l%C3%A1zaro-115555213'
    },
    {
      name: 'Víctor Humberto Cholula Juárez',
      src: '',
      initials: 'VC'
    },
    {
      name: 'Diana Belén Cubas García',
      src: diana,
      initials: 'DC',
      link: 'https://mx.linkedin.com/in/diana-bel%C3%A9n-cubas-garc%C3%ADa-8540ab159'
    },
  ]
  return (
    <>
      <div className="about-info">
        We are Tlani Nantli team, our name in náhuatl reflects our origins. We did the connection with the term “Earth mother” due to the importance of subsoil for humanity. By analizing planets subsurfaces, we can learn about its natural phenomena and processes. In choosing this project for the NASASpaceChallenge, we wanted to propose an improvement on the tools used for the space exploration missions, Apollo and Artemis commanded by NASA.
      </div>
      <div style={{ display: 'flex', marginTop: 50 }}>
        {us.map((item) => (
          <div style={{ margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', border: '1px solid cyan', overflow: 'hidden', marginBottom: 15 }}>
              {item.src && (
                <img src={item.src} alt="" width="100%" height="100%" />
              )}
              {!item.src && (
                <div
                  style={{ backgroundColor: 'gray', fontSize:24, color: 'black', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}
                >
                  {item.initials}
                </div>
              )}
            </div>
            <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: 18}}>{item.name}</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default About;