import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import EstimationForm from './EstimationForm';



const CalculateYourBenefit = () => {

    return (
        <>
            <PageHeader title="Calculate your benefit" />
            <section className="py-16">
                <div className="container mx-auto">
                    <EstimationForm />
                </div>
            </section>
        </>
    );
}

export default CalculateYourBenefit;
