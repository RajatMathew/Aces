import Head from 'next/head';
import Layout from '../../components/Layout';
import Spacing from '../../components/Spacing';
import Pricing from '../../components/listing';

export default function Home() {

    return (
        <>
            <Head>
                <title>Aces</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <Layout>
                <Spacing lg="150" md="80" />
                <Pricing
                    title='Join Our community'
                    regText='Register'
                    regLink='/Light&Sound/register'
                    refText='Refer'
                    refLink='/'
                    features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
                    btnText='Load More'
                    btnLink='/'
                />
            </Layout>
        </>
    );
}
