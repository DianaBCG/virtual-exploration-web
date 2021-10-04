import Particles from 'react-particles-js';
import './background.css';

const Background = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <Particles
        className="bg"
        height="100%"
        params={{
          'particles': {
            'number': {
              'value': 160,
              'density': {
                'enable': false
              }
            },
            'size': {
              'value': 2,
              'random': true,
              'anim': {
                'speed': 4,
                'size_min': 0.3
              }
            },
            'line_linked': {
              'enable': false,
              'color': '#345634',
              'blur': 5
            },
            'color': {
              'value': '#8fe1fe',
              'color': {
                'value': '#354549'
              }
            },
            'move': {
              'random': true,
              'speed': 0.5,
              // 'direction': 'top',
              'out_mode': 'out'
            }
          },
          'interactivity': {
            // 'events': {
            //   'onhover': {
            //     'enable': true,
            //     'mode': 'bubble'
            //   },
            //   'onclick': {
            //     'enable': true,
            //     'mode': 'repulse'
            //   }
            // },
            'modes': {
              'bubble': {
                'distance': 250,
                'duration': 2,
                'size': 0,
                'opacity': 0
              },
              'repulse': {
                'distance': 400,
                'duration': 4
              }
            }
          }
        }}
      />
      <div className="earth"/>
    </div>
  )
}

export default Background;