interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <head>
        <title>{title}</title>
      </head>
      <main>{children}</main>
    </div>
  );
};

export default function CertificatePage() {
  return (
    <Layout title="Certificate">
      <h1>Certificate</h1>
      <p>This is your Certificate page.</p>
    </Layout>
  );
}
