import { BarChart3, Clock, ShieldCheck } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className="bg-[#f9fafb] py-30">
      
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
  
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Why Choose <span className="text-blue-600">Cryptozen?</span>
      </h2>
      <p className="text-gray-600 mb-12">
        Your go-to platform for reliable, secure, and real-time crypto experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <ShieldCheck className="mx-auto text-blue-600 h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-gray-600">Enjoy military-grade encryption for all your crypto transactions.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <BarChart3 className="mx-auto text-blue-600 h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Market Updates</h3>
          <p className="text-gray-600">Stay ahead with real-time prices, charts, and coin analytics.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
          <Clock className="mx-auto text-blue-600 h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">We’re always here to help you with your crypto journey.</p>
        </div>
        
      </div>
      
    </div>
    
  
  </div>
  )
}

export default About
