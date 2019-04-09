// Import React
import React, { Fragment } from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

import createTheme from 'spectacle/lib/themes/default';

const images = {
  pirateImg: require('../assets/hook-pirate1.png'),
  olxLogo: require('../assets/olxlogo.png'),
  hooksStatus: require('../assets/hooks-react.png'),
  wrapperHell: require('../assets/wrapperhell.jpg'),
  reactHistory: require('../assets/reacthistory.png'),
  allTheThings: require('../assets/all-the-things.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'whitesmoke', // black
    tertiary: 'palegreen', // green
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']}>
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            HOOKS!
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            fit
            bold
            style={{
              zIndex: 1,
              position: 'relative'
            }}
          >
            in React
          </Text>
          <Image
            src={images.pirateImg}
            style={{
              bottom: '160px',
              position: 'relative',
              zIndex: 2
            }}
          />
          <Image
            src={images.olxLogo}
            style={{
              left: '0px',
              position: 'absolute',
              width: '200px',
              bottom: '0',
              background: 'white',
              padding: '10px 30px'
            }}
          />
          <Text
            textColor="tertiary"
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '80px',
              fontSize: '1.5rem'
            }}
          >
            Radoslaw Malecki - April 2019
          </Text>
        </Slide>
        <Slide>
          <Heading
            size={4}
            lineHeight={1}
            textColor="secondary"
            style={{
              border: '10px solid hotpink',
              background: 'black',
              position: 'relative',
              zIndex: 1
            }}
          >
            Let's go back in history!
          </Heading>
          <Image src={images.reactHistory} />
        </Slide>
        <Slide>
          <Heading
            size={4}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            Life without hooks
          </Heading>
          <Text
            textColor="tertiary"
            style={{
              marginTop: '30px'
            }}
          >
            <span>Our components are surrounded by layers of:</span>
            <ul style={{ textAlign: 'left' }}>
              <li>HOCs</li>
              <li>render props</li>
              <li>providers,</li>
              <li>consumers,</li>
              <li>other wtf abstractions...</li>
            </ul>
          </Text>
        </Slide>
        <Slide>
          <Heading
            size={4}
            lineHeight={1}
            textColor="secondary"
            style={{
              border: '10px solid hotpink',
              background: 'black',
              position: 'relative',
              zIndex: 1
            }}
          >
            What was the purpose of those abstractions?
          </Heading>
          <Image
            src={images.wrapperHell}
            style={{
              position: 'absolute',
              top: '0px',
              zIndex: 0,
              width: '58%'
            }}
          />
        </Slide>
        <Slide>
          <Heading
            size={4}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            to reuse stateful logic
          </Heading>
        </Slide>
        <Slide>
          <Heading
            size={4}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            Hooks do the same!
          </Heading>
          <Text
            textColor="tertiary"
            style={{
              marginTop: '30px'
            }}
          >
            but <br />
            ...without changing your component hierarchy
          </Text>
        </Slide>
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            useState
          </Heading>
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".8em"
          code={require('raw-loader!./examples/useState-example')}
          ranges={[
            {
              loc: [0, 1],
              title: 'First import useState'
            },
            {
              loc: [3, 4],
              title: 'Setup your initial state by calling useState',
              note: (
                <div
                  style={{
                    position: 'fixed',
                    bottom: '200px',
                    width: '50%',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left'
                  }}
                >
                  <u>useState</u> returns the pair of:
                  <ul style={{ margin: '0' }}>
                    <li>state itself (showJoke)</li>
                    <li>updating function (setShowJoke)</li>
                  </ul>
                </div>
              )
            },
            {
              loc: [0, 21],
              note: (
                <a
                  style={{
                    position: 'fixed',
                    bottom: '200px',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left',
                    color: 'magenta',
                    border: '3px solid magenta'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/m5n0381xoj"
                >
                  https://codesandbox.io/s/m5n0381xoj
                </a>
              )
            }
          ]}
        />

        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            useContext
          </Heading>
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".8em"
          code={require('raw-loader!./examples/useContext-example')}
          ranges={[
            {
              loc: [0, 1],
              title: 'First import useContext'
            },
            {
              loc: [1, 2],
              title: 'Import context'
            },
            {
              loc: [4, 5],
              title: (<><span>Set the ThemeContext reference</span><br/><span>in useContext hook</span></>)
            },
            {
              loc: [0, 22],
              note: (
                <a
                  style={{
                    position: 'fixed',
                    color: 'magenta',
                    bottom: '100px',
                    right: '100px',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left',
                    border: '3px solid magenta'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/xmo1j8l5z"
                >
                  https://codesandbox.io/s/xmo1j8l5z
                </a>
              )
            }
          ]}
        />
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            useReducer
          </Heading>
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".8em"
          code={require('raw-loader!./examples/useReducer-example')}
          ranges={[
            {
              loc: [0, 1],
              title: 'First import useReducer'
            },
            {
              loc: [3, 4],
              title: 'Call useReducer',
              note: (
                <div
                  style={{
                    position: 'fixed',
                    bottom: '300px',
                    width: '50%',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left'
                  }}
                >
                  <u>useReducer</u> returns the pair of:
                  <ul style={{ margin: '0' }}>
                    <li>state itself (jokes)</li>
                    <li>action creator (dispatch)</li>
                  </ul>
                </div>
              )
            },
            {
              loc: [11, 12],
              title: 'Call useReducer',
              note: (
                <div
                  style={{
                    position: 'fixed',
                    bottom: '300px',
                    width: '50%',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left'
                  }}
                >
                  <u>useReducer</u> takes initial state as a secound arg
                  <br/>- empty list in this case
                </div>
              )
            },
            {
              loc: [3, 12],
              title: (<>Pure function<br/>(like in redux)</>)
            },
            {
              loc: [13, 22],
              title: 'Action dispatchers'
            },
            {
              loc: [22, 30],
              title: 'Dispatchers as event handlers',
              note: (
                <a
                  style={{
                    position: 'fixed',
                    color: 'magenta',
                    bottom: '100px',
                    right: '100px',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left',
                    border: '3px solid magenta'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/6x2p1ry2kn"
                >
                  https://codesandbox.io/s/6x2p1ry2kn
                </a>
              )
            }
          ]}
        />
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            How to reuse this logic?
          </Heading>
        </Slide>
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            Custom hooks
          </Heading>
          <Text
            textColor="tertiary"
            style={{
              marginTop: '30px',
              marginBottom: '0px'
            }}
          >
            do all the things!
          </Text>
          <Image
            src={images.allTheThings}
            style={{
              bottom: '-80px',
              position: 'relative',
              zIndex: 2
            }}
          />
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".7em"
          code={require('raw-loader!./examples/useApi-example')}
          ranges={[
            {
              loc: [2, 4],
              title: 'Define the function'
            },
            {
              loc: [5, 13],
              title: 'Set up state'
            },
            {
              loc: [14, 23],
              title: 'Define action creators'
            },
            {
              loc: [24, 27],
              title: (<>Specify behaviour<br/>(componentDidMount)</>)
            },
            {
              loc: [28, 29],
              title: 'Expose an API'
            },
            {
              loc: [2, 30],
              title: 'custom useAPI hook',
              note: (
                <a
                  style={{
                    position: 'fixed',
                    color: 'magenta',
                    bottom: '100px',
                    right: '100px',
                    fontFamily: 'monospace',
                    fontSize: '1.8rem',
                    background: 'black',
                    padding: '30px',
                    textAlign: 'left',
                    border: '3px solid magenta'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/o7zrp8vloq"
                >
                  https://codesandbox.io/s/o7zrp8vloq
                </a>
              )
            }
          ]}
        />
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            How to use that hook?
          </Heading>
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".8em"
          code={require('raw-loader!./examples/useApi-usage-example')}
          ranges={[
            {
              loc: [0, 20],
              title: 'Just like the other hooks!'
            }
          ]}
        />
        <Slide>
          <Heading
            size={1}
            lineHeight={1}
            textColor="secondary"
            style={{ border: '10px solid hotpink' }}
          >
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
