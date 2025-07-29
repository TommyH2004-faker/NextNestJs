'use client';

import { Button, Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div className="container">
      <div>
        <Title level={2}>Hello Antd</Title>
        <Button type="primary">Click me tran hiep</Button>
        <Button type="default">Default Button</Button>
        <Button type="dashed" style={{ marginLeft: 8 }}>Dashed Button</Button>
        <Button type="text" style={{ marginLeft: 8 }}>Text Button</Button>
        <Button type="link" style={{ marginLeft: 8 }}>Link Button</Button>
      </div>
      <div className="footer">
        <p>© 2023 My Ant Design App</p>
        <Button type="link" style={{ marginLeft: 8 }}>Privacy Policy</Button>
        <Button type="link" style={{ marginLeft: 8 }}>Terms of Service</Button>
      </div>
    </div>
  );
}
