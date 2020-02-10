import React from 'react'
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Hero>
        <Banner title="404" subTitle="Page Not Found">
          <Link to="/" className="btn-primary">Home</Link>
        </Banner>
      </Hero>
    )
}

export default Error;
