// src/pages/JobList.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import JobCard from '../components/JobCard';  
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs'); 
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Container className="my-5" style={{ backgroundColor: '#c1b6c1', minHeight: '40vh', borderRadius: '8px' }}>
      <Row>
        <Col className="text-center mb-4">
          <h2 className='fw-bold' style={{ color: '#3B1E54' }}>Current Openings</h2>
        </Col>
      </Row>
      
      {loading && (
        <Row className="justify-content-center">
          <Col className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading jobs...</p>
          </Col>
        </Row>
      )}

      {error && (
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}

      <Row className="justify-content-center">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Col xs={12} sm={6} md={4} key={job.id} className="mb-4">
              <JobCard job={job} />
            </Col>
          ))
        ) : (
          !loading && (
            <Col xs={12} className="text-center">
              <p>No job listings available at the moment.</p>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default JobList;
