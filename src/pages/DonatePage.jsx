import React, { useState } from 'react';
import { Heart, CreditCard, Landmark, CheckCircle2 } from 'lucide-react';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    if (amount !== 'Other') {
      setCustomAmount('');
    }
  };

  const amounts = ['50', '100', '250', '500', '1000', 'Other'];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[40vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={`${import.meta.env.BASE_URL}2.jpg`} 
            alt="Donate to Oregon Affordable Communities" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            fetchpriority="high"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <Heart size={48} className="text-secondary" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-200">Your contribution helps preserve affordable communities across Oregon.</p>
        </div>
      </section>

      {/* Donation Content */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Why Donate */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Make a Lasting Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When you donate to Oregon Affordable Communities, you are directly supporting the acquisition and preservation of manufactured home parks. You are helping to protect vulnerable residents from displacement and ensuring these vital communities remain affordable for generations to come.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">Prevent Displacement</h3>
                  <p className="text-gray-600">Keep families, seniors, and individuals in the communities they call home.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">Improve Infrastructure</h3>
                  <p className="text-gray-600">Fund critical safety and quality of life improvements in our parks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">Build Community</h3>
                  <p className="text-gray-600">Support outreach workers and the development of shared community spaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Form Card */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary">Secure Donation</h3>
              <p className="text-gray-500 text-sm mt-2">Oregon Affordable Communities is a 501(c)(3) nonprofit organization.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert(`Processing donation of $${selectedAmount === 'Other' ? customAmount : selectedAmount}...`); }}>
              {/* Amount Selection */}
              <div className="grid grid-cols-3 gap-4">
                {amounts.map((amount) => (
                  <button 
                    key={amount} 
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className={`py-3 rounded-lg font-bold border transition-all ${selectedAmount === amount ? 'bg-secondary text-white border-secondary shadow-md' : 'bg-white text-gray-600 border-gray-300 hover:border-secondary hover:text-secondary'}`}
                  >
                    {amount === 'Other' ? amount : `$${amount}`}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              {selectedAmount === 'Other' && (
                <div className="animate-fade-in">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">Custom Amount ($)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-bold">$</span>
                    <input 
                      type="number" 
                      id="customAmount" 
                      min="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-bold text-lg text-primary" 
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Payment Type */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('credit')}
                  className={`flex-1 py-3 font-semibold flex justify-center items-center gap-2 border-r border-gray-300 transition-colors ${paymentMethod === 'credit' ? 'bg-gray-50 text-primary' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                >
                  <CreditCard size={18} /> Credit Card
                </button>
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('bank')}
                  className={`flex-1 py-3 font-semibold flex justify-center items-center gap-2 transition-colors ${paymentMethod === 'bank' ? 'bg-gray-50 text-primary' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                >
                  <Landmark size={18} /> Bank Transfer
                </button>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:brightness-95 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Donate ${selectedAmount === 'Other' ? (customAmount || '0') : selectedAmount}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DonatePage;
