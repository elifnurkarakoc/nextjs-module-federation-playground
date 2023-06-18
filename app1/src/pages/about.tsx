import dynamic from 'next/dynamic';

const Page = dynamic(() => import('app2/pages/about'), { ssr: false });

export default Page;