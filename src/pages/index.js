import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Features     from '../components/features/Features';
import Services from '../components/services/Services';
import Capabilities from '../components/capabilities/Capabilities';
import Contact      from '../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Capabilities />
      <Services />
      <Features />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
