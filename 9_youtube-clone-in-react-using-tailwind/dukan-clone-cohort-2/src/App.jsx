import { RevenueCard } from "./components/RevenueCard";

export default function App() {
  return (
    <div className="bg-slate-100	">
      <RevenueCard title={"Amount Pending"} orderCount={"13"} amount="92,312.20" />
    </div>
  )
}