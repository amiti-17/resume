
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
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
