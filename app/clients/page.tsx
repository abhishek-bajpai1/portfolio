import type { Metadata } from 'next';
import ClientsPage from '../components/ClientsPage';

export const metadata: Metadata = {
    title: 'Our Clients | ProdTech Labs',
    description: 'Trusted by innovative startups and growing businesses. See who we work with.',
};

export default function Clients() {
    return <ClientsPage />;
}
