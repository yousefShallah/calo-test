import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Button, Card, Col, Modal, Row } from "antd";
import JobList from "./components/JobList";
import NewJobForm from "./components/NewJobForm";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
          marginTop: "24px",
        }}
      >
        <Row justify="center">
          <Col span={20}>
            <Card
              title="Job Management System"
              extra={
                <Button onClick={() => setIsModalOpen(true)} type="primary">
                  Add Nesw
                </Button>
              }
            >
              <JobList />
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
              >
                <NewJobForm setIsModalOpen={setIsModalOpen} />
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </QueryClientProvider>
  );
};

export default App;
