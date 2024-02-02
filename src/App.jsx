import './App.css';

function App() {
return (
    <div className="App bg-red-400 w-full h-full pt-24">
        <h2 className='text-white text-4xl w-fit m-auto'>Pricing</h2>
        <div className='cards w-fit m-auto'>
            <div className='bg-white inline-block p-10 mr-10'>
                <h3 className='text-3xl mb-2'>Pro</h3>
                <p className='mb-2'>1% / transaction</p>
                <p className='text-red-400 mb-2'>Virtual Terminal</p>
                <p className='text-red-400'>Unlimited Spaces</p>
            </div>
            <div className='bg-white inline-block p-10 mr-10'>
                <h3 className='text-3xl mb-2'>Premium</h3>
                <p className='mb-2'>1% + $12 / month</p>
                <p className='text-red-400 mb-2'>Digital Delivery</p>
                <p className='text-red-400 mb-2'>Virtual Terminal</p>
                <p className='text-red-400'>Unlimited Spaces</p>
            </div>
            <div className='bg-white inline-block p-10'>
                <h3 className='text-3xl mb-2'>Platinum</h3>
                <p className='mb-2'>1% + $29 / month</p>
                <p className='text-red-400 mb-2'>Recurring Billing</p>
                <p className='text-red-400 mb-2'>Digital Delivery</p>
                <p className='text-red-400 mb-2'>Virtual Terminal</p>
                <p className='text-red-400'>Unlimited Spaces</p>
            </div>
        </div>
        
    </div>
);
}

export default App;
