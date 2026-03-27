import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle de galletita {id}</h2>
    </div>
  );
}

export default Detail;