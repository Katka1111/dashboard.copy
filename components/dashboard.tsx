'use client'

import React, { useState } from 'react'
import {
  BarChart as LucideBarChart,
  FileText,
  User,
  HelpCircle,
  Download,
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip
} from 'recharts'
import { UserButton } from "@clerk/nextjs";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { name: 'Products', icon: LucideBarChart },
    { name: 'Contracts', icon: FileText },
    { name: 'Investments', icon: User },
    { name: 'Documents', icon: HelpCircle },
    { name: 'Profile', icon: User },
  ]

  return (
    <div className="w-64 bg-[#2c2c2c] h-screen p-4 text-white flex flex-col">
      {/* Logo and Navigation */}
      <div>
        <div className="flex items-center mb-8">
          <LucideBarChart className="mr-2 text-pink-500" />
          <h1 className="text-xl font-bold text-white">Life Insurance</h1>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex items-center w-full p-3 mt-2 text-left rounded-xl transition-all duration-200 ${
              activeItem === item.name 
                ? 'bg-[#40E0D0] text-black font-medium shadow-lg' 
                : 'bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black'
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon className={`mr-2 h-5 w-5 ${
              activeItem === item.name || 'hover:bg-[#40E0D0]'
                ? 'text-black' 
                : 'text-white'
            }`} />
            {item.name}
          </button>
        ))}
      </div>

      {/* Sign Out Button */}
      <button
        className="mt-auto flex items-center w-full p-3 text-left rounded-xl transition-all duration-200 bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black"
        onClick={() => {
          // Add sign out logic here
          console.log('Sign out clicked')
        }}
      >
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Sign Out
      </button>
    </div>
  )
}

