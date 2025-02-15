import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import LandingPage from './LandingPage';
import Store from './Store';
import CaseStudies from './CaseStudies';
import ContactForm from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home/> },
      {path:'custom-shopify-landing-page',element:<LandingPage/>},
      {path:'boco-shopify-store-build',element:<Store/>},
      {path:'case-studies',element:<CaseStudies/>},
      {path:'contact',element: <ContactForm/>}
       
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;