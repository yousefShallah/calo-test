import React from "react";
import { useQuery } from "react-query";
import { fetchJobs } from "../api";
import { Table, Tag, Spin } from "antd";

const JobList: React.FC = () => {
  const { data: jobs, isLoading } = useQuery("jobs", fetchJobs, {
    refetchInterval: 5000, // Poll every 5 seconds
  });

  if (isLoading) {
    return <Spin tip="Loading jobs..." />;
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "resolved",
      key: "resolved",
      render: (resolved: boolean, record: any) =>
        resolved ? (
          <Tag color="green">Resolved</Tag>
        ) : (
          <Tag color="orange">Pending</Tag>
        ),
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      render: (result: string | undefined) => result || "N/A",
    },
  ];

  return <Table dataSource={jobs} columns={columns} rowKey="id" />;
};

export default JobList;
