type DashboardItemProps = {
  location: string;
  temperature: number;
  unit: string;
};

export const DashboardItem = ({
  weather,
}: {
  weather: DashboardItemProps;
}): JSX.Element => {
  return (
    <div className="DashboardItem">
      <p>{weather.location}</p>
      <p>
        {weather.temperature} {weather.unit}
      </p>
    </div>
  );
};
