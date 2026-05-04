import { useState } from 'react';
import Home from './components/Home';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';
import Results from './components/Results';
import VideoLibrary from './components/VideoLibrary';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <>
      {screen === 'home'    && <Home onNavigate={setScreen} />}
      {screen === 'study'   && <StudyMode onNavigate={setScreen} />}
      {screen === 'quiz'    && <QuizMode onNavigate={setScreen} />}
      {screen === 'results' && <Results onNavigate={setScreen} />}
      {screen === 'videos'  && <VideoLibrary onNavigate={setScreen} />}
    </>
  );
}
