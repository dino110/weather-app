import { DashboardItem } from "./DashboardItem";

export const Dashboard: React.FC = (): JSX.Element => {
  const cityWeather = { location: "Zagreb", temperature: 34.5, unit: "C" };
  return (
    <div className="DashboardContainer">
      <h1>Dashboard</h1>
      <div className="Dashboard">
        <DashboardItem weather={cityWeather} />
        <DashboardItem weather={cityWeather} />
      </div>
    </div>
  );
};
