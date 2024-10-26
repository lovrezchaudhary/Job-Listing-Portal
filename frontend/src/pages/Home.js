import React from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import Testimonials from '../components/Testimonials';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const sampleJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Co.', location: 'New Delhi' },
    { id: 2, title: 'Backend Developer', company: 'InnoTech', location: 'Noida' },
    { id: 3, title: 'Full Stack Engineer', company: 'WebWorks', location: 'Bengaluru' },
  ];

  return (
    <>
      
      <Container className="my-5 bg-light-grey text-white min-vh-100">
        <Row>
          <Col className="text-center mb-4 font-weight-bold font-italic" >
            <h2 className='text-center fw-bold ' style={{ color: '#3B1E54' }}>Find Your Dream Job</h2>
          </Col>
        </Row>
        <SearchBar />
        <Row className="justify-content-center">
          {sampleJobs.map((job) => (
            <Col xs={12} sm={6} md={4} key={job.id} className="mb-4">
              <JobCard job={job} />
            </Col>
          ))}
        </Row>
        <Testimonials />
      </Container>
    </>
  );
};

export default Home;
