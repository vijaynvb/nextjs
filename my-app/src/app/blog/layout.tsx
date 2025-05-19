import Container from "@/components/ui/container";

export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <Container>
        {children}
        </Container>
    );
  }