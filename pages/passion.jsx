import Head from 'next/head';
import React from 'react';
import Card from '../components/Card';
import Div from '../components/Div';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';

export default function Service() {
  return (
    <>
      <Head>
        <title>Aces | Passion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Layout>
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Bands"
                      link="/band"
                      src="/images/service_1.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Dancers"
                      link="/dance"
                      src="/images/service_2.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Photo&Videography"
                      link="/photographer"
                      src="/images/service_3.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="DJs"
                      link="/dj"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Studio/Jamroom"
                      link="/studio"
                      src="/images/service_5.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Light&Sound"
                      link="/Light&Sound"
                      src="/images/service_6.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Individual Artist"
                      link="/IndividualArtist"
                      src="/images/service_7.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Events"
                      link="/Events"
                      src="/images/service_8.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
                
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
      </Layout>
    </>
  );
}
