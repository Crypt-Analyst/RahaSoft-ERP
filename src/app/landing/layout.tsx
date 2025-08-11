
export const metadata = {
  title: 'RahaSoft ERP - Modern ERP for Businesses',
  description: 'A modern, intuitive ERP platform for growing businesses.'
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  // This layout bypasses the main app layout (which has sidebar)
  return children;
}
