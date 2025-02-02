'use client';

import { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import convertToSubCurrency from '../lib/ConvertToSubCurrency';

const Checkout = ({ amount }: { amount: number }) => {
    // Determine the host for the return URL
    const isLocalhost = window.location.host === 'localhost:3000';
    const URL = isLocalhost ? 'http://localhost:3000' : 'https://stripe-payment-one-nu.vercel.app';

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Generate a new client secret whenever the amount changes
    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await fetch('/api/payment-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
                });

                if (!response.ok) {
                    throw new Error('Failed to create PaymentIntent');
                }

                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                setErrorMessage((error as Error).message || 'Something went wrong.');
            }
        };

        createPaymentIntent();
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setErrorMessage('Stripe is not initialized.');
            setLoading(false);
            return;
        }

        try {
            // Submit payment elements
            const { error: submitErrors } = await elements.submit();
            if (submitErrors) {
                throw new Error(submitErrors.message);
            }

            // Confirm payment
            const { error } = await stripe.confirmPayment({
                elements,
                clientSecret: clientSecret as string,
                confirmParams: {
                    return_url: `${URL}/payment-success?amount=${amount}`,
                },
            });

            if (error) {
                throw new Error(error.message || 'Payment confirmation failed.');
            }

            setErrorMessage(null); // Clear errors on success
        } catch (error) {
            setErrorMessage((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {clientSecret && <PaymentElement />}
            <button
                type="submit"
                className={`w-full bg-black text-white py-2 mt-5 ${loading ? 'opacity-50' : ''}`}
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default Checkout;
