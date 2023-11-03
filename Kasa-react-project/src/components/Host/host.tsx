interface HostProps {
  host: {
    name: string;
    picture: string;
  };
}

const Host: React.FC<HostProps> = ({ host }) => {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} className="host__picture" />
      <h2 className="host__name">{host.name}</h2>
    </div>
  );
};

export default Host;
