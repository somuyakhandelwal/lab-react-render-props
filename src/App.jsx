import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Common from './RenderProps/Common';
import LikeRender from './RenderProps/LikeRender';
import PostRender from './RenderProps/PostRender';
function App() {
  return (
    <div>
      <h3>Hoc Props</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>Render Props</h3>
      <div>
        <Common render ={ (count,func)=>{ return <LikeRender count = {count} func = {func}/> }}/>
        <Common render ={ (count,func)=>{ return <PostRender count = {count} func = {func}/> }}/>

      </div>
    </div>
  );
}

export default App;