'use client';

import { Button, Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
      <Title level={2}>Hello Antd</Title>
      <Button type="primary">Click me tran hiep</Button>
      <div style={{ marginTop: 20 }}>
        <Button type="default">Default Button</Button>
        <Button type="dashed" style={{ marginLeft: 8 }}>Dashed Button</Button>
        <Button type="text" style={{ marginLeft: 8 }}>Text Button</Button>
        <Button type="link" style={{ marginLeft: 8 }}>Link Button</Button>
      </div>
    </div>
  );
}
