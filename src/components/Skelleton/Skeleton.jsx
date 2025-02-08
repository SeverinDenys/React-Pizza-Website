import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={520}
    viewBox="0 0 300 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Pizza Image */}
    <circle cx="150" cy="100" r="100" />

    {/* Pizza Name */}
    <rect x="75" y="220" rx="8" ry="8" width="150" height="24" />

    {/* Crust Options */}
    <rect x="30" y="260" rx="8" ry="8" width="100" height="36" />
    <rect x="170" y="260" rx="8" ry="8" width="100" height="36" />

    {/* Size Options */}
    <rect x="30" y="310" rx="8" ry="8" width="70" height="36" />
    <rect x="115" y="310" rx="8" ry="8" width="70" height="36" />
    <rect x="200" y="310" rx="8" ry="8" width="70" height="36" />

    {/* Price */}
    <rect x="90" y="370" rx="8" ry="8" width="120" height="24" />

    {/* Add Button */}
    <rect x="50" y="410" rx="24" ry="24" width="200" height="50" />
  </ContentLoader>
);

export default Skeleton;
