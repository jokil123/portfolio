export default function FullPage({ children }: { children: React.ReactNode }) {
  return <div style={{ height: "100vh", width: "100vw" }}>{children}</div>;
}
