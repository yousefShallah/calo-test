import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Form, Input, Button, notification, Col, Row, Space } from "antd";
import { createJob } from "../api";
import { TCreateJob } from "../types";

interface NewJobFormProps {
  setIsModalOpen?: (v: boolean) => void;
}
const NewJobForm: React.FC<NewJobFormProps> = ({ setIsModalOpen }) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createJob, {
    onSuccess: () => {
      notification.success({ message: "Job created successfully!" });
      queryClient.invalidateQueries("jobs");
      form.resetFields();
      setIsModalOpen?.(false);
    },
    onError: () => {
      notification.error({ message: "Failed to create job!" });
    },
  });

  const onFinish = (values: TCreateJob) => {
    mutate({
      title: values.title,
      description: values.description,
    });
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the job title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please enter the job description" },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Col>
            <Space>
              <Button
                loading={isLoading}
                onClick={() => setIsModalOpen?.(false)}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Create Job
              </Button>
            </Space>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default NewJobForm;
