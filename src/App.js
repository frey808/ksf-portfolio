import './App.css';
import space_drift from './assets/space_drift.mp4'
import lavalamp from './assets/lavalamp_red.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Sunshine Development</h2>
        <p>by Kai Sunshine Frazier</p>
      </header>
      <main>
        <div className="display">
          <video src={space_drift} className="video" loop="true" autoplay="autoplay" muted/>
          <div className="description" >
            <h3>Space Drift</h3>
            This fragment shader is run on the GPU, coded in GLSL and displayed using GlslViewer.
            The techniques in use are Perlin noise, cellular noise, parallax motion, and RGB gradient functions.
          </div>
        </div>
        <div className="display">
          <video src={lavalamp} className="video" loop="true" autoplay="autoplay" muted/>
          <div className="description" >
            <h3>Lavalamp</h3>
            This graphic runs in React Native. It uses animation values from Reanimated and path interpolation from Skia.
            The techniques in use are derived value functions, Perlin noise, a metaball effect, and RGB gradient functions.
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