const DashboardContent = () => {
  const products = [
    {
      productName: "Investment Life Insurance",
      contractNumber: "IL-2024-001",
      accountBalance: "€45,678.90",
      regularPremium: "€500/month",
    },
    {
      productName: "Pension Plan Plus",
      contractNumber: "PP-2023-458",
      accountBalance: "€78,123.45",
      regularPremium: "€750/month",
    },
    {
      productName: "Education Savings Plan",
      contractNumber: "ESP-2023-789",
      accountBalance: "€25,890.30",
      regularPremium: "€300/month",
    },
  ];

  const activities = [
    {
      date: "2024-01-15",
      action: "Premium Payment",
      details: "Investment Life Insurance",
      value: 500.00,
      currency: "EUR",
      type: "payment"
    },
    {
      date: "2024-01-10",
      action: "Policy Update",
      details: "Updated beneficiary information",
      value: null,
      currency: null,
      type: "update"
    },
    {
      date: "2024-01-05",
      action: "Investment Change",
      details: "Portfolio rebalancing",
      value: 10000.00,
      currency: "EUR",
      type: "investment"
    },
    {
      date: "2024-01-01",
      action: "Premium Payment",
      details: "Pension Plan Plus",
      value: 750.00,
      currency: "EUR",
      type: "payment"
    },
  ];

  return (
    <div className="flex gap-6">
      {/* Products List */}
      <div className="flex-1 space-y-4">
        {products.map((product, index) => (
          <Card key={index} className="bg-[#2c2c2c] border-none">
            <CardContent className="p-6">
              <div className="flex justify-between">
                {/* Product Info Column */}
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Product Name</p>
                    <p className="text-white font-medium">{product.productName}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Contract Number</p>
                    <p className="text-white font-medium">{product.contractNumber}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Account Balance</p>
                    <p className="text-white font-medium">{product.accountBalance}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Regular Premium</p>
                    <p className="text-white font-medium">{product.regularPremium}</p>
                  </div>
                </div>

                {/* Buttons Column */}
                <div className="flex flex-col gap-2">
                  <Button 
                    className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
                  >
                    Details
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-[#40E0D0] hover:text-black hover:border-[#40E0D0] transition-all duration-200"
                  >
                    View History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right side containers */}
      <div className="w-96 space-y-6">
        {/* Last Activities Container */}
        <Card className="bg-[#2c2c2c] border-none">
          <CardHeader className="space-y-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">Last Activities</CardTitle>
              <div className="relative w-48">
                <Input 
                  placeholder="Search" 
                  className="bg-[#1a1a1a] border-none text-white text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-pink-500 pr-8"
                />
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="border-l-2 border-pink-500 pl-4 py-2">
                <p className="text-gray-400 text-sm">{activity.date}</p>
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-gray-300 text-sm">{activity.details}</p>
                {activity.value && activity.currency && (
                  <p className="text-pink-500 font-medium mt-1">
                    {activity.type === "payment" ? "-" : "+"}{activity.value.toLocaleString('en-EU', {
                      style: 'currency',
                      currency: activity.currency
                    })}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Client Support Container */}
        <Card className="bg-[#2c2c2c] border-none">
          <CardHeader>
            <CardTitle className="text-white">Client Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Type your message..." 
                className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 focus:ring-1 focus:ring-pink-500"
              />
              <Button 
                className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200 p-2"
                size="icon"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProfileContent = () => {
  return (
    <div className="flex gap-6">
      {/* Profile Information Card */}
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" />
            </div>
            
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" type="date" />
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input id="nationality" placeholder="e.g. German" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St, City, Country" />
            </div>

            <Button 
              type="submit"
              className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
            >
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Identification Documents Card */}
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Identification Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* ID Card Upload */}
            <div className="space-y-2">
              <Label>ID Card</Label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:border-pink-500 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-gray-400">Upload ID Card</span>
                  <input type="file" className="hidden" />
                  <Button 
                    className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
                  >
                    Choose File
                  </Button>
                </div>
              </div>
            </div>

            {/* Passport Upload */}
            <div className="space-y-2">
              <Label>Passport</Label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:border-pink-500 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-gray-400">Upload Passport</span>
                  <input type="file" className="hidden" />
                  <Button 
                    className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
                  >
                    Choose File
                  </Button>
                </div>
              </div>
            </div>

            {/* Residence Permit Upload */}
            <div className="space-y-2">
              <Label>Residence Permit</Label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:border-pink-500 transition-colors">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-gray-400">Upload Residence Permit</span>
                  <input type="file" className="hidden" />
                  <Button 
                    className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
                  >
                    Choose File
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const PoliciesContent = () => {
  const contractDetails = {
    basicInfo: {
      productName: "Investment Life Insurance",
      contractNumber: "IL-2024-001",
      startDate: "01.01.2024",
      premiumFrequency: "Monthly",
      paymentPeriod: "15th of each month",
      nextPayment: "15.02.2024",
      endDate: "01.01.2054"
    },
    coverage: {
      deathSumInsured: "€500,000",
      accidentInsurance: "€250,000",
      illnessesOperations: "€100,000"
    }
  };

  const contractData = {
    policyHolder: {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "15.05.1980"
    },
    insuredPerson: {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "15.05.1980"
    },
    beneficiaries: [
      {
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: "22.08.1982"
      }
    ]
  };

  const financialData = [
    { month: 'Jan', investment: 45000, returns: 47000 },
    { month: 'Feb', investment: 46000, returns: 48500 },
    { month: 'Mar', investment: 47000, returns: 50000 },
    { month: 'Apr', investment: 48000, returns: 52000 },
    { month: 'May', investment: 49000, returns: 53500 },
    { month: 'Jun', investment: 50000, returns: 55000 },
  ];

  return (
    <div className="space-y-8">
      {/* First Card - Contract Details */}
      <Card className="bg-[#2c2c2c] border-none">
        <CardContent className="p-6">
          <div className="flex gap-12">
            {/* Left Column - Basic Information */}
            <div className="space-y-4 flex-1">
              <div>
                <p className="text-gray-400 text-sm">Product Name</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.productName}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Contract Number</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.contractNumber}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Start of Contract</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.startDate}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Insurance Premium Payment Frequency</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.premiumFrequency}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Payment Period</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.paymentPeriod}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Next Insurance Premium Payment</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.nextPayment}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">End Date</p>
                <p className="text-white font-medium">{contractDetails.basicInfo.endDate}</p>
              </div>
            </div>

            {/* Right Column - Coverage Information */}
            <div className="space-y-4 flex-1">
              <div>
                <p className="text-gray-400 text-sm">Covered Risk: Death Sum Insured</p>
                <p className="text-white font-medium">{contractDetails.coverage.deathSumInsured}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Accident Insurance</p>
                <p className="text-white font-medium">{contractDetails.coverage.accidentInsurance}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Illnesses and Operations</p>
                <p className="text-white font-medium">{contractDetails.coverage.illnessesOperations}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Second Row - Chart and Contract Data */}
      <div className="flex gap-6">
        {/* Financial Overview Chart */}
        <Card className="bg-[#2c2c2c] border-none flex-1">
          <CardHeader>
            <CardTitle className="text-white">Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={financialData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(value) => `€${value}`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '0.375rem',
                      color: '#fff'
                    }}
                    formatter={(value) => [`€${value}`, '']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="investment" 
                    name="Total Investment"
                    stroke="#EC4899" 
                    strokeWidth={2}
                    dot={{ fill: '#EC4899' }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="returns" 
                    name="Total Returns"
                    stroke="#40E0D0" 
                    strokeWidth={2}
                    dot={{ fill: '#40E0D0' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Contract Data Card */}
        <Card className="bg-[#2c2c2c] border-none w-96">
          <CardHeader>
            <CardTitle className="text-white">Contract Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Policy Holder */}
            <div className="space-y-2">
              <h3 className="text-gray-400 font-medium">Policy Holder</h3>
              <div className="space-y-1">
                <p className="text-white">
                  {contractData.policyHolder.firstName} {contractData.policyHolder.lastName}
                </p>
                <p className="text-gray-400 text-sm">
                  Born: {contractData.policyHolder.dateOfBirth}
                </p>
              </div>
            </div>

            {/* Insured Person */}
            <div className="space-y-2">
              <h3 className="text-gray-400 font-medium">Insured Person</h3>
              <div className="space-y-1">
                <p className="text-white">
                  {contractData.insuredPerson.firstName} {contractData.insuredPerson.lastName}
                </p>
                <p className="text-gray-400 text-sm">
                  Born: {contractData.insuredPerson.dateOfBirth}
                </p>
              </div>
            </div>

            {/* Beneficiaries */}
            <div className="space-y-2">
              <h3 className="text-gray-400 font-medium">Beneficiaries</h3>
              {contractData.beneficiaries.map((beneficiary, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-white">
                    {beneficiary.firstName} {beneficiary.lastName}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Born: {beneficiary.dateOfBirth}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ClaimsContent = () => {
  const claims = [
    { id: 1, policyName: 'Term Life Insurance', claimDate: '2023-05-15', amount: '$10,000', status: 'Approved' },
    { id: 2, policyName: 'Whole Life Insurance', claimDate: '2023-06-01', amount: '$5,000', status: 'Pending' },
    { id: 3, policyName: 'Universal Life Insurance', claimDate: '2023-06-10', amount: '$7,500', status: 'Under Review' },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">Policy Name</th>
                  <th className="pb-2">Claim Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim) => (
                  <tr key={claim.id}>
                    <td className="py-2">{claim.policyName}</td>
                    <td className="py-2">{claim.claimDate}</td>
                    <td className="py-2">{claim.amount}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        claim.status === 'Approved' ? 'text-green-800 bg-green-100' :
                        claim.status === 'Pending' ? 'text-yellow-800 bg-yellow-100' :
                        'text-blue-800 bg-blue-100'
                      }`}>
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <Button>
        <LucideBarChart className="mr-2 h-4 w-4" /> File New Claim
      </Button>
    </div>
  )
}

const PaymentsContent = () => {
  const paymentHistory = [
    { id: 1, date: '2023-06-01', amount: 500, status: 'Paid' },
    { id: 2, date: '2023-05-01', amount: 500, status: 'Paid' },
    { id: 3, date: '2023-04-01', amount: 500, status: 'Paid' },
    { id: 4, date: '2023-03-01', amount: 500, status: 'Paid' },
    { id: 5, date: '2023-02-01', amount: 500, status: 'Paid' },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Payment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Next Payment Due</p>
              <p className="text-2xl font-bold">July 1, 2023</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Amount Due</p>
              <p className="text-2xl font-bold">$500.00</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Payment Frequency</p>
              <p className="text-2xl font-bold">Monthly</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Paid (YTD)</p>
              <p className="text-2xl font-bold">$3,000.00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td className="py-2">{payment.date}</td>
                    <td className="py-2">${payment.amount.toFixed(2)}</td>
                    <td className="py-2">
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Main component definition
export default function Dashboard() {
  const [activeItem, setActiveItem] = useState<string>('Products')

  return (
    <div className="flex h-screen bg-black">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <MainContent activeItem={activeItem} />
    </div>
  )
}

interface MainContentProps {
  activeItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem }) => {
  return (
    <div className="flex-1 p-8 overflow-auto bg-black text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">{activeItem}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Jan 20, 2023 - Feb 09, 2023</span>
          <Button 
            className="bg-pink-500 text-white hover:bg-[#40E0D0] hover:text-black transition-all duration-200"
          >
            <Download className="mr-2" />
            Download
          </Button>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
        </div>
      </div>
      {activeItem === 'Products' && <DashboardContent />}
      {activeItem === 'Contracts' && <PoliciesContent />}
      {activeItem === 'Investments' && <ClaimsContent />}
      {activeItem === 'Documents' && <PaymentsContent />}
      {activeItem === 'Profile' && <ProfileContent />}
    </div>
  )
}
