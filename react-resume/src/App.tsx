
import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <Layout>
      <Sidebar data={resumeData} />
      <MainContent data={resumeData} />
    </Layout>
  );
}

export default App;
