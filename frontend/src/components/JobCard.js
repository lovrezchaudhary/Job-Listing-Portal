import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="mb-3 p-3 my-3" style={{ backgroundColor: '#EDDFE0' }}>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
          <Card.Text>Location: {job.location}</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>View Details</Button>
        </Card.Body>
      </Card>

      {/* Modal for Job Details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{job.title} at {job.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Responsibilities:</strong> {job.responsibilities || "Job responsibilities will be displayed here."}</p>
          <p><strong>Qualifications:</strong> {job.qualifications || "B.Tech, BCA, M.Tech"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Back</Button>
          <Button variant="success">Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobCard;
