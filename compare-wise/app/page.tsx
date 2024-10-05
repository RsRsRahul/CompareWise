import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, TrendingUp, DollarSign, BarChart2, CheckCircle, Bell, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-indigo-900 bg-opacity-80">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingCart className="h-6 w-6 text-yellow-300" />
          <span className="ml-2 text-2xl font-bold text-white">CompareWise</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-indigo-100 hover:text-yellow-300 hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-indigo-100 hover:text-yellow-300 hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-indigo-100 hover:text-yellow-300 hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-indigo-100 hover:text-yellow-300 hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:w-1/2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <span className="inline-block text-white drop-shadow-lg">
                    Compare Amazon Prices Like a Pro
                  </span>
                </h1>
                <p className="max-w-[600px] text-indigo-100 text-lg md:text-xl drop-shadow">
                  Save time and money with CompareWise. Find the best deals on Amazon products in seconds.
                </p>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="flex-1 bg-white"
                      placeholder="Enter product name or URL"
                      type="text"
                    />
                    <Button type="submit" className="bg-indigo-900 text-white hover:bg-indigo-800">
                      <Search className="h-4 w-4 mr-2" />
                      Compare
                    </Button>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <Bell className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-indigo-900">Price Drop Alerts</h3>
                  <p className="text-indigo-700">Get notified instantly when prices fall on your watched items.</p>
                </div>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <Zap className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-indigo-900">Lightning-Fast Comparisons</h3>
                  <p className="text-indigo-700">Compare prices across multiple sellers in milliseconds.</p>
                </div>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <BarChart2 className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-indigo-900">Historical Price Trends</h3>
                  <p className="text-indigo-700">View price history charts to make informed buying decisions.</p>
                </div>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <Shield className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-indigo-900">Reliable Data</h3>
                  <p className="text-indigo-700">Trust our accurate and up-to-date price information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-indigo-900">Why Choose CompareWise?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-900">Real-time Price Tracking</h3>
                <p className="text-indigo-700">Get up-to-date prices from multiple sellers on Amazon.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSign className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-900">Huge Savings</h3>
                <p className="text-indigo-700">Find the best deals and discounts with our advanced comparison tools.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-indigo-900">Price History Charts</h3>
                <p className="text-indigo-700">Analyze price trends to make informed purchasing decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-24 bg-indigo-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-900">Start Saving Today</h2>
                <p className="max-w-[600px] text-indigo-700 text-lg">
                  Join thousands of smart shoppers who use CompareWise to find the best deals on Amazon. It&apos;s free, easy,
                  and could save you hundreds on your next purchase.
                </p>
                <Button className="w-full sm:w-auto bg-indigo-900 text-white hover:bg-indigo-800" size="lg">
                  Get Started for Free
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                    <span className="text-lg text-indigo-900">Compare prices from multiple sellers</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                    <span className="text-lg text-indigo-900">Set price drop alerts</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                    <span className="text-lg text-indigo-900">View price history and trends</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                    <span className="text-lg text-indigo-900">Save your favorite products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-indigo-200 bg-indigo-900 bg-opacity-80">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-indigo-100">© 2024 CompareWise. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4 text-indigo-100 hover:text-yellow-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-indigo-100 hover:text-yellow-300" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}