'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle';

const UnsubscribedSuccessPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='m-10 my-[100px]  align-center text-center' >
            <SectionTitle>
                <h1>
                    Unsubscribed Successfully
                </h1>
            </SectionTitle>
            <p>You have been unsubscribed. You will be redirected to the homepage shortly.</p>
        </div>
    );
};

export default UnsubscribedSuccessPage;